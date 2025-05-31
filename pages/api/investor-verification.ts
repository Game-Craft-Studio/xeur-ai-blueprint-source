import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface VerifiedInvestor {
  id: string;
  email: string;
  company: string;
  title: string;
  fundType: string; // VC, Angel, Family Office, etc.
  checkSize: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  verificationCode: string;
  verificationAttempts: number;
  companyDomain: string;
  linkedinProfile?: string;
  website?: string;
  createdAt: string;
  verifiedAt?: string;
  lastUpdateSent?: string;
  updatePreferences: {
    funding: boolean;
    product: boolean;
    partnerships: boolean;
    metrics: boolean;
  };
}

const VERIFIED_INVESTORS_FILE = path.join(process.cwd(), 'data', 'verified-investors.json');

// List of known VC/investment company domains
const KNOWN_INVESTOR_DOMAINS = [
  'a16z.com', 'sequoiacap.com', 'accel.com', 'bessemer.com', 'gv.com',
  'foundrycollective.com', 'nea.com', 'kleinerperkins.com', 'redpoint.com',
  'greylock.com', 'firstround.com', 'spark.co', 'crv.com', 'benchmark.com',
  'matrix.com', 'khoslaventures.com', 'dcrfund.com', 'indexventures.com',
  'insight.vc', 'atomico.com', 'balderton.com', 'local.vc', 'founderfund.com',
  'tigerglobal.com', 'coatue.com', 'generalcatalyst.com', 'ggv.com'
];

