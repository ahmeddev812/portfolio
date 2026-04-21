'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'Marketing Director, TechCorp',
    content: 'Ahmed delivered an exceptional website that exceeded our expectations. His attention to detail and understanding of our brand was impressive.',
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Product Manager, StartupXYZ',
    content: 'Working with Ahmed was a pleasure. He transformed our complex requirements into a beautiful, user-friendly application that our customers love.',
  },
  {
    id: 't3',
    name: 'Emma Rodriguez',
    role: 'Creative Director, DesignStudio',
    content: "Ahmed's design expertise helped us rebrand our company with a fresh, modern identity that resonates with our target audience.",
  },
  {
    id: 't4',
    name: 'David Wilson',
    role: 'CEO, BusinessSolutions',
    content: 'The website Ahmed developed for us has significantly improved our online presence and user engagement.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map((n) => n[0]).join('').substring(0, 2);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent" />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it - hear from some of my amazing clients
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -50, rotateY: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  <p className="text-xl lg:text-2xl leading-relaxed text-foreground mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      {getInitials(testimonials[currentIndex].name)}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-primary text-sm">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-primary to-cyan-500'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;