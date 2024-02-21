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

## Nested routes

- Scenario 3:
  - -> src/app(page.tsx)/blog(page.tsx)
    - http://localhost:3000/blog
- Scenario 4:
  - -> src/app(page.tsx)/blog(page.tsx)/first(page.tsx)
    - http://localhost:3000/blog/first
- Scenario 5:
  - -> src/app(page.tsx)/blog(page.tsx)/second(page.tsx)
    - http://localhost:3000/blog/second

## Dynamic routes

- Scenario 1:

  - -> src/app(page.tsx)/products(page.tsx)/[[productId]](DetailPage.tsx)
    - http://localhost:3000/products/7

  ```
  const DetailProducts = ({ params }: { params: { productId: string } }) => {
  return <div>DetailProducts {params.productId}</div>;
  };

  export default DetailProducts;

  ```

## Nested Dynamic routes

- Scenario 1:

  - -> src/app(page.tsx)/products(page.tsx)/[[productId]](DetailPage.tsx)/reviews/[[reviewId]]((reviewDetail.tsx)) - http://localhost:3000/products/7/reviews/1

        ```
        const ReviewDeatails = ({
        params,
        }: {
        params: {

    productId: string;
    reviewId: string };
    }) => {
    return (
    <div>
    Review Details {params.reviewId} for product {params.productId}
    </div>
    );
    };

        export default ReviewDeatails;
        ```

## Catch All Segments

- Scenario 1:

  - -> src/app(page.tsx)/docs/[[...slug]](page.tsx)

  ```
  const Docs = () => {
  return <div>Docs Home Page</div>;
  };

    export default Docs;

  ```

- http://localhost:3000/docs/feature1
- http://localhost:3000/docs/feature2
- http://localhost:3000/docs/feature1/concept1
- http://localhost:3000/docs/feature1/concept2
- http://localhost:3000/docs/feature1/concept3
- ***

http://localhost:3000/docs/feature1/concept1

Feature 1

- concept 1
- concept 2
- concept 3
  Feature 2
  Feature 3
  Feature 4

---

- -> src/app(page.tsx)/docs/[[...slug]](page.tsx)

- http://localhost:3000/docs/feature2/segment

  ```
  const Docs = ({
    params,
  }: {
    params: {
      slug: string[];
    };
  }) => {
    if (params.slug.length === 2) {
      return (
        <h1>
          {" "}
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
      );
    } else if (params.slug.length === 1) {
      return <h1> Viewing docs for feature {params.slug[0]} </h1>;
    }
    return <div>Docs Home Page</div>;
  };

  export default Docs;

  ```

### main

- app
  - docs
    - [[...slugs]]
      - page.tsx
  - layout.tsx
  - page.tsx

# Not Found Page

- -> src/app/not-found.tsx

# File Collocation

- -> src/app/dashboard/line-chart.tsx
  - GET not found page because of use line-chart.tsx instead of page.tsx

# Private Folder

- -> src/app/\_lib/private_folder.tsx
- -> src/app/\_lib/page.tsx

- A private folder indicates that it is a private implementation detail and should not be considered by the routing system.
- The folder and all its sub-folders are excluded from routing
- Prefix the folder name with an underscore

## Private Folder contd

- For separating UI logic from routing logic
- For consistently organizing internal files across a project
- For sorting and grouping files in code editors
- And finally, for avoiding potential naming conflicts with future next.js file conventions

# Route Groups

- Allows us to logically group our routes and project files without affecting the URL path structure.
- Let's implement authentication routes

  - Register
  - Login
  - Forgot Password

    ## From this

    - -> src/app/login/page.tsx
    - -> src/app/register/page.tsx
    - -> src/app/forgot-password/page.tsx

    ## To this

    - -> src/app/auth/login/page.tsx
    - -> src/app/auth/register/page.tsx
    - -> src/app/auth/forgot-password/page.tsx

    ## structure

    - app
      - auth
        - login (page.tsx)
        - register (page.tsx)
        - forgot-password (page.tsx)

    ## or

    - app

      - (auth)
        - login (page.tsx)
        - register (page.tsx)
        - forgot-password (page.tsx)

      ## then

      - -> http://localhost:3000/login
      - -> http://localhost:3000/register
      - -> http://localhost:3000/forgot-password

    ## or

    - app

      - (routeg)
        - ro (page.tsx)
        - rotwo (page.tsx)

      ## then

      - -> http://localhost:3000/ro
      - -> http://localhost:3000/rotwo

# Layout

- A page is UI that is unique to a route
- A layout is UI that is shared between multiple pages in the app

| Header  |
| ------- |
| Content |
| Footer  |

## How to create a layout

- You can define a layout by default exporting a React component from a layout.js or layout.tsx file
- That component should accept a children prop that will be populated with a child page during rendering

- -> src/app/layout.tsx is automatic

# Nested Layouts

    - app

      - layout.tsx
      - products
        - [productId]
            - layout.tsx
            - page.tsx
        - page.tsx
      -page.tsx
