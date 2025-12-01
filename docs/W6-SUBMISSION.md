# W6 Team Project Checkpoint Submission

## 1. Project Repo

**Repository URL:** https://github.com/kendychae/handcrafted-haven

The group's project repository contains a fully functional Next.js e-commerce application with significant Week 6 enhancements including expanded product catalog (20 products), new product categories (Candles and Prints), improved sorting functionality with "Least Rated" option, elimination of placeholder content, and comprehensive link fixes throughout the site.

## 2. Project Board

**Project Board URL:** https://github.com/users/kendychae/projects/1

The group's GitHub Project Board currently contains 12 active items across multiple sprints, demonstrating continuous progress and systematic issue tracking. Week 6 work focused on completing 10+ issues related to product expansion, placeholder removal, dead-end link fixes, and sorting functionality improvements.

## 3. Meeting Summary

### Participants

- Kendahl Bingham (Team Lead)
- Dominic Odeh Abah
- Nsisong Gabriel Johnson
- Manuel Mario Zamalloa Llantoy

### Challenge

**Data Consistency Across Expanding Product Catalog**

As we expanded from 8 to 20 products and added two new categories (Candles and Prints), maintaining consistency between the centralized product data (`products.ts`) and the hardcoded arrays in page components became challenging. We had to carefully synchronize product information, images, prices, and ratings across multiple files while ensuring no data discrepancies that could confuse users or break functionality. Additionally, sourcing appropriate product images for 12 new items required careful curation to avoid the image quality issues we faced in previous weeks.

### Success

**Complete Placeholder Elimination and Professional Polish**

We successfully eliminated all placeholder content throughout the website, replacing `/api/placeholder` image references with real, high-quality Unsplash images for artisan profiles and products. The social media links in the footer were updated from dead-end `#` anchors to functional external URLs. The "Learn More" button that previously pointed to a non-existent `/artisan-handbook` page now properly navigates to the About page. Most significantly, we implemented the "Least Rated" sorting option, providing users with comprehensive product filtering capabilities. The website now presents a completely professional appearance with 20 diverse products across 9 categories, all with proper imagery and no broken links.

### Insight

**The Importance of Scalable Data Architecture**

This week reinforced the critical need for a single source of truth in application data management. Having product data exist in both `src/data/products.ts` (centralized) and `src/app/products/page.tsx` (hardcoded array) created synchronization challenges that will only worsen as the application scales. We realized that future development should:

1. **Consolidate to a single data source** - All components should import from `products.ts` rather than maintaining separate arrays
2. **Implement proper data fetching patterns** - Consider moving toward API-based data retrieval to prepare for backend integration
3. **Use TypeScript interfaces consistently** - Ensure all product objects conform to the `Product` interface to catch inconsistencies at compile time
4. **Plan for database migration** - The current file-based data structure works for prototyping but needs to transition to a proper database as we approach production

This insight will guide our architectural decisions in upcoming weeks as we work toward a more robust, scalable e-commerce platform.

---

**Week 6 Accomplishments:**

✅ Added "Least Rated" sorting option (W5 Issue #38)  
✅ Expanded product catalog to 20 items with proper details  
✅ Added Candles and Prints categories (W6 Issue #37)  
✅ Replaced all placeholder images with real Unsplash images  
✅ Fixed all social media dead-end links (W6 Issues #42-45)  
✅ Updated "Learn More" button to point to existing page (W6 Issue #41)  
✅ Maintained zero build errors and TypeScript compliance  
✅ Professional code quality throughout all changes

---

**Submitted by:** Kendahl Bingham (Team Lead)  
**Date:** December 1, 2025  
**Sprint:** Week 6 Checkpoint
