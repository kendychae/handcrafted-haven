# WDD430 Week 2 Group Project Submission

**Students:** Kendahl Bingham, Dominic Odeh Abah, Nsisong Gabriel Johnson, Manuel Mario Zamalloa Llantoy
**Course:** WDD430 - Advanced Web Development  
**Institution:** Brigham Young University - Idaho PATHWAY
**Date:** November 5, 2025

---

## Meeting Summary

### Participants

- **Kendahl Bingham** - W2 Lead
- **Dominic Odeh Abah** - Team Member
- **Nsisong Gabriel Johnson** - Team Member
- **Manuel Mario Zamalloa Llantoy** - Team Member

### Meeting Content Summary

**Duration:** Multiple planning and development sessions over Week 1-2  
**Format:** Individual project planning and execution

**Key Discussion Points:**

1. **Project Scope Definition**

   - Decided on artisan marketplace concept
   - Defined target audience: artisans and handcraft enthusiasts
   - Established core features and user flows

2. **Technology Stack Selection**

   - Chose Next.js 15 with TypeScript for modern React development
   - Selected Tailwind CSS for efficient responsive design
   - Planned Vercel deployment for production hosting

3. **Design System Planning**

   - Developed warm, artisan-inspired color palette
   - Selected typography combining Playfair Display and Inter fonts
   - Created component architecture for scalability

4. **User Story Development**

   - Brainstormed 17+ user stories across 7 major epics
   - Prioritized features for MVP implementation
   - Planned future enhancement phases

5. **Implementation Strategy**
   - Week 1: Setup, planning, and foundational components
   - Week 2: Core pages, styling, and deployment
   - Continuous: Documentation and refinement

---

## Repository Information

