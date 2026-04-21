'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const roles = ['Web Developer', 'UX Designer', 'Creative Technologist'];
const taglines = [
  'I create beautiful, functional websites...',
  'User experiences that leave lasting impressions...',
  'Modern design meets cutting-edge technology...',
];

const WireframeSphere = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron args={[1.8, 1]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#818cf8" wireframe transparent opacity={0.4} />
      </Icosahedron>
    </Float>
  );
};

const CountUp = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(taglineInterval);
  }, []);

  const stats = [
    { value: 10, suffix: '+', label: 'Projects' },
    { value: 20, suffix: '+', label: 'Clients' },
    { value: 4, suffix: '', label: 'Years Experience' },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            Available for work
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient-shimmer">Ahmed</span>
          </h1>

          <div className="text-2xl lg:text-3xl font-medium mb-6 h-12 flex items-center justify-center lg:justify-start">
            <span className="text-muted-foreground mr-2">I'm a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-primary"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="h-8 mb-8 flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTagline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-lg text-muted-foreground"
              >
                {taglines[currentTagline]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <Link href="#work">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                View Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-primary/30 text-foreground rounded-full font-semibold flex items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-all"
              >
                Let's Talk
                <MessageCircle className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center lg:justify-start gap-8 pt-4 border-t border-white/10"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} color="#818cf8" intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#22d3ee" intensity={0.5} />
            <WireframeSphere />
          </Canvas>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] border border-primary/20 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
            <div className="absolute w-[400px] h-[400px] border border-primary/10 rounded-full" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;