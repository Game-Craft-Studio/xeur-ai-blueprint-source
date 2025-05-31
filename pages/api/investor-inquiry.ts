import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface InvestorInquiry {
  id: string;
  email: string;
  company: string;
  title: string;
  checkSize: string;
  timeline: string;
  interest: string;
  timestamp: string;
  ip: string | undefined;
  userAgent: string | undefined;
  referrer: string | undefined;
  status: 'new' | 'contacted' | 'follow_up' | 'qualified' | 'not_qualified';
}

const DATA_FILE = path.join(process.cwd(), 'data', 'investor-inquiries.json');

function ensureDataDirectory() {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function readInquiries(): InvestorInquiry[] {
  ensureDataDirectory();
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading inquiries:', error);
  }
  return [];
}

function writeInquiries(inquiries: InvestorInquiry[]) {
  ensureDataDirectory();
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2));
  } catch (error) {
    console.error('Error writing inquiries:', error);
    throw error;
  }
}

// Critical: Immediate founder notification for investor inquiries
async function notifyFoundersUrgent(inquiry: InvestorInquiry) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('No Slack webhook configured - CRITICAL INVESTOR INQUIRY MISSED');
    return;
  }

  const urgencyLevel = getUrgencyLevel(inquiry.checkSize, inquiry.timeline);
  const emoji = urgencyLevel === 'high' ? '🚨🚨🚨' : urgencyLevel === 'medium' ? '🚨🚨' : '🚨';

  const message = {
    text: `${emoji} INVESTOR INQUIRY ${emoji}`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*${emoji} INVESTOR INQUIRY - ${urgencyLevel.toUpperCase()} PRIORITY*\n\n*Company:* ${inquiry.company}\n*Contact:* ${inquiry.email}\n*Title:* ${inquiry.title}\n*Check Size:* ${inquiry.checkSize}\n*Timeline:* ${inquiry.timeline}\n*Time:* ${new Date(inquiry.timestamp).toLocaleString()}\n\n*Interest:*\n${inquiry.interest}`
        }
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: { type: "plain_text", text: "Email Now" },
            url: `mailto:${inquiry.email}?subject=XEUR.AI Investment Opportunity - Follow Up&body=Thank you for your interest in XEUR.AI. I'd like to schedule a call to discuss our $2.5M seed round at $25M pre-money.%0A%0AWhen would be a good time for a 30-minute call this week?%0A%0ABest regards,%0AHarshit Verma%0ACEO, XEUR.AI`,
            style: "primary"
          },
          {
            type: "button", 
            text: { type: "plain_text", text: "View All Inquiries" },
            url: `https://your-admin-dashboard.com/investors`
          }
        ]
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
    console.error('CRITICAL: Failed to send investor inquiry notification:', error);
  }
}

function getUrgencyLevel(checkSize: string, timeline: string): 'high' | 'medium' | 'low' {
  const isLargeCheck = checkSize.includes('$500K') || checkSize.includes('$1M+');
  const isImmediate = timeline === 'Immediate' || timeline === '2-4 weeks';
  
  if (isLargeCheck && isImmediate) return 'high';
  if (isLargeCheck || isImmediate) return 'medium';
  return 'low';
}

// Send immediate auto-response to investor
async function sendInvestorAutoResponse(inquiry: InvestorInquiry) {
  // Log for now - replace with actual email service
  console.log(`Auto-response would be sent to ${inquiry.email} from ${inquiry.company}`);
  
  // In production, send actual email here using the template below
  return `Subject: Thank you for your interest in XEUR.AI - Let's schedule a call

    Dear ${inquiry.title ? `${inquiry.title} ` : ''}Team at ${inquiry.company},

    Thank you for your interest in XEUR.AI's $2.5M seed round at $25M pre-money.

    Key highlights you should know:
    • NVIDIA Inception Member with Capital Connect VC access
    • $142B market opportunity in democratizing game development  
    • Working platform with proven Unreal Engine + OpenAI integration
    • Clear path to proprietary IP development in India

    I'll personally respond within 24 hours to schedule a demo and discussion.

    Best regards,
    Harshit Verma
    CEO & Co-Founder
    XEUR.AI`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { 
    email, 
    company, 
    title, 
    checkSize, 
    timeline, 
    interest 
  } = req.body;

  // Validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  if (!company || company.trim().length < 2) {
    return res.status(400).json({ error: 'Company name required' });
  }

  if (!interest || interest.trim().length < 10) {
    return res.status(400).json({ error: 'Please provide more details about your investment interest' });
  }

  try {
    const inquiries = readInquiries();
    
    // Check for duplicate recent inquiry (within 7 days)
    const recentInquiry = inquiries.find(i => 
      i.email.toLowerCase() === email.toLowerCase() && 
      Date.now() - new Date(i.timestamp).getTime() < 7 * 24 * 60 * 60 * 1000
    );

    if (recentInquiry) {
      return res.status(409).json({ 
        error: 'Recent inquiry already submitted. We will respond within 24 hours.',
        previousInquiry: recentInquiry.timestamp
      });
    }

    // Create new inquiry
    const newInquiry: InvestorInquiry = {
      id: Date.now().toString(),
      email: email.toLowerCase(),
      company: company.trim(),
      title: title?.trim() || '',
      checkSize: checkSize || '',
      timeline: timeline || '',
      interest: interest.trim(),
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] as string || req.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
      referrer: req.headers.referer,
      status: 'new'
    };

    inquiries.push(newInquiry);
    writeInquiries(inquiries);

    // CRITICAL: Immediate notifications
    await Promise.all([
      notifyFoundersUrgent(newInquiry),
      sendInvestorAutoResponse(newInquiry)
    ]);

    res.status(200).json({
      success: true,
      message: 'Investment inquiry submitted successfully',
      responseTime: 'We will respond within 24 hours',
      nextSteps: [
        'Founders will review your inquiry immediately',
        'Personal response within 24 hours', 
        'Demo and pitch deck sharing',
        'Follow-up call scheduling'
      ]
    });

  } catch (error) {
    console.error('CRITICAL: Investor inquiry processing failed:', error);
    res.status(500).json({
      error: 'Failed to submit inquiry. Please try again or email directly to founders@xeur.ai'
    });
  }
}
