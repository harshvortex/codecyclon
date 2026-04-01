import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();

    const { name, email, projectType, budget, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save lead to a local JSON file
    const leadsDir = path.join(process.cwd(), 'data');
    const leadsFile = path.join(leadsDir, 'leads.json');

    // Ensure data directory exists
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }

    // Read existing leads
    let leads = [];
    if (fs.existsSync(leadsFile)) {
      const raw = fs.readFileSync(leadsFile, 'utf-8');
      leads = JSON.parse(raw);
    }

    // Append new lead
    const newLead = {
      id: Date.now(),
      name,
      email,
      projectType,
      budget,
      message,
      submittedAt: new Date().toISOString(),
    };
    leads.push(newLead);

    // Write back to file
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

    console.log('New lead received:', newLead);

    return NextResponse.json({ success: true, lead: newLead }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
