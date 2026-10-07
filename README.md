# Plays Woo 🏀⚽🏏

Plays Woo is a premium, community-driven sports platform designed to help you discover nearby games, meet local players, and organize matches instantly. Built with a heavy focus on editorial design, smooth animations, and top-tier mobile responsiveness.

## ✨ Key Features

- **Cinematic Intro Animation:** A buttery-smooth GSAP-powered stage curtain reveal that plays once per session.
- **Scroll Animations:** Sections elegantly fade and stagger into view as you scroll down the page, powered by GSAP ScrollTrigger.
- **Responsive & Mobile-First:** Fluid typography (`clamp()`), strictly contained layouts (`overflow-x-hidden`), and horizontal scroll-snapping grids ensuring a flawless experience on devices as small as the iPhone SE.
- **Discover & Map Views:** Visual representation of nearby games and active players in your vicinity.
- **Host a Game:** Quick interface for booking turfs, selecting sports, setting times, and opening spots to the community.
- **Light/Dark Mode Theme:** Fully dynamic theming system persisting your preference with strict layout safeguards to prevent hydration layout shifts.

## 🛠️ Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations Engine:** [GSAP](https://gsap.com/) & `@gsap/react` (Timelines & ScrollTrigger)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** `Plus Jakarta Sans` (Body) & `Inter` (Cinematic Headers)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm/yarn installed.

### Installation

1. Clone the repository and navigate into the directory:
   ```bash
   git clone <your-repo-url>
   cd plays_woo_web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

Plays Woo relies on a robust set of CSS variables defined in `app/globals.css`. 
- **Light Mode (`--bg: #f3f0e8`, `--text: #11100e`)**
- **Dark Mode (`--bg: #11100e`, `--text: #f5f1e8`)**
- **Brand Accent:** A striking high-contrast orange (`#ff6542`).

## 📁 Project Structure

- `app/` - Next.js App Router root layout, pages, and global stylesheet.
- `components/`
  - `PlaysGoIntro.tsx` - The cinematic GSAP initial page load experience.
  - `marketing/` - Modular homepage sections (`Hero`, `MapSection`, `CreateGameSection`, etc.).
  - `marketing/FadeIn.tsx` - Reusable GSAP ScrollTrigger wrapper for scroll animations.
- `data/` - Hardcoded sports data and external image links (Unsplash).

## 📝 License

This project is licensed under the MIT License.
