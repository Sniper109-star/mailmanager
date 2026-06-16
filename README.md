# Project Overview

This repository contains the backend and mobile UI web app for M & A company, featuring a blue-themed email composition system with Supabase storage and Resend email delivery.

## Environment Details

- **Current Time**: 2026-06-16T13:53:53+00:00
- **Working Directory**: /workspace/1bc0206b-f227-4f32-8ef5-2debe97f47f2/sessions/agent_05757c6e-fe61-4531-b66a-c9d3a60d4f47
- **Workspace Root Folder**: /workspace/1bc0206b-f227-4f32-8ef5-2debe97f47f2/sessions/agent_05757c6e-fe61-4531-b66a-c9d3a60d4f47

## Project Structure

```
├── my-app/                 # Next.js web application
│   ├── app/
│   │   ├── api/email/      # Email API routes
│   │   ├── email/compose/  # Email composition UI
│   │   └── page.tsx        # Main page
│   ├── lib/supabase.ts     # Supabase client
│   └── package.json
├── my-next-app/            # Additional Next.js app
└── --dir/                  # Other assets
```

## Features

- **Blue Theme**: Consistent M & A branding with blue color scheme
- **Email Composition**: Rich text editor with Supabase storage asset picker
- **HTML Templates**: Save and reuse email templates with embedded images
- **Resend Integration**: Reliable email delivery via Resend API
- **Supabase Storage**: Asset management for email templates
- **TypeScript**: Full type safety across the codebase

## Getting Started

1. Install dependencies:
   ```bash
   cd my-app && bun install
   ```

2. Set environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   RESEND_API_KEY=your_resend_key
   ```

3. Run development server:
   ```bash
   bun dev
   ```

## Email Composition Workflow

1. Navigate to `/email/compose`
2. Pick stored assets from Supabase storage
3. Insert assets into email body as `<img>` tags
4. Save final HTML to Supabase
4. Send via Resend

## API Endpoints

- `POST /api/email` - Send email with HTML template
  - Body: `{ html, subject, to }`
  - Returns: `{ success: true, messageId }` or error

## Tech Stack

- **Frontend**: Next.js 14, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database/Storage**: Supabase
- **Email**: Resend
- **Language**: TypeScript
- **Package Manager**: Bun

## Scripts

- `bun dev` - Start development server
- `bun build` - Production build
- `bun lint` - Run ESLint
- `bun typecheck` - Run TypeScript compiler check

## Deployment

Configure deployment target (Vercel, Netlify, etc.) and set required environment variables in the platform dashboard.