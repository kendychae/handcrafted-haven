# Handcrafted Haven

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

An innovative artisan marketplace web application that connects talented creators with customers who appreciate handmade products.

## Project Overview

Handcrafted Haven is a WDD430 group project submission that serves as a virtual marketplace for artisans and crafters to showcase and sell their unique handcrafted items. The platform provides a comprehensive solution for discovering, browsing, and purchasing authentic handmade products.

## Team Information

**Project Lead & Developer:** Kendahl Bingham
- **Dominic Odeh Abah** - Team Member
- **Nsisong Gabriel Johnson** - Team Member
- **Manuel Mario Zamalloa Llantoy** - Team Member

**Course:** WDD430 - Advanced Web Development  
**Institution:** Brigham Young University - Pathway  
**Semester:** Winter 2025

## Features

### Core Functionality

- **Seller Profiles**: Authenticated artisan profiles with bio, portfolio, and contact information
- **Product Listings**: Comprehensive product showcase with descriptions, pricing, and high-quality images
- **Browse & Filter**: Advanced catalog browsing with category, price, and rating filters
- **Reviews & Ratings**: Customer feedback system with star ratings and written reviews
- **Responsive Design**: Optimized experience across desktop, tablet, and mobile devices
- **Accessibility**: WCAG 2.1 Level AA compliance for inclusive user experience

### Technical Features

- **Performance Optimized**: Fast loading times with Next.js optimization
- **SEO Friendly**: Search engine optimization for better discoverability
- **Modern UI/UX**: Clean, intuitive interface with consistent branding
- **Secure**: Best practices for data protection and user privacy

## Technology Stack

### Frontend

- **Framework**: Next.js 15.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: React 18

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint with Next.js configuration
- **Code Formatting**: Prettier (integrated with ESLint)
- **Version Control**: Git & GitHub

### Deployment

- **Platform**: Vercel
- **Domain**: Custom domain configuration
- **CI/CD**: Automated deployment from GitHub

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kendychae/handcrafted-haven.git
   cd handcrafted-haven
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
handcrafted-haven/
├── .github/                    # GitHub configuration
│   └── copilot-instructions.md # AI assistant instructions
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page component
│   ├── components/             # Reusable UI components
│   ├── lib/                    # Utility functions and configurations
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
├── docs/                       # Project documentation
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Development Guidelines

### Code Quality

- Follow TypeScript best practices
- Maintain consistent code formatting with Prettier
- Use ESLint for code quality enforcement
- Write meaningful commit messages

### Accessibility

- Implement WCAG 2.1 Level AA standards
- Use semantic HTML elements
- Provide alt text for images
- Ensure keyboard navigation support

### Performance

- Optimize images and assets
- Implement lazy loading where appropriate
- Minimize bundle size
- Use Next.js performance features

## Contributing

This is an individual academic project for WDD430. However, feedback and suggestions are welcome through GitHub issues.

## License

This project is created for educational purposes as part of the WDD430 coursework at BYU-Idaho.

## Assignment Requirements Checklist

- [x] Project setup with Next.js and TypeScript
- [x] Tailwind CSS integration
- [x] GitHub repository creation
- [x] Copilot instructions file
- [x] Comprehensive README.md
- [ ] Responsive design implementation
- [ ] Seller profile functionality
- [ ] Product listing and catalog
- [ ] Review and rating system
- [ ] User story documentation
- [ ] Deployment to Vercel
- [ ] Accessibility compliance
- [ ] Performance optimization

## Contact

**Kendahl Bingham**

- GitHub: [@kendychae](https://github.com/kendychae)
- Email: [Your Email]
- LinkedIn: [Your LinkedIn Profile]

---

_Built with ❤️ for WDD430 at BYU-Idaho_