function ensureDataDirectory() {
  const dataDir = path.dirname(VERIFIED_INVESTORS_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function readVerifiedInvestors(): VerifiedInvestor[] {
  ensureDataDirectory();
  try {
    if (fs.existsSync(VERIFIED_INVESTORS_FILE)) {
      const data = fs.readFileSync(VERIFIED_INVESTORS_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading verified investors:', error);
  }
  return [];
}

function writeVerifiedInvestors(investors: VerifiedInvestor[]) {
  ensureDataDirectory();
  try {
    fs.writeFileSync(VERIFIED_INVESTORS_FILE, JSON.stringify(investors, null, 2));
  } catch (error) {
    console.error('Error writing verified investors:', error);
    throw error;
  }
}

function generateVerificationCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function getCompanyDomain(email: string): string {
  const parts = email.split('@');
  if (parts.length < 2 || !parts[1]) {
    throw new Error('Invalid email format');
  }
  return parts[1].toLowerCase();
}

function isKnownInvestorDomain(domain: string): boolean {
  return KNOWN_INVESTOR_DOMAINS.includes(domain);
}

async function sendVerificationEmail(investor: VerifiedInvestor) {
  // In production, integrate with your email service
  console.log(`Verification email would be sent to ${investor.email}`);
  console.log(`Verification code: ${investor.verificationCode}`);
  
  // Implement actual email sending here
}

async function notifyFoundersNewInvestor(investor: VerifiedInvestor) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;
  
  const isKnownVC = isKnownInvestorDomain(investor.companyDomain);
  const priority = isKnownVC ? '🚨🚨🚨 HIGH PRIORITY' : '🚨 NEW';
  
  const message = {
    text: `${priority} Investor Verification Request`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*${priority} INVESTOR VERIFICATION*\n\n*Company:* ${investor.company}\n*Domain:* ${investor.companyDomain}\n*Contact:* ${investor.email}\n*Title:* ${investor.title}\n*Fund Type:* ${investor.fundType}\n*Check Size:* ${investor.checkSize}\n*Known VC Domain:* ${isKnownVC ? '✅ YES' : '❌ No'}\n*Status:* Pending verification`
        }
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: { type: "plain_text", text: "Research Company" },
            url: `https://www.google.com/search?q="${investor.company}"+venture+capital+fund`
          },
          {
            type: "button",
            text: { type: "plain_text", text: "LinkedIn Search" },
            url: `https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(investor.company)}`
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
    console.error('Failed to send investor verification notification:', error);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { action, email, verificationCode, ...otherData } = req.body;
    
    if (action === 'register') {
      // Register new investor for verification
      const { company, title, fundType, checkSize, linkedinProfile, website, updatePreferences } = otherData;
      
      if (!email || !company || !title) {
        return res.status(400).json({ error: 'Email, company, and title are required' });
      }
      
      try {
        const investors = readVerifiedInvestors();
        const existingInvestor = investors.find(inv => inv.email.toLowerCase() === email.toLowerCase());
        
        if (existingInvestor) {
          if (existingInvestor.verificationStatus === 'verified') {
            return res.status(409).json({ error: 'Email already verified for investor updates' });
          } else {
            // Resend verification if still pending
            existingInvestor.verificationCode = generateVerificationCode();
            existingInvestor.verificationAttempts += 1;
            
            await sendVerificationEmail(existingInvestor);
            writeVerifiedInvestors(investors);
            
            return res.status(200).json({
              message: 'Verification code resent',
              requiresVerification: true
            });
          }
        }
        
        const companyDomain = getCompanyDomain(email);
        const newInvestor: VerifiedInvestor = {
          id: Date.now().toString(),
          email: email.toLowerCase(),
          company: company.trim(),
          title: title.trim(),
          fundType: fundType || 'VC',
          checkSize: checkSize || '',
          verificationStatus: 'pending',
          verificationCode: generateVerificationCode(),
          verificationAttempts: 1,
          companyDomain,
          linkedinProfile,
          website,
          createdAt: new Date().toISOString(),
          updatePreferences: updatePreferences || {
            funding: true,
            product: true,
            partnerships: true,
            metrics: true
          }
        };
        
        investors.push(newInvestor);
        writeVerifiedInvestors(investors);
        
        // Send notifications
        await Promise.all([
          sendVerificationEmail(newInvestor),
          notifyFoundersNewInvestor(newInvestor)
        ]);
        
        res.status(200).json({
          success: true,
          message: 'Verification code sent to your email',
          requiresVerification: true,
          isKnownInvestorDomain: isKnownInvestorDomain(companyDomain)
        });
        
      } catch (error) {
        console.error('Investor registration error:', error);
        res.status(500).json({ error: 'Failed to register for investor updates' });
      }
      
    } else if (action === 'verify') {
      // Verify investor with code
      if (!email || !verificationCode) {
        return res.status(400).json({ error: 'Email and verification code required' });
      }
      
      try {
        const investors = readVerifiedInvestors();
        const investor = investors.find(inv => 
          inv.email.toLowerCase() === email.toLowerCase() && 
          inv.verificationCode === verificationCode.toUpperCase()
        );
        
        if (!investor) {
          return res.status(400).json({ error: 'Invalid verification code or email' });
        }
        
        if (investor.verificationStatus === 'verified') {
          return res.status(409).json({ error: 'Email already verified' });
        }
        
        // Mark as verified
        investor.verificationStatus = 'verified';
        investor.verifiedAt = new Date().toISOString();
        
        writeVerifiedInvestors(investors);
        
        // Notify founders of successful verification
        const webhookUrl = process.env.SLACK_WEBHOOK_URL;
        if (webhookUrl) {
          const message = {
            text: `✅ Investor Verified: ${investor.company}`,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*✅ INVESTOR VERIFIED*\n*Company:* ${investor.company}\n*Contact:* ${investor.email}\n*Title:* ${investor.title}\n*Now eligible for investor updates*`
                }
              }
            ]
          };
          
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
          });
        }
        
        res.status(200).json({
          success: true,
          message: 'Email verified successfully',
          investor: {
            company: investor.company,
            title: investor.title,
            updatePreferences: investor.updatePreferences,
            verifiedAt: investor.verifiedAt
          }
        });
        
      } catch (error) {
        console.error('Investor verification error:', error);
        res.status(500).json({ error: 'Failed to verify investor email' });
      }
      
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
    
  } else if (req.method === 'GET') {
    // Get investor data or stats
    const { email, stats } = req.query;
    
    try {
      const investors = readVerifiedInvestors();
      
      if (stats === 'true') {
        // Return stats for admin dashboard
        const totalInvestors = investors.length;
        const verifiedInvestors = investors.filter(inv => inv.verificationStatus === 'verified').length;
        const pendingInvestors = investors.filter(inv => inv.verificationStatus === 'pending').length;
        const knownVCInvestors = investors.filter(inv => isKnownInvestorDomain(inv.companyDomain)).length;
        
        const fundTypes = investors.reduce((acc, inv) => {
          acc[inv.fundType] = (acc[inv.fundType] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        
        res.status(200).json({
          totalInvestors,
          verifiedInvestors,
          pendingInvestors,
          knownVCInvestors,
          fundTypes,
          recentRegistrations: investors
            .filter(inv => Date.now() - new Date(inv.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000)
            .length
        });
        
      } else if (email) {
        // Return specific investor data
        const investor = investors.find(inv => inv.email.toLowerCase() === (email as string).toLowerCase());
        
        if (!investor) {
          return res.status(404).json({ error: 'Investor not found' });
        }
        
        res.status(200).json({
          status: investor.verificationStatus,
          company: investor.company,
          title: investor.title,
          updatePreferences: investor.updatePreferences,
          createdAt: investor.createdAt,
          verifiedAt: investor.verifiedAt
        });
        
      } else {
        res.status(400).json({ error: 'Email or stats parameter required' });
      }
      
    } catch (error) {
      console.error('Investor data retrieval error:', error);
      res.status(500).json({ error: 'Failed to retrieve investor data' });
    }
    
  } else if (req.method === 'PUT') {
    // Update investor preferences
    const { email, updatePreferences } = req.body;
    
    if (!email || !updatePreferences) {
      return res.status(400).json({ error: 'Email and update preferences required' });
    }
    
    try {
      const investors = readVerifiedInvestors();
      const investor = investors.find(inv => inv.email.toLowerCase() === email.toLowerCase());
      
      if (!investor || investor.verificationStatus !== 'verified') {
        return res.status(404).json({ error: 'Verified investor not found' });
      }
      
      investor.updatePreferences = { ...investor.updatePreferences, ...updatePreferences };
      writeVerifiedInvestors(investors);
      
      res.status(200).json({
        success: true,
        message: 'Update preferences saved',
        updatePreferences: investor.updatePreferences
      });
      
    } catch (error) {
      console.error('Investor preferences update error:', error);
      res.status(500).json({ error: 'Failed to update preferences' });
    }
    
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
