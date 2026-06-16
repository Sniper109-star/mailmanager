import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { html, subject, to } = await req.json()

  // Save HTML to Supabase storage
  const { data, error } = await supabase.storage
    .from('email-templates')
    .upsert({
      content: html,
      subject: subject,
      created_by: 'user@example.com',
      created_at: new Date().toISOString()
    })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Send email via Resend
  try {
    const emailResponse = await resend.emails.send({
      from: 'no-reply@yourcompany.com',
      to,
      subject,
      html
    })
    return NextResponse.json({ success: true, messageId: emailResponse.id })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}