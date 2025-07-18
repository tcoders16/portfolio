'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function DraggableContactCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ top: 20, left: 20, right: 0, bottom: 0 });
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const x = useMotionValue(position.x);
  const y = useMotionValue(position.y);

  useLayoutEffect(() => {
    const update = () => {
      if (cardRef.current) {
        const { width, height } = cardRef.current.getBoundingClientRect();
        setConstraints({
          top: 20,
          left: 20,
          right: window.innerWidth - width - 20,
          bottom: window.innerHeight - height - 20,
        });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleDragEnd = (_event: MouseEvent | TouchEvent, info: any) => {
    const newX = info.point.x;
    const newY = info.point.y;
    setPosition({ x: newX, y: newY });

    cardRef.current?.animate(
      [
        { transform: `translate(${newX}px, ${newY}px)` },
        { transform: `translate(${newX}px, ${newY - 135}px)` },
        { transform: `translate(${newX}px, ${newY + 72}px)` },
        { transform: `translate(${newX}px, ${newY}px)` },
      ],
      { duration: 0.8, easing: 'ease-out' }
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={constraints}
        dragElastic={0.3}
        dragMomentum={true}
        style={{ x, y, touchAction: 'none' }}
        onDragEnd={handleDragEnd}
        whileTap={{ scale: 1.02 }}
        whileDrag={{ scale: 1.04 }}
        className="absolute z-[9999] pointer-events-auto cursor-grab active:cursor-grabbing"
      >



        {/* Card Color */}
<div
  className="bg-gradient-to-br from-[#0b0b0b] via-[#0e0e0e] to-[#121212]
             border border-cyan-400
             rounded-2xl
             px-4 py-5 sm:px-10 sm:py-8
             w-full max-w-xs sm:w-[420px]
             text-white cursor-pointer font-pixel
             transition-all duration-300 hover:scale-[1.02] sm:hover:scale-[1.08]
             shadow-[0_0_12px_#00f2ff55] backdrop-blur-xl"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>



  <p className="text-2xl font-bold tracking-wide mb-4 text-white-400">Contact Info</p>
  <p className="text-base text-gray-200 leading-relaxed space-y-2">
    <span className="flex justify-between items-center">
      <span>
        <span className="text-white font-semibold">Phone:</span><span className='text-blue-300 font-mono'> +1(289)400-8975 </span> 
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          copyToClipboard('+1(289)-400-8975');
        }}
        className="ml-2 text-xs border border-b-blue-500 px-2 py-1 rounded-md text-blue-300 hover:bg-blue-300 hover:text-white transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        Copy
      </button>
    </span>
    <span className="flex justify-between items-center">
      <span>
        <span className="text-white font-semibold">Email:</span><span className='text-blue-300 ml-2 font-mono'>emailtosolankiom@gmail.com</span> 
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          copyToClipboard('emailtosolankiom@gmail.com');
        }}
        className="ml-2 text-xs border border-b-blue-500 px-2 py-1 rounded-md text-blue-300 hover:bg-blue-300 hover:text-white transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        Copy
      </button>
    </span>
    <span className="block mt-2">
      <span className="text-amber-300 font-regular">Note:</span> Hit the card on top to scroll or Interact with Card
    </span>
  </p>
</div>
      </motion.div>
    </div>
  );
}