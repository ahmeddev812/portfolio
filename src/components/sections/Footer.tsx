'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Link2, Globe, ArrowUp, Mail, Loader2, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Responsive Design',
    'Consulting',
  ];

  const socials = [
    { icon: Code2, href: '#', label: 'GitHub' },
    { icon: Link2, href: '#', label: 'LinkedIn' },
    { icon: Globe, href: '#', label: 'Twitter' },
    { icon: Globe, href: '#', label: 'Dribbble' },
  ];

  return (
    <footer ref={containerRef} className="relative pt-20 pb-8 bg-card/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-4 text-gradient">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
              <button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                className="px-4 py-2 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {subscribeStatus === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : subscribeStatus === 'success' ? (
                  <Check className="w-4 h-4" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="text-green-400 text-xs mt-2">Thanks for subscribing!</p>
            )}
            {subscribeStatus === 'error' && (
              <p className="text-red-400 text-xs mt-2">Failed to subscribe. Try again.</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Social Media</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/20 hover:scale-110 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Ahmed. Crafted with ❤️
          </p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:scale-110 transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;