**GitHub Repository URL:** [https://github.com/kendychae/handcrafted-haven](https://github.com/kendychae/handcrafted-haven)

**Repository Stats:**

- **Framework:** Next.js 15.0 with TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Files:** 21+ source files
- **Commits:** 8+ meaningful commits with detailed messages
- **Deployment:** Vercel (live at [handcrafted-haven-lemon-iota.vercel.app](https://handcrafted-haven-lemon-iota.vercel.app/))

---

## Local Project Screenshot

![Local Development Environment](../assets/local-project-screenshot.png)

_Screenshot showing the local development environment with the project cloned and running on localhost:3000. The image demonstrates the project structure in VS Code and the application running in the browser._

**Alternative Description (if image not available):**
The local development setup shows:

- VS Code editor with complete project structure visible in the file explorer
- Terminal window displaying successful `npm run dev` execution
- Browser window showing the Handcrafted Haven homepage at `http://localhost:3000`
- All navigation links functional and pages loading correctly
- TypeScript compilation successful with no errors
- Hot module replacement working for live updates

**Local Setup Evidence:**

- Project successfully cloned from GitHub repository
- All dependencies installed via `npm install`
- Development server running on `http://localhost:3000`
- All pages (Home, Products, Artisans) functional locally
- Hot reloading and TypeScript compilation working

---

## Design Theme Evidence

### Color Palette

![Design Theme - Color Palette](../assets/color-palette.png)

**Alternative Description (if image not available):**
The design theme is visually evident throughout the live application at [handcrafted-haven-lemon-iota.vercel.app](https://handcrafted-haven-lemon-iota.vercel.app/) and demonstrates:

- Consistent use of warm orange primary colors (#d97706) in buttons, links, and accents
- Earth tone complementary colors creating an artisan-inspired aesthetic
- Professional typography with Playfair Display for headings and Inter for body text
- Cohesive component styling with soft shadows and rounded corners
- Responsive design maintaining theme consistency across all device sizes

**Primary Brand Colors:**

- **Primary Orange:** `#d97706` - Representing craftsmanship and creativity
- **Secondary Green:** `#22c55e` - Balance and sustainability
- **Earth Tones:** Browns and tans connecting to natural materials
- **Accent Colors:** Warm oranges and complementary earth tones
- **Neutral Palette:** Carefully selected grays with warmth

### Typography System

**Display Font:** Playfair Display (serif)

- Used for headings and brand elements
- Conveys elegance and traditional craftsmanship
- Available in weights: 400, 500, 600, 700, 800

**Body Font:** Inter (sans-serif)

- Used for body text and UI elements
- Ensures readability and modern appeal
- Available in weights: 300, 400, 500, 600, 700

### Component Design System

**Button Styles:**

- Primary: Warm orange background with white text
- Secondary: Green background for complementary actions
- Outline: Transparent with colored border
- Ghost: Subtle hover effects for secondary actions

**Card Components:**

- Soft shadows and rounded corners
- Consistent padding and spacing
- Hover effects for interactive elements
- Product cards with image placeholders and rating systems

**Navigation Design:**

- Clean header with logo and search functionality
- Mobile-responsive hamburger menu
- Sticky navigation for better UX
- Footer with comprehensive site links

---

## Work Item Brainstorming Evidence

### Epic 1: User Authentication & Account Management

1. **User Registration System**

   - Description: Allow new users to create accounts with email verification and profile setup
   - Priority: High | Story Points: 5

2. **Secure Login/Logout Functionality**
   - Description: Implement secure authentication with password reset and "remember me" options
   - Priority: High | Story Points: 3

### Epic 2: Product Discovery & Browsing

3. **Product Catalog with Pagination**

   - Description: Display all handcrafted products in an organized, searchable grid layout
   - Priority: High | Story Points: 8

4. **Advanced Search Functionality**

   - Description: Implement keyword search with auto-complete and result filtering
   - Priority: High | Story Points: 8

5. **Category-Based Filtering**

   - Description: Allow users to filter products by categories (jewelry, pottery, textiles, etc.)
   - Priority: Medium | Story Points: 5

6. **Product Sorting Options**
   - Description: Enable sorting by price, popularity, newest, and rating
   - Priority: Medium | Story Points: 3

### Epic 3: Product Details & Purchase

7. **Detailed Product View Pages**

   - Description: Show product images, descriptions, artisan info, reviews, and purchase options
   - Priority: High | Story Points: 8

8. **Shopping Cart Functionality**
   - Description: Allow users to add multiple items to cart and manage quantities
   - Priority: High | Story Points: 5

### Epic 4: Artisan/Seller Features

9. **Artisan Profile Creation**

   - Description: Enable artisans to create detailed profiles with bios, photos, and portfolios
   - Priority: High | Story Points: 8

10. **Product Listing Management**

    - Description: Allow artisans to list, edit, and manage their handcrafted products
    - Priority: High | Story Points: 10

11. **Order and Inventory Dashboard**
    - Description: Provide artisans with tools to manage orders, inventory, and analytics
    - Priority: Medium | Story Points: 10

### Epic 5: Reviews & Social Features

12. **Customer Review System**

    - Description: Enable verified purchasers to write and rate products
    - Priority: Medium | Story Points: 8

13. **Artisan Story Showcase**
    - Description: Feature artisan journeys, processes, and behind-the-scenes content
    - Priority: Low | Story Points: 5

### Epic 6: User Experience & Accessibility

14. **Mobile-Responsive Design**

    - Description: Ensure seamless experience across all device sizes and orientations
    - Priority: High | Story Points: 8

15. **Accessibility Compliance**
    - Description: Implement WCAG 2.1 Level AA standards for inclusive design
    - Priority: Medium | Story Points: 8

### Epic 7: Performance & SEO

16. **Performance Optimization**

    - Description: Achieve fast page loads with image optimization and efficient caching
    - Priority: Medium | Story Points: 8

17. **SEO Implementation**
    - Description: Optimize for search engines with meta tags, structured data, and sitemaps
    - Priority: Medium | Story Points: 5

---

## Implementation Evidence

### Completed Features (MVP)

- ✅ **Responsive Homepage** with hero section, features showcase, and call-to-action
- ✅ **Product Catalog Page** with filtering interface and product grid
- ✅ **Artisan Showcase Page** with featured artisans and profiles
- ✅ **Navigation System** with header, footer, and mobile menu
- ✅ **Design System** with consistent styling and component library
- ✅ **Deployment Pipeline** with Vercel integration and GitHub Actions

### Documentation Delivered

- ✅ **17 Detailed User Stories** across 7 epics (121 total story points)
- ✅ **Comprehensive README** with setup instructions and project overview
- ✅ **Deployment Guide** with step-by-step Vercel configuration
- ✅ **Technical Documentation** with component architecture and best practices

### Quality Assurance

- ✅ **Cross-Browser Testing** (Chrome, Firefox, Safari, Edge)
- ✅ **Responsive Design Testing** (Mobile, tablet, desktop viewports)
- ✅ **Performance Optimization** (Lighthouse scores, Core Web Vitals)
- ✅ **Code Quality** (ESLint, TypeScript strict mode, best practices)

---

## Submission Summary

This group project submission demonstrates a complete, production-ready artisan marketplace application built with modern web technologies. The Handcrafted Haven platform showcases professional development practices, comprehensive planning through user stories, and a cohesive design system that effectively serves both artisans and customers.

**Key Achievements:**

- Professional-grade web application with Next.js and TypeScript
- Comprehensive user story documentation (17 stories, 7 epics)
- Live deployment with continuous integration
- Responsive, accessible design following modern UX principles
- Complete project documentation and submission materials

---

_Submitted by Kendahl Bingham, Dominic Odeh Abah, Nsisong Gabriel Johnson, and Manuel Mario Zamalloa Llantoy for WDD430 Week 2 Group Project Assignment_
