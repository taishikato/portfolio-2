# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15 and React 19, featuring a blog system, project showcase, and static site generation. The site is configured for static export and includes MDX support for blog content.

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production (static export)
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Development Notes
- Uses `--turbopack` flag for faster development builds
- Configured for static export (`output: "export"` in next.config.mjs)
- All content is pre-rendered at build time

## Architecture

### Core Structure
- **App Router**: Uses Next.js 13+ app directory structure
- **Static Generation**: All pages are statically generated for deployment
- **Component-based**: Modular React components with TypeScript
- **Styling**: Tailwind CSS with custom design system and dark mode support

### Key Directories
- `src/app/`: Next.js app router pages and layouts
- `src/components/`: Reusable React components
- `src/content/`: MDX blog posts with frontmatter
- `src/assets/`: Static images and media files
- `src/lib/`: Utility functions and shared logic

### Blog System
- **Content**: MDX files in `src/content/` with frontmatter metadata
- **Rendering**: React Markdown with syntax highlighting (highlight.js)
- **Metadata**: Supports `created_at`, `updated_at`, `title`, `excerpt`, `author`
- **Static Generation**: Blog posts are statically generated from MDX files

### Styling System
- **Tailwind CSS**: Primary styling framework with custom configuration
- **Design Tokens**: Custom color system using CSS variables
- **Components**: shadcn/ui components with Radix UI primitives
- **Dark Mode**: Theme provider with system/manual toggle support
- **Typography**: Tailwind Typography plugin for prose content

### Key Features
- **Portfolio Sections**: Work experience, projects, OSS contributions, hackathon wins
- **Dynamic Content**: Airtable embed for project showcase
- **Analytics**: Google Analytics integration
- **External Tracking**: Custom analytics script for project tracking
- **Responsive**: Mobile-first responsive design

## Important Patterns

### Component Structure
- Components use TypeScript with proper typing
- Consistent use of Tailwind classes for styling
- shadcn/ui patterns for consistent component APIs

### Blog Content
- MDX files must be in `src/content/` directory
- Frontmatter should include: `title`, `excerpt`, `created_at`, optionally `updated_at`, `author`
- Content is processed with gray-matter for metadata extraction

### Static Assets
- Images should be placed in `src/assets/` for build optimization
- Public assets go in `public/` for direct access

### Routing
- App router with TypeScript support
- Dynamic routes use proper async/await patterns for params
- Static params generation for blog posts

### Dependencies & Overrides
- **React 19**: Uses explicit overrides in package.json for React 19.0.0
- **MDX Integration**: @next/mdx, @mdx-js/loader, @mdx-js/react for MDX support
- **Markdown Processing**: gray-matter, react-markdown, rehype-highlight, remark-gfm
- **UI Components**: shadcn/ui with Radix UI primitives and Lucide React icons
- **Theme Management**: next-themes for dark mode support