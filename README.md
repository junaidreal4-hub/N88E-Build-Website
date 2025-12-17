
# N88E Build Pvt. Ltd. - Corporate Website

![N88E Build](https://img.shields.io/badge/Live-Production-brightgreen)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-6.3-purple)

A modern, fully responsive corporate website for **N88E Build Pvt. Ltd.**, showcasing their premium ASA uPVC roofing solutions (GUTDACH, GUTWALL, and P.E.T.E.R.) designed for India's extreme climate conditions.

## Live Demo

**Production:** [https://www.n88ebuild.com](https://www.n88ebuild.com)

## Screenshots

### Homepage
![Homepage Hero](https://www.n88ebuild.com/og-image.jpg)

### Product Pages
- **GUTDACH** - ASA uPVC Roofing Sheets
- **GUTWALL** - uPVC Interior Partition Sheets  
- **P.E.T.E.R.** - Portable Tactical Emergency Roofing (Coming Soon)

### Key Pages
- About Us - Company Story & Mission
- Founder Page - Founder Bio & Journey
- Certificates - 12 International Certifications
- Contact - Business & Personal Inquiry Forms

## Tech Stack

### Frontend Framework
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite 6.3** - Build tool & dev server

### Styling & UI
- **Figma** — UI/UX design + wireframes
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Accessible component library (Radix UI primitives)
- **Lucide React** - Icon library
- **class-variance-authority** - Component variants

### Routing & Navigation
- **React Router DOM v7** - Client-side routing

### Data Visualization
- **Recharts** - Interactive charts (Radar Chart for product comparison)

### SEO & Meta
- **react-helmet-async** - Dynamic meta tags & SEO optimization
- Sitemap.xml & robots.txt included

### Forms & Validation
- **React Hook Form** - Form management
- **Axios** - HTTP client for form submissions (Google Sheets integration)

### Additional Libraries
- **Embla Carousel** - Product carousel
- **Sonner** - Toast notifications
- **cmdk** - Command palette
- **React Day Picker** - Date selection
- **Vercel Analytics** - Web analytics

## Features

### Core Features
-  Fully responsive design (mobile, tablet, desktop)
-  SEO optimized with dynamic meta tags
-  Product showcase with detailed specifications
-  Interactive product comparison radar chart
-  Certificate display (12 international standards)
-  Dual contact forms (Business & Personal inquiries)
-  Founder story & company mission pages
-  404 page with proper `noindex` meta tag

### Technical Features
-  Fast page loads with Vite
-  Modern UI with Shadcn/ui components
-  SEO-friendly URL structure
-  Mobile-first responsive design
-  Sitemap & robots.txt for search engines
-  Deployed on Vercel with auto-deployment from GitHub

## Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** or **yarn**

### Installation

Clone the repository
git clone https://github.com/junaidreal4-hub/N88E-Build-Website.git

Navigate to directory
cd N88E-Build-Website

Install dependencies
npm install

Start development server
npm run dev

text

The app will be available at `http://localhost:5173`

### Build for Production

Create optimized production build
npm run build

Preview production build locally
npm run preview

text

## Project Structure

N88E-Build-Website/
├── public/
│ ├── robots.txt
│ ├── sitemap.xml
│ └── og-image.jpg
├── src/
│ ├── assets/ # Images, PDFs, logos
│ ├── components/
│ │ ├── pages/ # Page components
│ │ ├── ui/ # Shadcn/ui components
│ │ ├── figma/ # Custom components
│ │ ├── Navigation.tsx
│ │ ├── Footer.tsx
│ │ └── SEO.tsx # SEO meta tags component
│ ├── utils/ # Helper functions
│ ├── App.tsx # Main app with routes
│ ├── main.tsx # Entry point with HelmetProvider
│ └── index.css # Global styles (Tailwind)
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md

text

## SEO Implementation

All pages include proper SEO meta tags via `react-helmet-async`:

- **Title tags** - Unique per page
- **Meta descriptions** - Optimized for search
- **Open Graph tags** - For social sharing
- **Twitter Card tags** - For Twitter previews
- **Canonical URLs** - Prevent duplicate content
- **robots meta** - Control indexing (noindex on 404)

## Key Routes

/ → Homepage
/products → Products landing page
/gutdach → GUTDACH product details
/gutwall → GUTWALL product details
/peter → P.E.T.E.R. product (coming soon)
/about → About N88E Build
/founder → Founder story
/certificates → Certifications & standards
/contact → Contact form
/* → 404 page

text

## Deployment

The site is deployed on **Vercel** with automatic deployments from the `main` branch.

**Custom Domain:** [www.n88ebuild.com](https://www.n88ebuild.com)

## About This Project

This website was developed as a professional portfolio project to showcase:
- Modern React development practices
- TypeScript implementation
- Component-driven architecture
- SEO best practices
- Responsive design
- Production-ready deployment

Built for **N88E Build Pvt. Ltd.**, a roofing solutions company based in Guwahati, Assam, India (Founded July 2025).

## License

MIT License

## Developer Contact

**Mohammed Junaid Khan**  
-  [LinkedIn](https://www.linkedin.com/in/junaid412)  
-  [Portfolio](https://junaidreal4-hub.github.io)  
-  Email: junaidreal4@gmail.com

---

**Live Site:** [www.n88ebuild.com](https://www.n88ebuild.com)  
**Repository:** [github.com/junaidreal4-hub/N88E-Build-Website](https://github.com/junaidreal4-hub/N88E-Build-Website)