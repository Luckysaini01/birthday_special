import { AppConfig } from '../types';

const createMemoryArt = (title: string, accent: string, accentSoft: string, glow: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1000">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentSoft}" />
          <stop offset="45%" stop-color="#fff7fb" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="38%" r="70%">
          <stop offset="0%" stop-color="${glow}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="${glow}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="900" height="1000" fill="url(#bg)"/>
      <circle cx="450" cy="350" r="310" fill="url(#glow)"/>
      <path d="M180 760C260 620 350 560 450 560C550 560 640 620 720 760V860H180V760Z" fill="${accent}" opacity="0.3"/>
      <rect x="150" y="120" width="600" height="600" rx="28" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)"/>
      <circle cx="450" cy="380" r="150" fill="rgba(255,255,255,0.4)"/>
      <path d="M355 420C385 330 455 300 510 345C560 387 553 482 489 527C442 561 367 557 338 499C321 467 330 447 355 420Z" fill="${accent}" opacity="0.85"/>
      <circle cx="395" cy="398" r="18" fill="#fff6fb"/>
      <circle cx="505" cy="400" r="18" fill="#fff6fb"/>
      <path d="M392 480C430 516 470 516 508 480" stroke="#fff6fb" stroke-width="12" stroke-linecap="round" fill="none"/>
      <g font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
        <text x="450" y="820" font-size="54" fill="#4f1d3d" font-weight="700">${title}</text>
        <text x="450" y="880" font-size="24" fill="#7a3858" letter-spacing="2">forever & always</text>
      </g>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const DEFAULT_CONFIG: AppConfig = {
  recipientName: 'Bhabhiji',
  senderName: 'Aapka Pyara',
  mainPhoto: '/birthday1/a1.jpeg',
  polaroidText: 'Happy Birthday Bhabhiji ❤️',
  passcode: '20102006',
  cakeHeading: 'Cake Cut Karne Ka Time! 🎂',
  cakeCelebrationText: 'Happy Birthday, Bhabhiji! 💖',
  letterTitle: 'Happy Birthday Bhabhiji ✨',
  letterGreeting: 'Bhabhiji, aaj ka din bahut special hai! 🌸',
  letterBody: [
    'Happy Birthday Bhabhiji! Aapki muskaan, dil ko hamesha sukoon deti hai. ✨',
    'Aapke liye har dua, har wishes, aur har khushi ka matlab hai sirf ek hi baat — aap itni achhi, itni pyaari aur itni sweet ho ki har din aapke liye special lagta hai. 😊',
    'Aapki har smile ek nayi roshni hai, aur har din aapke liye khushiyan, sukoon, aur safalta lekar aane ki dua hai.',
    'Aapke saath hansi, baatein, family ki warmth aur pyaar ka ek alag hi ehsaas hai. Aaj ke din ka sabse bada gift aapka khush rehna hai. 💕',
    'Bhabhiji, aap ke liye hum sab ki duaen, pyaar aur bahut bahut shubhkamnayein hain. Aap hamesha khush rahein, sehatmand rahein aur har din aapke sapne poore hote rahein. 💛'
  ],
  letterClosing: 'Aap sabke liye sabse pyaari Bhabhiji, hamesha pyaar aur duaon ke saath 💛',
  galleryPhotos: [
    { id: 'photo-1', url: '/birthday1/a1.jpeg', caption: 'Happy birthday smile ✨', date: 'Memory 1', rotation: -5, x: 20, y: 22, z: 50, scale: 1.05 },
    { id: 'photo-2', url: '/birthday1/dd.jpeg', caption: 'Warm family moments 🌸', date: 'Memory 2', rotation: 6, x: 78, y: 20, z: -20, scale: 0.95 },
    { id: 'photo-3', url: '/birthday1/df.jpeg', caption: 'Joy and charm 💖', date: 'Memory 3', rotation: -6, x: 24, y: 65, z: 20, scale: 1.0 },
    { id: 'photo-4', url: '/birthday1/er1.jpeg', caption: 'Sweet celebration ✨', date: 'Memory 4', rotation: 5, x: 80, y: 64, z: -10, scale: 1.02 },
    { id: 'photo-5', url: '/birthday1/fg.jpeg', caption: 'Birthday sparkle 🌟', date: 'Memory 5', rotation: -2, x: 50, y: 42, z: 80, scale: 1.12 },
    { id: 'photo-6', url: '/birthday1/gh.jpeg', caption: 'Forever favorite memory 🌷', date: 'Memory 6', rotation: 7, x: 15, y: 44, z: -45, scale: 0.92 },
    { id: 'photo-7', url: '/birthday1/jjj.jpeg', caption: 'Beautiful vibes ✨', date: 'Memory 7', rotation: -4, x: 65, y: 58, z: 35, scale: 1.08 },
    { id: 'photo-8', url: '/birthday1/ko.jpeg', caption: 'Lovely birthday glow 🌼', date: 'Memory 8', rotation: 8, x: 32, y: 18, z: -30, scale: 0.96 },
    { id: 'photo-9', url: '/birthday1/nkj.jpeg', caption: 'Always shining bright 💫', date: 'Memory 9', rotation: -7, x: 74, y: 36, z: 22, scale: 1.01 },
    { id: 'photo-10', url: '/birthday1/oo.jpeg', caption: 'Cute smiles & happy days 💕', date: 'Memory 10', rotation: 5, x: 12, y: 58, z: -18, scale: 0.94 },
    { id: 'photo-11', url: '/birthday1/qi.jpeg', caption: 'Birthday sparkle 🌟', date: 'Memory 11', rotation: -3, x: 46, y: 12, z: 65, scale: 1.1 },
    { id: 'photo-12', url: '/birthday1/qq.jpeg', caption: 'More memories, more smiles 🌷', date: 'Memory 12', rotation: 9, x: 58, y: 70, z: -42, scale: 0.98 },
    { id: 'photo-13', url: '/birthday1/sd.jpeg', caption: 'A little sparkle, a lot of love ✨', date: 'Memory 13', rotation: -6, x: 10, y: 82, z: 24, scale: 1.03 },
    { id: 'photo-14', url: '/birthday1/we.jpeg', caption: 'Forever in your smile 💫', date: 'Memory 14', rotation: 5, x: 72, y: 82, z: -30, scale: 0.97 }
  ],
  customAudioUrl: '/audio/O Sanam - Akhil Sachdeva [only best part] - Zoro BE (128k).mp3',
  musicTitle: 'O Sanam - Akhil Sachdeva 🎵'
};
