# App Forge

A modern single-page application simulating an app marketplace. Users can browse a curated collection of productivity, fitness, note-taking, photography, travel, coding, and music apps, view detailed information, ratings, and statistics, and navigate seamlessly between sections.

**Live Demo:** [https://fastidious-dusk-264ded.netlify.app/](https://fastidious-dusk-264ded.netlify.app/)

## Overview

App Forge leverages React Router v7 for client-side routing, including data loaders for efficient fetching from a static JSON dataset. The application features a responsive layout with shared navigation, dynamic app detail pages, which showcases interactive data visualizations. Built as a demonstration of clean component architecture, reusable UI elements, and modern frontend practices.

## Features

- Multi-page navigation with nested layouts and dynamic routes (`/apps/:id`)
- Data loading via React Router loaders for apps catalog and details
- Responsive, component-based UI using Tailwind CSS and DaisyUI
- Loading states with React Loader Spinner
- User feedback notifications via React Toastify
- Icon integration with React Icons

## Technologies Used

- React 19
- Vite
- React Router 7
- Tailwind CSS 4
- DaisyUI
- Recharts
- React CountUp
- React Intersection Observer
- React Loader Spinner
- React Toastify
- React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```
   git clone https://github.com/gmnayem631/app-forge.git
   cd app-forge
```

2. Install dependencies:

```
   npm install
```

3. Start the development server:

```
    npm run dev
```

## Project Structure

```
app-forge/
├── public/
│ └── apps.json # Static dataset of apps
├── src/
│ ├── routes/
│ │ └── Router.jsx # Router configuration with data loaders
│ ├── pages/ # Page components (Home, Apps, Installations, detail views)
│ ├── components/ # Reusable UI (Navbar, Footer, AppCard, etc.)
│ ├── layouts/ # Root layout with outlet
│ ├── context/ # Global state management
│ ├── assets/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── vite.config.js
└── tailwind.config (via plugin)
```

## Key Highlights

This project demonstrates proficiency in:

- Implementing advanced routing patterns with React Router v7
- Managing application state and side effects in a scalable React architecture
- Building responsive, accessible interfaces

Ideal for showcasing modern React development skills in a production-like environment.
