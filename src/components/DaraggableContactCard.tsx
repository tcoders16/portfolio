'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function DraggableContactCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const [constraints, setConstraints] = useState({
    top: 20,
    left: 20,
    right: 0,
    bottom: 0,
  });

  const [position, setPosition] = useState({ x: 20, y: 20 }); // Persistent position
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

    // Smooth bounce effect
    cardRef.current?.animate(
      [
        { transform: `translate(${newX}px, ${newY}px)` },
        { transform: `translate(${newX}px, ${newY - 15}px)` },
        { transform: `translate(${newX}px, ${newY + 8}px)` },
        { transform: `translate(${newX}px, ${newY}px)` },
      ],
      { duration: 0.8, easing: 'ease-out' }
    );
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
        <div className="bg-black/60 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl px-6 py-4 text-white w-[260px]">
          <p className="font-semibold text-lg mb-2">Contact Info</p>
          <p className="text-sm text-gray-300">
            📞 <span className="text-white font-medium">+1 (289) 400‑8975</span><br />
            📧 <span className="text-white font-medium">emailtosolankiom@gmail.com</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}