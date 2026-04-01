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

    // Prepare the lead data
    const newLead = {
      id: Date.now(),
      name,
      email,
      projectType,
      budget,
      message,
      submittedAt: new Date().toISOString(),
    };

    // NOTE: On Vercel, the file system is read-only. We cannot use fs.writeFileSync.
    // For now, we will log it to the Vercel console. You can view leads in the Vercel Dashboard -> Logs.
    // In the future, we should integrate Resend, SendGrid, or a Database (MongoDB/Supabase) here.
    console.log('--- NEW LEAD RECEIVED ---');
    console.log(JSON.stringify(newLead, null, 2));
    console.log('-------------------------');

    return NextResponse.json({ success: true, lead: newLead }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
