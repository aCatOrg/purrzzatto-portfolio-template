# Purrzzatto Portfolio

This repository contains the source code for my personal portfolio website, built with Next.js and inspired by the **Once UI Magic Portfolio** template. Here, I showcase my work, projects, and thoughts.

🌐 **Live Demo**: [purrzzatto.com](https://www.purrzzatto.com/)

## ✨ Key Improvements

Building on the original Magic Portfolio template, I've added several enhancements for better functionality and flexibility. For a detailed breakdown, visit my project page: [Building My Portfolio](https://www.purrzzatto.com/work/building-my-portfolio).

- **Subscribe Button**: Fixed unresponsive button; now properly handles email submission and validation.
- **Type-Safe Debounce**: Replaced incorrect debounce typing for improved TypeScript reliability.
- **Gallery**: Dynamic image loading from `public/images/gallery` via API route; supports orientation-based naming for optimal aspect ratios.
- **Component Flexibility**: Enhanced "Work", Carousel, and Media components to accept varied child structures; added accordions in the About section.
- **MDX Code Blocks**: Improved handling of language and label syntax (e.g., `~~~<language>:<label>?`).
- **Sitemap**: Conditionally includes blogs/projects only when routes are enabled in the config.

If you find these improvements useful and use this as a starting point for your own portfolio, please consider leaving a star! ⭐

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Clone and Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional, for features like password protection):
   - Copy `.env.example` to `.env.local` and fill in any required values (e.g., for protected routes).

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

5. **Build for production** (optional):
   ```bash
   npm run build
   npm run start
   ```

For debugging, use the provided VS Code launch configurations in `.vscode/launch.json`.

## 🌐 Deployment

This site is deployed on **Vercel**, which offers seamless integration with Next.js and a generous free tier.

- Connect your GitHub repository to Vercel for automatic deployments.
- For manual deployment from GitHub, refer to: [Vercel GitHub Deployment](https://vercel.com/docs/git).

Documentation for other providers is available on Vercel's site.

## 📖 About Magic Portfolio

This portfolio is based on the [Once UI Magic Portfolio](https://once-ui.com/products/magic-portfolio) template, which provides an easy-to-use, cohesive, and well-documented system. It's beautifully designed out of the box!

- **Demo**: [demo.magic-portfolio.com](https://demo.magic-portfolio.com)
- **Quick Start**: Visit their site for setup instructions.

I highly recommend it for anyone building their own portfolio—it's an excellent foundation!

## 📄 License

Distributed under the CC BY-NC 4.0 License. See `LICENSE` for more information.