import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { DEFAULT_CONFIG } from './data/defaultData';
import { AppConfig, SceneType } from './types';
import { musicPlayer } from './utils/audio';

import { FloatingHearts } from './components/FloatingHearts';
import { MusicPlayer } from './components/MusicPlayer';
import { FloralTransition } from './components/FloralTransition';
import { LoveNotesModal } from './components/LoveNotesModal';
import { LoveReasonsModal } from './components/LoveReasonsModal';
import { SettingsModal } from './components/SettingsModal';

import { LandingScene } from './components/LandingScene';
import { LampScene } from './components/LampScene';
import { CakeScene } from './components/CakeScene';
import { LetterScene } from './components/LetterScene';
import { SpaceGalleryScene } from './components/SpaceGalleryScene';

const STORAGE_KEY = 'romantic_birthday_app_config_v4';

export default function App() {
  const [config, setConfig] = useState<AppConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch (e) {
      // Ignore
    }
    return DEFAULT_CONFIG;
  });

  const [currentScene, setCurrentScene] = useState<SceneType>('landing');
  const [isFloralActive, setIsFloralActive] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isLoveReasonsOpen, setIsLoveReasonsOpen] = useState(false);

  // Keep music silent until the passcode is unlocked.
  useEffect(() => {
    if (config.customAudioUrl) {
      musicPlayer.setCustomAudio(config.customAudioUrl);
    } else {
      musicPlayer.setCustomAudio(undefined);
    }
  }, [config.customAudioUrl]);

  // Save changes to localStorage
  const handleSaveConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      // Ignore
    }
  };

  const handleResetDefaults = () => {
    setConfig(DEFAULT_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // Ignore
    }
  };

  const handleClearPhotos = () => {
    const cleared = {
      ...config,
      galleryPhotos: [],
    };
    setConfig(cleared);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleared));
    } catch (e) {
      // Ignore
    }
  };

  const handleUpdateMainPhoto = (url: string) => {
    const updated = { ...config, mainPhoto: url };
    handleSaveConfig(updated);
  };

  const handleAddGalleryPhotos = (files: FileList) => {
    (Array.from(files) as File[]).forEach((file: File, index: number) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          const newPhoto = {
            id: `upload-${Date.now()}-${index}`,
            url: ev.target!.result as string,
            caption: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') || 'Cherished Memory ❤️',
            date: 'Happy Moment',
            rotation: Math.random() * 14 - 7,
            x: Math.floor(Math.random() * 70) + 15,
            y: Math.floor(Math.random() * 60) + 20,
            z: Math.floor(Math.random() * 80) - 20,
            scale: 1,
          };
          setConfig((prev) => {
            const nextPhotos = [...prev.galleryPhotos, newPhoto];
            const updated = { ...prev, galleryPhotos: nextPhotos };
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            } catch (e) {}
            return updated;
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Scene Transitions
  const handlePasscodeSuccess = () => {
    if (config.customAudioUrl) {
      musicPlayer.setCustomAudio(config.customAudioUrl);
    }
    if (!musicPlayer.getIsPlaying()) {
      musicPlayer.play();
    }
    setIsFloralActive(true);
  };

  const handleFloralComplete = () => {
    setIsFloralActive(false);
    setCurrentScene('lamp');
  };

  const handleReplay = () => {
    setCurrentScene('landing');
  };

  const isDarkScene = currentScene === 'space';

  return (
    <main className="relative min-h-screen w-full font-sans antialiased overflow-hidden select-none">
      {/* Background Floating Hearts Particle Ambiance (only for pastel scenes) */}
      {!isDarkScene && <FloatingHearts count={16} />}

      {/* Persistent Romantic Music Player */}
      <MusicPlayer
        customMusicTitle={config.musicTitle}
        onUploadCustomMusic={(file) => {
          const reader = new FileReader();
          reader.onload = (ev) => {
            if (ev.target?.result) {
              const url = ev.target.result as string;
              handleSaveConfig({
                ...config,
                customAudioUrl: url,
                musicTitle: file.name.replace(/\.[^/.]+$/, ''),
              });
            }
          };
          reader.readAsDataURL(file);
        }}
        dark={isDarkScene}
      />

      {/* Floral Blossom Burst Transition (00:03 - 00:04 in video) */}
      <FloralTransition
        isActive={isFloralActive}
        onComplete={handleFloralComplete}
      />

      {/* SCENE ROUTER */}
      <AnimatePresence mode="wait">
        {currentScene === 'landing' && (
          <LandingScene
            key="landing"
            mainPhoto={config.mainPhoto}
            polaroidText={config.polaroidText}
            passcode={config.passcode}
            recipientName={config.recipientName}
            onSuccess={handlePasscodeSuccess}
            onUpdateMainPhoto={handleUpdateMainPhoto}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onOpenNotes={() => setIsNotesOpen(true)}
            onOpenLoveReasons={() => setIsLoveReasonsOpen(true)}
          />
        )}

        {currentScene === 'lamp' && (
          <LampScene
            key="lamp"
            onComplete={() => setCurrentScene('cake')}
          />
        )}

        {currentScene === 'cake' && (
          <CakeScene
            key="cake"
            heading={config.cakeHeading}
            celebrationText={config.cakeCelebrationText}
            onNext={() => setCurrentScene('letter')}
          />
        )}

        {currentScene === 'letter' && (
          <LetterScene
            key="letter"
            title={config.letterTitle}
            greeting={config.letterGreeting}
            body={config.letterBody}
            closing={config.letterClosing}
            senderName={config.senderName}
            recipientName={config.recipientName}
            onNext={() => setCurrentScene('space')}
            onEditLetter={() => setIsSettingsOpen(true)}
          />
        )}

        {currentScene === 'space' && (
          <SpaceGalleryScene
            key="space"
            photos={config.galleryPhotos}
            recipientName={config.recipientName}
            onReplay={handleReplay}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onAddPhotos={handleAddGalleryPhotos}
            onOpenLoveReasons={() => setIsLoveReasonsOpen(true)}
          />
        )}
      </AnimatePresence>

      {/* Friendship Reasons & Bestie Match Modal */}
      <LoveReasonsModal
        isOpen={isLoveReasonsOpen}
        onClose={() => setIsLoveReasonsOpen(false)}
        recipientName={config.recipientName}
      />

      {/* Friendship Notes & Comments Modal */}
      <LoveNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        recipientName={config.recipientName}
      />

      {/* Customization Settings Drawer / Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        config={config}
        onClose={() => setIsSettingsOpen(false)}
        onSave={handleSaveConfig}
        onResetDefaults={handleResetDefaults}
        onClearPhotos={handleClearPhotos}
        onReplay={handleReplay}
      />
    </main>
  );
}
