# Amour 💌

A cinematic birthday experience built with React and Vite, designed to turn a simple celebration into a story-filled memory journey.

This project creates a romantic, interactive birthday page with a passcode lock, floral transition, lamp scene, cake-cutting moment, love letter, and a floating memory gallery.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:ff758c,100:ffb199&height=180&section=header&text=Amour&fontSize=72&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=A%20cinematic%20love%20experience%20made%20with%20React&descAlignY=60&descSize=18" alt="Amour banner" width="100%" />

</div>

## Overview

Amour is a personalized birthday app for one special person. It blends animation, music, photos, and a heartfelt message into one immersive experience.

The flow is intentionally emotional and cinematic:

- Unlock the experience with a passcode
- Light up the scene with a lamp moment
- Cut the birthday cake
- Read a custom love letter
- Explore memories in a floating galaxy gallery

## Features

- Interactive landing screen with a passcode lock
- Floral transition animation between scenes
- Lamp activation scene with a playful reveal
- Swipe-based birthday cake interaction
- Customizable romantic letter with sender and recipient details
- Photo gallery with floating memory cards
- Music support with custom audio upload
- Settings modal for editing text, photos, and personalization
- Local browser storage so the app works without a backend

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion / Motion
- Tailwind CSS
- Lucide icons
- canvas-confetti

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── public/
│   ├── audio/
│   └── birthday/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── components/
│   │   ├── CakeScene.tsx
│   │   ├── FloatingHearts.tsx
│   │   ├── FloralTransition.tsx
│   │   ├── LampScene.tsx
│   │   ├── LandingScene.tsx
│   │   ├── LetterScene.tsx
│   │   ├── LoveNotesModal.tsx
│   │   ├── LoveReasonsModal.tsx
│   │   ├── MusicPlayer.tsx
│   │   ├── PhotoLightbox.tsx
│   │   ├── SettingsModal.tsx
│   │   └── SpaceGalleryScene.tsx
│   ├── data/
│   │   └── defaultData.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── audio.ts
└── README.md
```

## Getting Started

### Requirements

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

> The app is configured to run on port 3000 via the Vite script in the project.

### Production build

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

### Type check

```bash
npm run lint
```

## Default Demo Access

The default passcode is:

```text
24092006
```

After unlocking, the experience flows in this order:

1. Lamp scene
2. Cake scene
3. Love letter
4. Memory gallery

## Personalization

The easiest place to customize the content is in [src/data/defaultData.ts](src/data/defaultData.ts).

You can change:

- recipient and sender names
- title and greeting text
- love letter content
- cake message
- gallery captions
- music title and audio file
- main profile photo

The app also includes an in-app settings panel to update values directly from the browser.

## Notes

- All content is stored in browser `localStorage`.
- Uploaded photos and music are kept locally as data URLs.
- There is no database or backend required for this project.
- Audio may need user interaction before playing because browsers block autoplay until a click or tap occurs.

## License

This project is for personal and creative use. If you plan to use it for a commercial project, please check the licensing of the assets included in your setup.

## Built For

This project is ideal for:

- birthday surprises
- anniversary pages
- romantic message experiences
- personalized memory storytelling

If you want, I can also make the README more premium and more Hindi-friendly, or add a screenshot section and deployment instructions for GitHub Pages / Netlify / Vercel.
