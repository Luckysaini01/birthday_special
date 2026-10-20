import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Plus, Eye, Heart } from 'lucide-react';
import { PhotoItem } from '../types';
import { PhotoLightbox } from './PhotoLightbox';

interface SpaceGallerySceneProps {
  photos: PhotoItem[];
  recipientName: string;
  onReplay: () => void;
  onOpenSettings: () => void;
  onAddPhotos: (files: FileList) => void;
  onOpenLoveReasons?: () => void;
}

export const SpaceGalleryScene: React.FC<SpaceGallerySceneProps> = ({
  photos,
  recipientName,
  onReplay,
  onOpenSettings,
  onAddPhotos,
  onOpenLoveReasons,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number; animDuration: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Generate starry sky
  useEffect(() => {
    const starList = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      animDuration: Math.random() * 3 + 2,
    }));
    setStars(starList);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;

    const x = (touch.clientX / window.innerWidth - 0.5) * 15;
    const y = (touch.clientY / window.innerHeight - 0.5) * 15;
    setMouseOffset({ x, y });
  };

  const defaultPositions = [
    { x: 18, y: 20, z: 40, rotation: -5 },
    { x: 38, y: 18, z: -10, rotation: 6 },
    { x: 62, y: 22, z: 35, rotation: -7 },
    { x: 82, y: 28, z: -25, rotation: 5 },
    { x: 24, y: 48, z: 25, rotation: -3 },
    { x: 48, y: 40, z: 80, rotation: -1 },
    { x: 72, y: 50, z: -35, rotation: -6 },
    { x: 90, y: 58, z: -18, rotation: 4 },
    { x: 16, y: 70, z: -40, rotation: 7 },
    { x: 40, y: 74, z: 20, rotation: -4 },
    { x: 62, y: 76, z: 30, rotation: 5 },
    { x: 82, y: 78, z: -28, rotation: -8 },
  ];
  const positionedPhotos = photos.map((photo, index) => {
    const position = defaultPositions[index % defaultPositions.length];
    return {
      ...photo,
      x: photo.x ?? position.x,
      y: photo.y === undefined
        ? position.y
        : Math.min(photo.y * 0.65 + 12, 68),
      z: photo.z ?? position.z,
      rotation: photo.rotation ?? position.rotation,
      scale: photo.scale ?? 1,
    };
  });

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#06070e] text-white flex flex-col justify-between select-none"
    >
      {/* Background Cosmic Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white transition-opacity"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: star.size > 2 ? '0 0 6px rgba(255, 255, 255, 0.8)' : 'none',
              animation: `pulse-slow ${star.animDuration}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* Ambient Nebula Glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-pink-900/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-purple-900/15 rounded-full blur-[120px]" />
      </div>

      {/* Floating Header Banner */}
      <header className="relative z-20 pt-16 sm:pt-6 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-200 via-rose-300 to-amber-200 bg-clip-text text-transparent tracking-tight">
            Birthday Memories for {recipientName} ✨
          </h2>
          <p className="text-[11px] sm:text-sm text-pink-300/80 mt-1 font-medium">
            Celebrating your beautiful moments, Bhabhiji 💖
          </p>
        </motion.div>
      </header>

      {/* Floating photo gallery; cards appear one after another */}
      <div className="relative flex-1 w-full perspective-1000 overflow-hidden">
        <div
          className="relative w-full h-full preserve-3d transition-transform duration-300 ease-out"
          style={{
            transform: `rotateY(${mouseOffset.x * 0.4}deg) rotateX(${-mouseOffset.y * 0.4}deg)`,
          }}
        >
          {positionedPhotos.map((photo, index) => {
            const revealDelay = index * 0.55;

            return (
              <motion.div
                key={photo.id || index}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale: photo.scale,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.45, delay: revealDelay },
                  scale: { duration: 0.45, delay: revealDelay },
                  y: {
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: revealDelay,
                  },
                }}
                style={{
                  position: 'absolute',
                  left: `${photo.x}%`,
                  top: `${photo.y}%`,
                  transform: `translate(-50%, -50%) translateZ(${photo.z}px) rotate(${photo.rotation}deg)`,
                }}
                className="group z-10 cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="w-24 rounded-xl border border-white/15 bg-[#18181f] p-2 pb-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:border-pink-400 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] sm:w-32 sm:p-2.5 sm:pb-4 md:w-40">
                  <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-lg bg-black/60">
                    <img
                      src={photo.url}
                      alt={photo.caption || 'Birthday memory'}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white opacity-0 transition-opacity group-hover:opacity-100">
                      <Eye size={18} className="drop-shadow-md" />
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="max-w-full truncate px-1 text-[10px] font-medium text-gray-300 group-hover:text-pink-300 sm:text-xs">
                      {photo.caption || photo.date || 'Memory ❤️'}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Bottom Control Bar */}
      <footer className="relative z-30 pb-6 px-4 flex items-center justify-center gap-3 sm:gap-4">
        {/* Replay Experience Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReplay}
          className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-full text-xs sm:text-sm font-semibold text-white shadow-lg flex items-center gap-2 transition-colors cursor-pointer"
        >
          <RotateCcw size={16} className="text-pink-400" />
          <span>Replay Journey ✨</span>
        </motion.button>

        {/* Add More Photos Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => fileInputRef.current?.click()}
          className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full text-xs sm:text-sm font-semibold text-white shadow-lg shadow-pink-500/30 flex items-center gap-2 transition-all cursor-pointer"
        >
          <Plus size={16} />
          <span>Add Photos 📸</span>
        </motion.button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              onAddPhotos(e.target.files);
            }
          }}
        />

        {/* Love Reasons / Sweet Quotes Button */}
        {onOpenLoveReasons && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenLoveReasons}
            className="px-4 sm:px-5 py-2.5 sm:py-3 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/40 rounded-full text-xs sm:text-sm font-semibold text-rose-200 shadow-lg flex items-center gap-2 transition-all cursor-pointer"
          >
            <Heart size={16} className="text-pink-400 fill-pink-400" />
            <span>Birthday Wishes 💛</span>
          </motion.button>
        )}


      </footer>

      {/* Lightbox Modal for Photo Details */}
      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
};
