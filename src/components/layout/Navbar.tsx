'use client';

import React, { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'Resume', href: '/#resume' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    startTransition(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    });
  };

  const AnimatedText = ({ text }: { text: string }) => {
    return (
      <motion.h1
        className="text-xl font-bold text-gradient inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {
          text.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5, type: 'spring', stiffness: 100 }}
            >
              {char}
            </motion.span>
          ))
        }
      </motion.h1>
    );
  };

  const ThemeToggle = () => {
    if (!mounted) {
      return <div className="w-9 h-9" />;
    }

    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="clickable"
        aria-label="Toggle theme"
        disabled={isPending}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="relative z-50">
          <AnimatedText text="Ahmed" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05, color: 'var(--color-primary)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.href} className="text-foreground hover:text-primary transition-colors clickable">
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <Button variant="primary" className="clickable luxury-shadow">
            Download Resume
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-2 clickable"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <ul className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.indexOf(link) * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href={link.href} className="text-4xl font-bold text-foreground hover:text-primary transition-colors clickable">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Button variant="primary" className="clickable luxury-shadow text-xl mt-8">
              Download Resume
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};