'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Smartphone, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
      className="relative"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
        
        <div className="relative bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
              <div className="text-primary">{icon}</div>
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">{title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <p className="text-sm text-muted-foreground mb-3">
                      I deliver exceptional results through attention to detail, modern technologies, 
                      and a user-centered approach. Every project is crafted with precision and care.
                    </p>
                    <ul className="space-y-2">
                      {['Modern Technologies', 'Best Practices', 'Performance Optimized', 'SEO Friendly'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance usability and create engaging experiences.',
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: 'Responsive Design',
      description: 'Websites that look and function perfectly on all devices, from desktop to mobile.',
      icon: <Smartphone className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-500/10 to-transparent" />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creating digital experiences that combine beauty with functionality
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;