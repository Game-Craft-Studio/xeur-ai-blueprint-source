import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface ReferralData {
  id: string;
  referrerEmail: string;
  referralCode: string;
  referrals: string[]; // Array of referred emails
  points: number;
  rank: number;
  createdAt: string;
  lastUpdated: string;
  socialShares: number;
  conversionRate: number;
}

interface BetaSignup {
  id: string;
  email: string;
  subscribe: boolean;
  source: string;
  timestamp: string;
  referralCode?: string;
  referrerEmail?: string;
}

const REFERRALS_FILE = path.join(process.cwd(), 'data', 'referrals.json');
const BETA_SIGNUPS_FILE = path.join(process.cwd(), 'data', 'beta-signups.json');

function ensureDataDirectory() {
  const dataDir = path.dirname(REFERRALS_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function readReferrals(): ReferralData[] {
  ensureDataDirectory();
  try {
    if (fs.existsSync(REFERRALS_FILE)) {
      const data = fs.readFileSync(REFERRALS_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading referrals:', error);
  }
  return [];
}

function writeReferrals(referrals: ReferralData[]) {
  ensureDataDirectory();
  try {
    fs.writeFileSync(REFERRALS_FILE, JSON.stringify(referrals, null, 2));
  } catch (error) {
    console.error('Error writing referrals:', error);
    throw error;
  }
}

function readBetaSignups(): BetaSignup[] {
  try {
    if (fs.existsSync(BETA_SIGNUPS_FILE)) {
      const data = fs.readFileSync(BETA_SIGNUPS_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading beta signups:', error);
  }
  return [];
}

function generateReferralCode(email: string): string {
  // Generate unique 8-character code based on email and timestamp
  const hash = require('crypto').createHash('md5').update(email + Date.now()).digest('hex');
  return hash.substring(0, 8).toUpperCase();
}

function calculateRankings(referrals: ReferralData[]): ReferralData[] {
  // Sort by points (descending), then by conversion rate, then by earliest signup
  return referrals
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.conversionRate !== a.conversionRate) return b.conversionRate - a.conversionRate;
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    })
    .map((referral, index) => ({
      ...referral,
      rank: index + 1,
      lastUpdated: new Date().toISOString()
    }));
}

function calculatePoints(referrals: string[]): number {
  // Points system:
  // - 10 points per successful referral
  // - 5 bonus points for every 5th referral (milestone bonus)
  // - 20 bonus points for every 10th referral
  const basePoints = referrals.length * 10;
  const milestone5Bonus = Math.floor(referrals.length / 5) * 5;
  const milestone10Bonus = Math.floor(referrals.length / 10) * 20;
  
  return basePoints + milestone5Bonus + milestone10Bonus;
}

async function notifyReferralMilestone(referralData: ReferralData) {
  const milestones = [1, 5, 10, 25, 50, 100];
  const referralCount = referralData.referrals.length;
  
  if (milestones.includes(referralCount)) {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (webhookUrl) {
      const message = {
        text: `🎯 Referral Milestone Achieved!`,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*🎯 REFERRAL MILESTONE*\n*User:* ${referralData.referrerEmail}\n*Referrals:* ${referralCount}\n*Current Rank:* #${referralData.rank}\n*Points:* ${referralData.points}\n*Conversion Rate:* ${referralData.conversionRate}%`
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
        console.error('Failed to send referral milestone notification:', error);
      }
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Create or update referral tracking
    const { email, action } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email required' });
    }
    
    try {
      let referrals = readReferrals();
      let existingReferral = referrals.find(r => r.referrerEmail.toLowerCase() === email.toLowerCase());
      
      if (!existingReferral) {
        // Create new referral entry
        const newReferral: ReferralData = {
          id: Date.now().toString(),
          referrerEmail: email.toLowerCase(),
          referralCode: generateReferralCode(email),
          referrals: [],
          points: 0,
          rank: referrals.length + 1,
          createdAt: new Date().toISOString(),
          lastUpdated: new Date().toISOString(),
          socialShares: 0,
          conversionRate: 0
        };
        
        referrals.push(newReferral);
        existingReferral = newReferral;
      }
      
      // Handle different actions
      if (action === 'social_share') {
        existingReferral.socialShares += 1;
      }
      
      // Recalculate rankings
      referrals = calculateRankings(referrals);
      writeReferrals(referrals);
      
      // Find updated referral data
      const updatedReferral = referrals.find(r => r.referrerEmail === email.toLowerCase());
      
      res.status(200).json({
        success: true,
        referralCode: updatedReferral?.referralCode,
        rank: updatedReferral?.rank,
        points: updatedReferral?.points,
        referralCount: updatedReferral?.referrals.length || 0,
        socialShares: updatedReferral?.socialShares || 0,
        shareUrl: `https://xeur.ai?ref=${updatedReferral?.referralCode}`
      });
      
    } catch (error) {
      console.error('Referral tracking error:', error);
      res.status(500).json({ error: 'Failed to process referral tracking' });
    }
    
  } else if (req.method === 'GET') {
    // Get referral data or leaderboard
    const { email, leaderboard, code } = req.query;
    
    try {
      const referrals = readReferrals();
      
      if (leaderboard === 'true') {
        // Return top 50 for leaderboard
        const topReferrals = referrals.slice(0, 50).map(r => ({
          rank: r.rank,
          email: r.referrerEmail.replace(/(.{2}).*(@.*)/, '$1***$2'), // Mask email for privacy
          referralCount: r.referrals.length,
          points: r.points,
          conversionRate: r.conversionRate
        }));
        
        res.status(200).json({
          leaderboard: topReferrals,
          totalParticipants: referrals.length,
          lastUpdated: new Date().toISOString()
        });
        
      } else if (email) {
        // Return specific user's referral data
        const userReferral = referrals.find(r => r.referrerEmail.toLowerCase() === (email as string).toLowerCase());
        
        if (!userReferral) {
          return res.status(404).json({ error: 'Referral data not found' });
        }
        
        res.status(200).json({
          referralCode: userReferral.referralCode,
          rank: userReferral.rank,
          points: userReferral.points,
          referralCount: userReferral.referrals.length,
          socialShares: userReferral.socialShares,
          conversionRate: userReferral.conversionRate,
          shareUrl: `https://xeur.ai?ref=${userReferral.referralCode}`,
          createdAt: userReferral.createdAt
        });
        
      } else if (code) {
        // Return referral data by code (for validation)
        const codeReferral = referrals.find(r => r.referralCode === (code as string).toUpperCase());
        
        if (!codeReferral) {
          return res.status(404).json({ error: 'Invalid referral code' });
        }
        
        res.status(200).json({
          valid: true,
          referrerEmail: codeReferral.referrerEmail,
          referralCode: codeReferral.referralCode
        });
        
      } else {
        res.status(400).json({ error: 'Email, code, or leaderboard parameter required' });
      }
      
    } catch (error) {
      console.error('Referral retrieval error:', error);
      res.status(500).json({ error: 'Failed to retrieve referral data' });
    }
    
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// Helper function to process referral when new signup occurs
export async function processReferralSignup(newSignupEmail: string, referralCode?: string) {
  if (!referralCode) return;
  
  try {
    const referrals = readReferrals();
    const referralData = referrals.find(r => r.referralCode === referralCode.toUpperCase());
    
    if (!referralData) return;
    
    // Add to referrals list if not already there
    if (!referralData.referrals.includes(newSignupEmail.toLowerCase())) {
      referralData.referrals.push(newSignupEmail.toLowerCase());
      referralData.points = calculatePoints(referralData.referrals);
      
      // Calculate conversion rate (referrals / social shares)
      if (referralData.socialShares > 0) {
        referralData.conversionRate = Number(((referralData.referrals.length / referralData.socialShares) * 100).toFixed(1));
      }
      
      // Recalculate rankings
      const updatedReferrals = calculateRankings(referrals);
      writeReferrals(updatedReferrals);
      
      // Notify of milestone
      const updatedReferralData = updatedReferrals.find(r => r.referralCode === referralCode.toUpperCase());
      if (updatedReferralData) {
        await notifyReferralMilestone(updatedReferralData);
      }
    }
  } catch (error) {
    console.error('Error processing referral signup:', error);
  }
}
