# MyApp - Blue M&A Email Composer

## Overview
A Next.js web application that allows users to compose emails using a blue-themed UI with the company branding "M & A". Users can pick stored HTML assets from Supabase storage, insert them into the email body, save the final HTML, and send via Resend.

## Environment Details
- **Date/Time**: 2026-06-16 13:43:12 UTC
- **Workspace**: /workspace/1bc0206b-f227-4f32-8ef5-2debe97f47f2/sessions/agent_05757c6e-fe61-4531-b66a-c9d3a60d4f47
- **Project**: Next.js app located at /my-app

## Features
- Blue theme consistent with M&A branding
- Email composition screen with asset picker from Supabase storage
- HTML editor using `` tags for assets
- Save final HTML to Supabase storage
- Send emails via Resend API

## Setup
1. Install dependencies: `bun install`
2. Create `.env` file with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   RESEND_API_KEY=your_resend_key
   ```
3. Run development server: `bun dev`

## Usage
- Navigate to `/email/compose` to start composing an email.
- Choose assets from Supabase storage, insert into the body.
- Click "Send" to save and dispatch the email.

## Tech Stack
- **Frontend**: Next.js 14, React 19, Tailwind CSS
- **Backend**: Supabase (storage, auth), Resend (email sending)
- **Language**: TypeScript

## Contact
For questions, reach out to the development team via the M&A support channel.