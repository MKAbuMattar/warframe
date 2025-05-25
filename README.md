# Warframe Project

This project is a Next.js application, likely designed to provide information and resources related to the game Warframe. It is configured as a Progressive Web App (PWA) and includes features for SEO optimization.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
  - [Starting Production Server](#starting-production-server)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [License](#license)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version >=20.* as specified in `package.json`)
- npm (comes with Node.js) or pnpm (as `pnpm-lock.yaml` is present)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:MKAbuMattar/warframe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd warframe
   ```
3. Install dependencies. If you have pnpm installed, prefer using it:
   ```bash
   pnpm install
   ```
   Alternatively, using npm:
   ```bash
   npm install
   ```

### Development Server

To start the development server, run:

```bash
npm run dev
```
Or if using pnpm:
```bash
pnpm dev
```
This will start the application on `http://localhost:3000` by default.

### Building for Production

To create a production build, run:

```bash
npm run build
```
Or if using pnpm:
```bash
pnpm build
```
This command compiles the application and optimizes it for production. The build artifacts will be stored in the `.next` directory.

### Starting Production Server

After building the project, you can start the production server with:

```bash
npm run start
```
Or if using pnpm:
```bash
pnpm start
```

## Available Scripts

The `package.json` file defines the following scripts:

- `dev`: Starts the Next.js development server.
- `build`: Builds the Next.js application for production.
- `start`: Starts the Next.js production server.
- `lint`: Lints the codebase using Next.js's built-in ESLint configuration.
- `lint:fix`: Lints the codebase and attempts to automatically fix issues.
- `fmt`: Checks code formatting using Prettier.
- `fmt:fix`: Formats the codebase using Prettier.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15.3.2)
- **UI Library**: [React](https://reactjs.org/) (v18.3.1)
- **Styling**: [Styled Components](https://styled-components.com/) (v6.1.18)
- **PWA Support**: [next-pwa](https://www.npmjs.com/package/next-pwa) (v5.6.0)
- **SEO**: [next-seo](https://www.npmjs.com/package/next-seo) (v6.8.0)
- **HTTP Client**: [Axios](https://axios-http.com/) (v1.9.0)
- **Linting**: [ESLint](https://eslint.org/) (v8.57.1)
- **Formatting**: [Prettier](https://prettier.io/) (v3.5.3)
- **Sitemap Generation**: [sitemap](https://www.npmjs.com/package/sitemap) (v8.0.0)
- **Build Tool**: [Webpack](https://webpack.js.org/) (v5.99.9) (used by Next.js)

## Project Structure

The project follows a typical Next.js structure:

```
.
├── public/                 # Static assets (images, manifest, robots.txt)
├── src/
│   ├── components/         # Reusable React components (categorized by game elements)
│   ├── config/             # Application configuration files
│   ├── data/               # Static data (e.g., data.json)
│   ├── hooks/              # Custom React hooks for fetching data
│   ├── Icons/              # SVG Icons components
│   ├── models/             # Data models/schemas
│   ├── pages/              # Next.js pages (routes), including _app.jsx
│   ├── scripts/            # Utility scripts (e.g., generate-robots-txt.script.cjs)
│   ├── style/              # Global styles, themes, and CSS utilities
│   ├── util/               # Utility functions and helper modules
│   └── view/               # Potentially higher-level view components or layouts
├── LICENSE                 # Project license file
├── next-seo.config.js      # Configuration for next-seo
├── next.config.mjs         # Next.js configuration, including PWA setup
├── package.json            # Project metadata and dependencies
├── pnpm-lock.yaml          # pnpm lockfile for reproducible installs
├── prettier.config.mjs     # Prettier configuration
└── README.md               # This file
```

## Key Features

- **Next.js Framework**: Leverages server-side rendering (SSR), static site generation (SSG), and other Next.js features.
- **Progressive Web App (PWA)**: Configured with `next-pwa` for offline capabilities, installability, and enhanced performance.
- **SEO Optimized**: Uses `next-seo` for managing SEO metadata like titles, descriptions, and Open Graph tags.
- **Styled Components**: For component-scoped CSS styling.
- **Linting and Formatting**: ESLint and Prettier are set up to maintain code quality and consistency.
- **Automatic Robots.txt Generation**: `robots.txt` is generated during the server-side build process.
- **Sitemap Generation**: Implied by the use of `sitemap` package and `publicExcludes` in PWA config.
- **Warframe Data Display**: Based on the component and hook names (e.g., `WarframeCard`, `useGetArcane`), the application is designed to display various types of information related to the game Warframe.
- **Custom Hooks for Data Fetching**: Organized hooks for fetching specific game data (e.g., `useGetWarframe`, `useGetMod`).

## License

This project is licensed under the terms of the [LICENSE](./LICENSE) file.
