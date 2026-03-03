# 🐾 PetPal Web

Web monorepo for PetPal — the pet health tracking and community platform.

## Apps

| App | Description | Port |
|-----|-------------|------|
| `apps/landing` | Marketing landing page | 5173 |
| `apps/admin` | Admin dashboard | 5174 |

## Tech Stack

- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS (purple #8B5CF6 brand)
- **State:** TanStack Query + Zustand (admin)
- **HTTP:** Axios with JWT interceptors (admin)
- **Charts:** Recharts (admin)
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run all apps in development
npm run dev

# Build all apps
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` in each app:

```
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=PetPal
VITE_ENVIRONMENT=development
```

## Deployment

Both apps are independently deployable on Vercel:
- Landing: `apps/landing` (static, no backend required)
- Admin: `apps/admin` (requires `VITE_API_URL` env var)

## Admin Login (Demo)

- Email: `admin@petpal.com`
- Password: `admin123`
