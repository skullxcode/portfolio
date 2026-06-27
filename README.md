# Portfolio

Welcome to my personal portfolio repository! This project is a responsive, interactive, and modern web application designed to showcase my projects, professional experience, skills, and technical insights.

## 🚀 Overview

This portfolio is built from the ground up using **React**, **Vite**, and **Tailwind CSS**. It serves not only as a display of my recent work—such as the Agentic Twitter Automation Workflow and Netflix Clone—but also as a testament to modern web development practices. It is engineered for blazing-fast performance, accessibility, and an exceptional user experience across all devices.

---

## ✨ Key Features

- **Dynamic Dark/Light Mode**: Full theme support managed via a custom React Context (`ThemeContext.jsx`), utilizing CSS variables for seamless transitions between modes.
- **Interactive Navigation**: A responsive top navigation bar that employs a custom `useActiveSection` hook to smoothly track and highlight the user's current scroll position.
- **Modern UI/UX**: Implements a sleek interface featuring glassmorphism (backdrop filters), custom typography (Hanken Grotesk, Inter, and Geist), and tailored Material Design 3 inspired color tokens.
- **Project Showcase & Insights**: A dedicated portfolio section to display featured projects with external links, alongside a section for technical articles and insights.
- **Performance Optimized**: Built on Vite for instant server start and lightning-fast HMR (Hot Module Replacement), with optimized production builds.

---

## 🛠️ Technologies & Tools

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
  - Custom plugins utilized: `@tailwindcss/container-queries`, `@tailwindcss/forms`
  - Extensive custom configuration for colors, typography, and spacing in `tailwind.config.js`.
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Material Symbols)

---

## 📁 Project Architecture

The application follows a modular, feature-based directory structure to maintain scalability and clean code:

```text
src/
├── assets/          # Static assets like images or SVGs
├── components/      # Reusable UI components
│   ├── common/      # Shared components (e.g., ProjectCard, StatWidget)
│   └── layout/      # Layout wrappers (e.g., TopNavBar, Footer)
├── context/         # React Context providers (e.g., ThemeContext)
├── data/            # Local data storage (portfolioData.js for projects, insights, social links)
├── features/        # Feature-specific components grouped by domain
│   ├── about/
│   ├── experience/
│   ├── hero/
│   ├── insights/
│   └── portfolio/
├── hooks/           # Custom React hooks (e.g., useActiveSection, useStats)
├── pages/           # Top-level page components (e.g., Home)
└── utils/           # Helper functions and utilities
```

---

## ⚙️ Core Implementation Details

### Custom Hooks
- **`useActiveSection`**: Tracks the user's scroll position using the `IntersectionObserver` API to dynamically update the active state of navigation links.
- **`useStats`**: Handles logic for calculating and animating statistics displayed in the Hero or About sections.

### Theming & Styling
The project utilizes a comprehensive Tailwind CSS configuration. It maps custom CSS variables (defined in `index.css`) to Tailwind utility classes, allowing for granular control over the design system. Fonts include **Hanken Grotesk** for display/headlines, **Inter** for body text, and **Geist** for monospace labels.

---

## 📦 Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/skullxcode/portfolio.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Development Server

To start the local development server with Hot Module Replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` by default.

### Production Build

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🤝 Customizing the Portfolio

This project is open for anyone to use as a template! To customize it for your own needs:

1. **Update Data:** Navigate to `src/data/portfolioData.js` and replace the existing arrays (`projects`, `insights`, `socialLinks`) with your own content.
2. **Modify Theme:** Tweak the color tokens in `src/index.css` or adjust the Tailwind configuration in `tailwind.config.js` to match your personal brand.
3. **Change Copy:** Update the text in the various components within the `src/features/` directory.

---

## 📬 Let's Connect

- **Email:** ujjwaljain146@gmail.com
- **LinkedIn:** [Ujjwal Jain](https://www.linkedin.com/in/ujjwal-jain-/)
- **GitHub:** [skullxcode](https://github.com/skullxcode)
