# TanStack Router + Better Auth + Drizzle + Supabase Template

A modern web application template built with React 19, TanStack Router, Better Auth, Drizzle ORM, and Supabase, designed for scalable and efficient development.

## Features
- **Frontend**: React 19 with React DOM for building dynamic UIs.
- **Routing**: TanStack Router for type-safe, performant client-side navigation.
- **Authentication**: Better Auth for secure and flexible user authentication.
- **Database**: Drizzle ORM for type-safe database queries and migrations.
- **Backend**: Supabase for authentication, database, and storage.
- **State Management**: React Query for server-state and Zustand for client-state.
- **UI Components**: Shadcn UI for accessible, customizable components.
- **Validation**: Zod for runtime and compile-time schema validation.
- **Environment**: t3-env for type-safe environment variable management.

## Tech Stack
- React: ^19.x.x
- React DOM: ^19.x.x
- TanStack Router: ^1.x.x
- TanStack React Query: ^5.x.x
- Zustand: ^5.x.x
- Shadcn UI: Latest Components
- Zod: ^3.x.x
- Better Auth: ^1.2.x
- Drizzle ORM: ^0.43.x

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/aivangogh/template-router-betterauth-drizzle-supabase.git
cd template-router-betterauth-drizzle-supabase
```

### 2. Install Dependencies
```bash
npm install
```
```bash
yarn install
```
```bash
pnpm install
```
```bash
bun install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory based on `.env.example`:
```env
# Better Auth
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=

# Supabase
SUPABASE_DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres

# Other environment variables (see t3-env configuration)
```

Ensure environment variables are validated using `t3-env` in `env.ts`.

### 4. Set Up Supabase
1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Configure authentication settings in Supabase dashboard.
3. Update database schema using Drizzle migrations (see `drizzle.config.ts`).

### 5. Run Database Migrations
```bash
npm run db:migrate
```
```bash
yarn db:migrate
```
```bash
pnpm run db:migrate
```
```bash
bun run db:migrate
``````

### 6. Start the Development Server
```bash
npm run dev
```
```bash
yarn dev
```
```bash
pnpm run dev
```
```bash
bun run dev
```
Open `http://localhost:3000` in your browser.

## Project Structure
```
├── src/
│   ├── components/     # Reusable React components
│   │   └── ui/         # UI components (shadcn UI components)
│   ├── features        # Features for domain (if necessary)
│   ├── lib/            # Utilities and configurations
│   │   ├── db/         # Drizzle ORM schema and migrations
│   │   └── auth.ts     # Better Auth configuration and utilities
│   ├── env/            # Environment typesafe parser
│   ├── hooks/          # Hooks
│   │   └── queries/    # React Query hooks for server-side data 
│   ├── pages/          # TanStack Router page components
│   ├── routes/         # Route definitions for TanStack Router
│   ├── schemas/        # Zod validation schemas
│   ├── store/          # Zustand stores for client-side state
│   └── types/          # Types   
├── drizzle.config.ts   # Drizzle ORM configuration
├── .env.example        # Environment variable template
└── README.md           # Project documentation
```

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m "Add YourFeature"`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License
MIT License. See `LICENSE` for details.

