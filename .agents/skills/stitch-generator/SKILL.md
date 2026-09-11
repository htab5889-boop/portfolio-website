---
name: stitch-build
description: "Pipeline for generating a full-stack Next.js backend and API routes from Stitch React UI components."
---

# Stitch-to-Backend Pipeline

This skill instructs Antigravity on how to handle requests to build a backend from a provided Stitch design component or layout.

## Trigger
Activate this skill when the user runs the slash command `/stitch-build`, or explicitly asks to "connect Stitch to the backend", "generate backend for Stitch", or "build the API for this UI".

## Workflow

When triggered, follow these steps exactly:

### 1. Analyze the UI Component
- Read the specified React component(s) exported from Stitch.
- Identify all `useState` hooks, forms, `onSubmit` handlers, and data fetching requirements.
- Determine the data schema required to support the UI (e.g., User, Product, Inquiry).

### 2. Scaffold the Database / ORM
- Based on the user's preferred database (e.g., Prisma, Drizzle, or a direct provider like Supabase/Firebase), generate the schema.
- **Security Rule:** Never hardcode database URLs or credentials. Always use `process.env`.

### 3. Generate API Routes
- Create Next.js App Router API endpoints (`src/app/api/.../route.ts`).
- Implement strict input validation (e.g., Zod) on all incoming payloads.
- Implement proper error handling (try/catch blocks) returning appropriate HTTP status codes (400, 401, 500).

### 4. Connect the Frontend
- Replace mock data and `console.log` statements in the Stitch component with actual `fetch` or server action calls to the new API routes.
- Add loading states (`isSubmitting`, `isLoading`) and success/error UI feedback.

## Security Constraints
- **Secrets Management:** Ensure all keys, tokens, and database URIs are documented to be placed in `.env.local`. Do not write secrets into the codebase.
- **Sanitization:** All API routes must validate and sanitize data before saving to a database or sending via third-party APIs (like email services).
- **Environment Parity:** Assume the frontend is a Next.js 14+ App Router environment running on Vercel unless specified otherwise.
