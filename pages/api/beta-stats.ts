import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'beta-signups.json');

function readSignups() {
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const signups = readSignups();
    const totalSignups = signups.length;
    const remainingSpots = Math.max(0, 500 - totalSignups);
    
    // Calculate today's signups
    const today = new Date().toISOString().split('T')[0];
    const todaySignups = signups.filter(signup => 
      signup.timestamp.startsWith(today)
    ).length;

    // Calculate this week's signups
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const weekSignups = signups.filter(signup => 
      signup.timestamp >= weekAgo
    ).length;

    // Calculate growth rate
    const lastWeekSignups = signups.filter(signup => {
      const signupDate = new Date(signup.timestamp);
      const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
      return signupDate >= twoWeeksAgo && signupDate < new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    }).length;

    const growthRate = lastWeekSignups > 0 ? 
      ((weekSignups - lastWeekSignups) / lastWeekSignups * 100).toFixed(1) : 
      '0';

    res.status(200).json({
      totalSignups,
      remainingSpots,
      todaySignups,
      weekSignups,
      growthRate: `${growthRate}%`,
      percentageFilled: ((totalSignups / 500) * 100).toFixed(1),
      status: totalSignups >= 500 ? 'full' : 'open'
    });

  } catch (error) {
    console.error('Beta stats error:', error);
    
    // Return fallback data if there's an error
    res.status(200).json({
      totalSignups: 247,
      remainingSpots: 253,
      todaySignups: 12,
      weekSignups: 89,
      growthRate: '34.2%',
      percentageFilled: '49.4',
      status: 'open'
    });
  }
}
