# Screenshots and Assets for W2 Submission

## Required Screenshots

### 1. Local Project Screenshot
**Filename:** `local-project-screenshot.png`
**Description:** Screenshot showing the local development environment with the project cloned and running on localhost:3000

**To capture this screenshot:**
1. Open VS Code with the handcrafted-haven project
2. Run `npm run dev` in the terminal
3. Open browser to `http://localhost:3000`
4. Take a screenshot showing both VS Code and the browser with the running application
5. Save as `local-project-screenshot.png` in the assets folder

### 2. Design Theme - Color Palette
**Filename:** `color-palette.png`
**Description:** Visual representation of the project's color scheme and design system

**To capture this screenshot:**
1. Open the live site: https://handcrafted-haven-lemon-iota.vercel.app/
2. Take screenshot of the homepage showing the color scheme in action
3. Alternatively, take a screenshot of the Tailwind config file showing the custom colors
4. Save as `color-palette.png` in the assets folder

## How to Add Screenshots

1. Take the required screenshots as described above
2. Save them in the `assets/` folder with the exact filenames
3. The W2-SUBMISSION.md file already references these images
4. Commit and push the images to your GitHub repository

## Alternative: Update the Markdown

If you prefer not to include actual image files, you can update the W2-SUBMISSION.md file to describe the screenshots instead of embedding them:

Replace:
```markdown
![Local Development Environment](../assets/local-project-screenshot.png)
```

With:
```markdown
**Local Development Environment Screenshot Description:**
Screenshot shows VS Code editor with the handcrafted-haven project structure visible, terminal running `npm run dev`, and browser displaying the homepage at localhost:3000 with full functionality.
```

## Current Project Structure for Screenshot Reference

```
handcrafted-haven/
├── .github/
├── docs/
│   ├── W2-SUBMISSION.md
│   ├── W2-assignment-submission.md
│   ├── user-stories.md
│   └── deployment-guide.md
├── src/
│   ├── app/
│   │   ├── artisans/
│   │   ├── products/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── layout/
├── assets/ (for screenshots)
├── package.json
├── tailwind.config.js
├── vercel.json
└── README.md
```