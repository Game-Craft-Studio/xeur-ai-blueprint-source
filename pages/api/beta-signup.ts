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
  ip?: string;
  userAgent?: string;
  referrer?: string;
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

// Send Slack notification
async function notifySlack(signup: BetaSignup, totalCount: number) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('No Slack webhook configured');
    return;
  }

  const message = {
    text: `🚀 New Beta Signup #${totalCount}`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*New Beta Signup*\n*Email:* ${signup.email}\n*Source:* ${signup.source}\n*Updates:* ${signup.subscribe ? 'Yes' : 'No'}\n*Time:* ${new Date(signup.timestamp).toLocaleString()}\n*Total Signups:* ${totalCount}/500`
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
async function sendWelcomeEmail(email: string, position: number) {
  // For immediate implementation, just log
  // Replace with actual email service (Resend, SendGrid, etc.)
  console.log(`Welcome email would be sent to ${email} - Position: ${position}`);
  
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

  const { email, subscribe, source = 'website' } = req.body;

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

    // Add to list
    signups.push(newSignup);
    
    // Save to file
    writeSignups(signups);

    const position = signups.length;

    // Send notifications
    await Promise.all([
      notifySlack(newSignup, position),
      sendWelcomeEmail(email, position)
    ]);

    // Return success
    res.status(200).json({
      success: true,
      message: 'Successfully joined beta waitlist',
      position,
      totalSignups: position,
      remainingSpots: Math.max(0, 500 - position)
    });

  } catch (error) {
    console.error('Beta signup error:', error);
    res.status(500).json({
      error: 'Failed to join beta. Please try again.'
    });
  }
}
