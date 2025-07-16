import { useEffect, useRef, useState } from 'react';
import { FlipWordsDemo } from './ui/FlipWordsDemo';

const ZoomOutOnScroll = () => {
  const [progress, setProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero-section');
      if (!hero || !nameRef.current || !sentinelRef.current) return;

      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const rawProgress = -rect.top / viewportHeight;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clamped);

      const sentinelTop = sentinelRef.current.getBoundingClientRect().top;

      // Stick to top when scrolled past sentinel
      if (sentinelTop <= 10) {
        setIsSticky(true);
      }

      // Restore to normal when back down
      if (sentinelTop > 60) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scale = 1 - progress * 0.6;
  const opacity = 1 - progress * 0.4;
  const textOffset = Math.max(0, 100 - progress * 140);

  return (
    <div className="relative bg-white text-white h-[130vh] overflow-hidden ">
      {/* Zoom-out effect */}
      <div
        id="hero-section"
        className="sticky top-0 h-screen w-screen flex items-center justify-center z-10 text-white"
        style={{
          transform: `scale(${scale})`,
          opacity,
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
        }}
      >
        <FlipWordsDemo/>
        <div
          className="absolute w-screen h-screen bg-black"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
          }}
        />
      </div>


      {/* Sentinel to detect when to stick and unstick */}
      <div ref={sentinelRef} style={{ height: 1 }} />

      {/* Sticky name with Apple-style glassmorphism */}
          <div
            ref={nameRef}
            className={`text-3xl font-bold font-signature w-full text-center transition-all duration-700 ease-in-out
              ${isSticky
                ? `
                  fixed top-0 left-0 z-[1000] py-4 px-6
                  backdrop-blur-md
                  bg-white/40 dark:bg-black/30
                  border-b border-gray-300/30 dark:border-white/10
                  text-black dark:text-white
                  shadow-md
                `
                : 'text-gray-900 dark:text-black'}
            `}
            style={{
              transform: isSticky ? 'translateY(0)' : `translateY(${textOffset}%)`,
            }}
          >
             Omkumar Solanki
          </div>
    </div>
  );
};

export default ZoomOutOnScroll;