# Angel Landscaping LLC - Project Documentation

## Overview

Angel Landscaping LLC is a professional landscaping and home improvement services website for a Western North Carolina business. The application is a full-stack web platform designed to showcase services, build trust with potential customers, and facilitate contact inquiries. Built as a conversion-optimized marketing website, it emphasizes mobile-first design, professional presentation, and frictionless contact conversion.

**Core Purpose**: Generate leads and provide information for a local landscaping contractor through a professional web presence.

**Technology Stack**: React + TypeScript frontend with Express backend, utilizing shadcn/ui components for consistent design.

**Status**: ✅ Complete and ready for deployment. All features implemented, validated, and tested end-to-end.

## Recent Changes

### December 2024 - Initial Build
- **Complete Website Implementation**: Built all four pages (Home, Services, About, Contact) with responsive design
- **Contact Page**: Simplified contact page displaying:
  - Phone: 828-713-4546 with click-to-call functionality
  - Email: AngelandscapingLLC@outlook.com with click-to-email functionality
  - Service area: Western North Carolina
  - Owner information: Angel Cruz
  - Note: Contact form removed per user request
- **SEO Optimization**: Added unique meta titles and descriptions for each page using react-helmet-async
- **Professional Design**: 
  - Generated AI hero image featuring professional landscaping work
  - Green and earth-tone color scheme matching the Angel Landscaping brand
  - Mobile-first responsive design with hamburger menu
  - Click-to-call (tel:) and click-to-email (mailto:) functionality throughout site
  - Hover states and elevation effects following design guidelines
- **Comprehensive Testing**: End-to-end tests covering:
  - Navigation across all pages
  - Mobile menu functionality
  - Click-to-call/email links
  - SEO meta tag verification
- **Backend API**: Contact submission endpoint remains available at `POST /api/contact` (unused, kept for potential future use)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite for fast development and optimized production builds.

**Routing**: Client-side routing using Wouter (lightweight alternative to React Router), with four main pages:
- Home (Hero + Service Preview)
- Services (Complete service catalog)
- About (Owner profile and business information)
- Contact (Contact information display)

**UI Component System**: shadcn/ui components (Radix UI primitives) with custom Tailwind CSS styling following the "new-york" theme variant. Components are fully accessible and use CSS variables for theming.

**Design System**: 
- Custom Tailwind configuration with semantic color tokens
- Responsive breakpoints prioritizing mobile experience
- Consistent spacing units (4, 6, 8, 12, 16, 20, 24)
- Typography using Inter/Poppins-style system fonts
- Elevation system using subtle shadows and backdrop effects

**State Management**: 
- TanStack Query (React Query) for server state management
- React Hook Form with Zod validation for form handling
- Local component state using React hooks

**Rationale**: The combination of Vite + React provides fast development experience, while shadcn/ui ensures consistent, accessible components without the bundle size of full component libraries. Wouter keeps routing lightweight for a simple multi-page site.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js

**API Design**: RESTful API with two primary endpoints:
- `POST /api/contact` - Submit contact form data
- `GET /api/contact-submissions` - Retrieve all submissions (admin-oriented)

**Data Validation**: Zod schemas shared between frontend and backend for type-safe validation. The `insertContactSubmissionSchema` ensures consistent validation rules across the stack.

**Session Management**: Infrastructure present (connect-pg-simple) though authentication is not currently implemented in the visible routes.

**Development Mode**: Vite middleware integration for HMR (Hot Module Replacement) during development, with production builds serving static files.

**Rationale**: Express provides familiar, flexible routing with middleware support. Sharing Zod schemas eliminates validation duplication and ensures type safety. The middleware pattern allows clean separation of concerns.

### Data Storage

**Database**: PostgreSQL (via Neon serverless driver)

**ORM**: Drizzle ORM with Drizzle Kit for schema management and migrations

**Schema Design**:
- `users` table - Basic user authentication structure (id, username, password)
- `contact_submissions` table - Stores contact form submissions (id, name, email, phone, message, createdAt)

**Storage Abstraction**: IStorage interface with MemStorage implementation for in-memory storage during development/testing. This allows swapping storage backends without changing business logic.

**Migration Strategy**: Drizzle Kit configured to generate migrations from schema definitions in `shared/schema.ts`, with push command for schema synchronization.

**Rationale**: Drizzle ORM provides type-safe database queries with minimal overhead compared to heavier ORMs. PostgreSQL offers reliability and scalability. The storage interface abstraction enables testing without database dependencies.

### Code Organization

**Monorepo Structure**:
- `/client` - React frontend application
- `/server` - Express backend application  
- `/shared` - Shared TypeScript types and Zod schemas
- `/attached_assets` - Static assets (images)

**Path Aliases**:
- `@/` → `client/src/` (frontend imports)
- `@shared/` → `shared/` (shared schemas/types)
- `@assets/` → `attached_assets/` (static assets)

**Component Structure**: Feature-based organization with reusable UI components in `/components/ui` and page-specific components in `/pages`.

**Rationale**: Monorepo structure keeps frontend and backend together while enabling code sharing. Path aliases improve import readability and refactoring ease.

## External Dependencies

### UI Framework & Components
- **Radix UI** - Unstyled, accessible component primitives (dialogs, dropdowns, forms, etc.)
- **shadcn/ui** - Pre-styled component configurations built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Icon library for UI elements

### Form Handling & Validation
- **React Hook Form** - Performant form state management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Bridges Zod schemas with React Hook Form

### Data Fetching
- **TanStack Query (React Query)** - Asynchronous state management and caching for API calls

### Database & ORM
- **Drizzle ORM** - TypeScript ORM for PostgreSQL
- **Drizzle Zod** - Generates Zod schemas from Drizzle tables
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon database
- **Drizzle Kit** - CLI tool for schema migrations

### Development Tools
- **Vite** - Frontend build tool and dev server
- **TypeScript** - Type safety across the stack
- **esbuild** - Fast JavaScript bundler for production backend builds
- **tsx** - TypeScript execution for development server

### Routing & Navigation
- **Wouter** - Lightweight client-side routing library

### SEO & Meta Tags
- **React Helmet Async** - Manages document head for SEO optimization

### Styling Utilities
- **class-variance-authority** - Type-safe variant management for components
- **clsx** - Conditional className utility
- **tailwind-merge** - Intelligent Tailwind class merging

### Session Management (Infrastructure)
- **connect-pg-simple** - PostgreSQL session store for Express (configured but not actively used in current routes)

### Additional Utilities
- **date-fns** - Date manipulation library
- **nanoid** - Unique ID generation
- **cmdk** - Command menu component infrastructure
- **embla-carousel-react** - Carousel component support
- **vaul** - Drawer component library

**Integration Notes**: 
- Database connection requires `DATABASE_URL` environment variable pointing to PostgreSQL instance
- Vite plugins include Replit-specific development tools when running in Replit environment
- Font loading via Google Fonts CDN (configured in index.html)
- Hero image and other assets expected in `/attached_assets/generated_images/`
