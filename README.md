<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:ff758c,100:ffb199&height=190&section=header&text=Amour&fontSize=76&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=A%20cinematic%20love%20experience%20made%20with%20React&descAlignY=62&descSize=18" alt="Amour banner" width="100%" />

<br />

<a href="https://github.com/"><img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" /></a>
<a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6" /></a>
<a href="https://motion.dev/"><img src="https://img.shields.io/badge/Motion-animated-111111?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" /></a>
<a href="https://www.instagram.com/hack.n.code/"><img src="https://img.shields.io/badge/Instagram-@hack.n.code-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram hack.n.code" /></a>

<br /><br />

<img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&size=25&duration=3000&pause=900&color=E75480&center=true&vCenter=true&width=650&lines=Unlock+the+memory.;Light+the+moment.;Cut+the+cake.;Read+the+letter.;Float+through+your+memories." alt="Animated feature list" />

<h2>Hi, welcome to Amour 💌</h2>

</div>

## A little universe, made for one person

**Amour** turns a birthday message into an interactive story. A private passcode opens a sequence of soft transitions, a glowing lamp, a cake-cutting moment, a handwritten-style letter, and a floating photo galaxy where memories drift through space.

<div align="center">

`unlock`  →  `illuminate`  →  `celebrate`  →  `read`  →  `remember`

</div>

### ✨ The experience

| Scene | What happens |
| --- | --- |
| **Passcode landing** | Unlock the experience with a personal code and a featured photo. |
| **Floral transition** | Move between chapters through a blooming animated transition. |
| **Lamp scene** | Pull the cord and bring the next moment to life. |
| **Birthday cake** | Swipe to cut the cake and trigger the celebration. |
| **Love letter** | Reveal a customizable letter, one line at a time. |
| **Photo galaxy** | Explore uploaded memories in a cinematic 3D-style space gallery. |

### 💌 Personalize everything

- Change the recipient and sender names.
- Rewrite the greeting, letter, closing, cake message, and polaroid text.
- Upload a main photo and as many gallery memories as you like.
- Add your own music and set its title.
- Open love notes and the “reasons I love you” experience.
- Reset the experience or clear gallery photos whenever you need.

All configuration is saved in the browser with `localStorage`. Uploaded images are kept locally as data URLs, so this project does not require a database or account backend.

## Run it locally

**Requirements:** Node.js 18+

### 1. Install and start

```bash
npm install
npm run dev
```

### 2. Open the website

Visit [http://localhost:3000](http://localhost:3000) in a modern browser. The Vite server runs on port `3000` and reloads the page automatically when you edit the source.

### 3. Try the demo

The default landing-page passcode is `1234`. After unlocking, follow the experience in order: pull the lamp cord, swipe across the cake to cut it, read the letter, and explore the floating photo gallery.

> Audio playback may require one click or tap because browsers block autoplay until the user interacts with the page.

### Available commands

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run the TypeScript check
```

## Project map

```text
src/
├── App.tsx                    # Scene router and saved configuration
├── components/
│   ├── LandingScene.tsx       # Passcode entry and first impression
│   ├── LampScene.tsx          # Pull-cord interaction
│   ├── CakeScene.tsx          # Swipe-to-cut celebration
│   ├── LetterScene.tsx         # Animated love letter
│   ├── SpaceGalleryScene.tsx  # Floating memory gallery
│   └── ...                    # Music, modals, hearts, transitions
├── data/defaultData.ts        # Starter romantic content
├── types/index.ts             # Shared TypeScript models
└── utils/audio.ts             # Music playback helpers
```

## Make it yours

The quickest starting point is [`src/data/defaultData.ts`](src/data/defaultData.ts). For a deeper customization flow, launch the app and use the settings button in the experience itself. Replace the sample Unsplash photos with your own memories before sharing the final link.

## Built with

`React` · `TypeScript` · `Vite` · `Motion` · `Tailwind CSS` · `Lucide React` · `canvas-confetti`

<div align="center">

<br />

<a href="https://www.instagram.com/hack.n.code/"><strong>Follow more builds at @hack.n.code on Instagram →</strong></a>

<br /><br />

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:ffb199,100:ff758c&height=100&section=footer&animation=fadeIn" alt="Amour footer" width="100%" />

</div>
