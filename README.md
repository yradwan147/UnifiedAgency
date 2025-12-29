# UNI-FIED Agency Landing Page

Egypt's elite software development agency delivering international-quality software at competitive rates.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![Railway Ready](https://img.shields.io/badge/Railway-Ready-purple)

## Features

- **Dual-Audience Messaging**: Speaks to both CTOs (technical credibility) and CEOs (business results)
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Railway Deployable**: One-click deployment to Railway
- **Fully Responsive**: Works beautifully on all devices
- **Animated**: Smooth, professional animations with Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML

## Page Sections

1. **Hero** - Bold headline with dual CTAs and trust badges
2. **Value Propositions** - Three pillars with CTO/CEO perspectives
3. **Services** - Full-stack expertise grid with tech/business angles
4. **Portfolio** - Project showcase with GitHub links and business metrics
5. **The UNI-FIED Difference** - Side-by-side CTO vs CEO benefits
6. **Process** - Visual timeline from discovery to support
7. **Testimonials** - Mixed reviews from technical and business leaders
8. **GitHub Showcase** - Featured repositories and stats
9. **Final CTA** - Strong call-to-action with WhatsApp option
10. **Footer** - Contact info and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/uni-fied/unified-agency.git
cd unified-agency

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Railway

### Option 1: One-Click Deploy

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template)

### Option 2: Manual Deploy

1. Push your code to a GitHub repository
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will automatically detect Next.js and deploy

The `railway.json` and `next.config.ts` are pre-configured for Railway:

- Standalone output mode for optimized deployment
- Automatic port detection via `$PORT` environment variable
- Health check on root path

### Environment Variables (Optional)

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
NEXT_PUBLIC_GITHUB_ORG=your-github-org
```

## Project Structure

```
unified-agency/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles & CSS variables
├── components/
│   ├── Navigation.tsx   # Sticky header
│   ├── Hero.tsx         # Hero section
│   ├── ValueProps.tsx   # Three value pillars
│   ├── Services.tsx     # Services grid
│   ├── Portfolio.tsx    # Project showcase
│   ├── Difference.tsx   # CTO vs CEO comparison
│   ├── Process.tsx      # Process timeline
│   ├── Testimonials.tsx # Client testimonials
│   ├── GitHubShowcase.tsx # GitHub repos
│   ├── CTASection.tsx   # Final call-to-action
│   └── Footer.tsx       # Site footer
├── lib/
│   └── utils.ts         # Utility functions (cn)
├── public/              # Static assets
├── railway.json         # Railway deployment config
├── next.config.ts       # Next.js config (standalone)
└── package.json
```

## Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --accent: #f59e0b;        /* Primary amber/gold */
  --accent-hover: #fbbf24;
  --background: #0a0a0b;    /* Dark background */
}
```

### Content

Update the data arrays in each component file:
- `components/Services.tsx` - Service offerings
- `components/Portfolio.tsx` - Project showcase
- `components/Testimonials.tsx` - Client reviews
- `components/GitHubShowcase.tsx` - Featured repos

### Contact Information

Update these links throughout the components:
- Calendly/booking link
- WhatsApp number: +20 115 147 2079
- Email: hello@uni-fied.com
- GitHub organization URL

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## License

© 2025 UNI-FIED. All rights reserved.

## Contact

- **WhatsApp**: [+20 115 147 2079](https://wa.me/201151472079)
- **Email**: hello@uni-fied.com
- **Website**: [uni-fied.com](https://uni-fied.com)
