# What is Next.js?

- It Uses React for building user interface
- Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
- Provides additional features that enable you to build production-ready applications

# Why learn Next.js

- Next.js simplifies the process of building a web application for production
  - Routing
  - API Routes
  - Rendering (support both rendering server side and client side)
  - Data fetching
  - Styling
  - Optimization
  - Dev and prod build system

# Prerequisites

- HTML, CSS, JavaScript fundamentals
- ES6 + features
- React fundamental

# Tools

- Node.js
- VS code

# Start

```
npx create-next-app@latest
```

- cd file-location
- npm run dev

React Server Component (RSC)

- React Server Components is a new architecture introduced by the React team in version 18 which was quickly embraced by Next.js
- The architecture introduces a new way of creating React components, splitting them into two types.
  - Server components
  - client components

## Server Components

- In Next.js, all components are server components by default
- They have the ability to run tasks like reading files or fetching data from a database
- However, they don't have the ability to use hooks or handle user interactions

## Client Components

- To create a client component, it's necessary to add "use client" at the end of the component file.
- Client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions.

# Routing

- Next.js has a file-system based routing mechanism
- URL paths that users can access in the browser are defined by files and folders in your codebase

## Routing Conventions

- All routes must be placed inside the app folder
- Every file that corresponds to a route must be named page.js or page.tsx
- Every folder corresponds to a path segment in the browser URL

## File based routing

- Scenario 1:
  - -> src/app(page.tsx)
    - http://localhost:3000/
- Scenario 2:
- -> src/app/about(page.tsx)
  - http://localhost:3000/about
- -> src/app/profile(page.tsx)
  - http://localhost:3000/profile
