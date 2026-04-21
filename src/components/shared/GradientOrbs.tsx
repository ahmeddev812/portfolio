'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const GradientOrbs = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const orb1X = useSpring(mouseX, springConfig);
  const orb1Y = useSpring(mouseY, springConfig);
  const orb2X = useSpring(mouseX, { ...springConfig, stiffness: 100 });
  const orb2Y = useSpring(mouseY, { ...springConfig, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <motion.div
        style={{
          x: orb1X,
          y: orb1Y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[120px] opacity-60"
      />
      <motion.div
        style={{
          x: orb2X,
          y: orb2Y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[120px] opacity-60"
      />
    </div>
  );
};

export default GradientOrbs;