# 💜 Violet Company

<div align="center">
  <p><strong>A High-End Digital Presence Built with Modern Web Technologies</strong></p>
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
</div>

## 📌 Overview
**Violet Company** is a cutting-edge corporate web application designed to deliver an iconic and seamless user experience. Built with a focus on architectural integrity, performance, and clean design, this project leverages a modern React 18+ stack.

The application boasts a robust component-based architecture, seamless internationalization (i18n), and a highly polished user interface tailored for a premium digital agency or technology firm.

## ✨ Key Features
* 🌍 **Full Internationalization (i18n):** Flawless switching between Arabic (RTL) and English (LTR) using `i18next`.
* 🌗 **Theming Engine:** Integrated Dark/Light mode toggle for a personalized viewing experience.
* 🔒 **Protected Routes:** Built-in authentication flow with secured components.
* 🧩 **Scalable Architecture:** Modular component design (Atomic-inspired) ensuring maintainability and clean UI states.
* ⚡ **Lightning Fast:** Powered by Vite for rapid HMR (Hot Module Replacement) and optimized production builds.
* 🎨 **Minimalist & Iconic UI:** Styled meticulously with Tailwind CSS to ensure a responsive, high-end visual aesthetic.

## 🛠️ Tech Stack
* **Framework:** React
* **Language:** TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Localization:** i18next
* **Routing:** React Router (Implicit via ProtectedRoute logic)

## 📂 Project Structure
Our codebase is structured for maximum scalability and separation of concerns:

```text
src/
├── assets/          # Static assets (images, icons, etc.)
├── Components/      # Reusable UI components
│   ├── About/       # About Section & Timeline
│   ├── Auth/        # Login, Icons, and Protected Routes
│   ├── Brand/       # Branding Guidelines & Sliders
│   ├── Contact/     # Contact Forms & Info
│   ├── Footer/      # Modern Footer Layout
│   ├── Header/      # Top Nav & Main Nav
│   ├── Home/        # Hero Section & Main Landing Components
│   ├── Pages/       # Full Page Views (e.g., NotFound)
│   ├── Reuse/       # Reusable Utilities (AnimatedComponents, ThemeToggle)
│   └── Services/    # Service Cards & Quality Assurance
├── locales/         # i18n Translation Files
│   ├── ar/          # Arabic JSON files (about, common, home, etc.)
│   └── en/          # English JSON files (about, common, home, etc.)
├── Types/           # Global TypeScript Definitions
├── App.tsx          # Root Application Component
└── main.tsx         # Entry Point
```
## 🚀 Getting Started
Prerequisites
Make sure you have Node.js (v16+ recommended) installed on your machine.

## Installation
Clone the repository:
git clone git@github.com:Eng-Afraa-Saleh/VioletCompany.git

## Navigate into the directory:
cd violet-company

## Install dependencies:
npm install

## Start the development server:
npm run dev

## 🌐 Deployment (GitHub Pages)
This project is configured for seamless deployment using GitHub Pages.

## To trigger a deployment manually (if you are using a tool like gh-pages):
npm run build
npm run deploy
