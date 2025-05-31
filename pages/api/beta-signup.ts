import { NextApiRequest, NextApiResponse } from 'next';

// For immediate implementation, we'll use a simple JSON file approach
// In production, replace with PostgreSQL/Supabase
import fs from 'fs';
import path from 'path';

interface BetaSignup {
  id: string;
  email: string;
  subscribe: boolean;
  source: string;
  timestamp: string;
  ip?: string | undefined;
  userAgent?: string | undefined;
  referrer?: string | undefined;
  referralCode?: string | undefined;
  referrerEmail?: string | undefined;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'beta-signups.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read existing signups
function readSignups(): BetaSignup[] {
  ensureDataDirectory();
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading signups:', error);
  }
  return [];
}

// Write signups to file
function writeSignups(signups: BetaSignup[]) {
  ensureDataDirectory();
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(signups, null, 2));
  } catch (error) {
    console.error('Error writing signups:', error);
    throw error;
  }
}

// Validate referral code and get referrer info
async function validateReferralCode(referralCode: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/referrals?code=${referralCode}`);
    if (response.ok) {
      const data = await response.json();
      return data.valid ? data : null;
    }
  } catch (error) {
    console.error('Error validating referral code:', error);
  }
  return null;
}

// Process referral after successful signup
async function processReferral(newSignupEmail: string, referralCode: string, _referrerEmail: string) {
  try {
    // Import the helper function
    const { processReferralSignup } = await import('./referrals');
    await processReferralSignup(newSignupEmail, referralCode);
  } catch (error) {
    console.error('Error processing referral:', error);
  }
}

// Send Slack notification
async function notifySlack(signup: BetaSignup, totalCount: number) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('No Slack webhook configured');
    return;
  }

  const isReferral = signup.referralCode && signup.referrerEmail;
  const message = {
    text: `🚀 New Beta Signup #${totalCount}${isReferral ? ' (Referral)' : ''}`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*New Beta Signup${isReferral ? ' (Referral)' : ''}*\n*Email:* ${signup.email}\n*Source:* ${signup.source}\n*Updates:* ${signup.subscribe ? 'Yes' : 'No'}${isReferral ? `\n*Referred by:* ${signup.referrerEmail}\n*Referral Code:* ${signup.referralCode}` : ''}\n*Time:* ${new Date(signup.timestamp).toLocaleString()}\n*Total Signups:* ${totalCount}/500`
        }
      }
    ]
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });
  } catch (error) {
    console.error('Failed to send Slack notification:', error);
  }
}

// Send email notification (simple implementation)
async function sendWelcomeEmail(email: string, position: number, isReferral: boolean = false) {
  // For immediate implementation, just log
  // Replace with actual email service (Resend, SendGrid, etc.)
  console.log(`Welcome email would be sent to ${email} - Position: ${position}${isReferral ? ' (Referral)' : ''}`);
  
  // If you have email service configured:
  /*
  const emailService = process.env.EMAIL_SERVICE_API_KEY;
  if (emailService) {
    // Implement actual email sending
  }
  */
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, subscribe, source = 'website', referralCode } = req.body;

  // Validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    // Read existing signups
    const signups = readSignups();
    
    // Check for duplicate
    const existingSignup = signups.find(s => s.email.toLowerCase() === email.toLowerCase());
    if (existingSignup) {
      return res.status(409).json({ 
        error: 'Email already registered for beta access',
        position: signups.indexOf(existingSignup) + 1
      });
    }

    // Validate referral code if provided
    let referralData = null;
    if (referralCode && referralCode.trim()) {
      referralData = await validateReferralCode(referralCode.trim());
    }

    // Create new signup
    const newSignup: BetaSignup = {
      id: Date.now().toString(),
      email: email.toLowerCase(),
      subscribe: subscribe || false,
      source,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] as string || req.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
      referrer: req.headers.referer
    };

    // Add referral info if valid
    if (referralData) {
      newSignup.referralCode = referralCode.trim().toUpperCase();
      newSignup.referrerEmail = referralData.referrerEmail;
    }

    // Add to list
    signups.push(newSignup);
    
    // Save to file
    writeSignups(signups);

    const position = signups.length;

    // Process referral tracking
    if (referralData) {
      await processReferral(email, referralCode.trim(), referralData.referrerEmail);
    }

    // Send notifications
    await Promise.all([
      notifySlack(newSignup, position),
      sendWelcomeEmail(email, position, !!referralData)
    ]);

    // Create referral tracking entry for new user
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/referrals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, action: 'create_referral' })
      });
    } catch (error) {
      console.error('Failed to create referral entry:', error);
    }

    // Return success
    res.status(200).json({
      success: true,
      message: 'Successfully joined beta waitlist',
      position,
      totalSignups: position,
      remainingSpots: Math.max(0, 500 - position),
      wasReferred: !!referralData,
      referrerEmail: referralData?.referrerEmail
    });

  } catch (error) {
    console.error('Beta signup error:', error);
    res.status(500).json({
      error: 'Failed to join beta. Please try again.'
    });
  }
}
