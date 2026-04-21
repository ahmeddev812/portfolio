'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Calendar, Code2, Link2, Globe, Copy, Check, Loader2, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [budgetValue, setBudgetValue] = useState(5000);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const copyEmail = () => {
    navigator.clipboard.writeText('ahmed@example.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      budget: budgetValue,
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    name="name"
                    required
                    minLength={2}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="website">Website</option>
                    <option value="webapp">Web App</option>
                    <option value="mobileapp">Mobile App</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Budget Range: <span className="text-primary">${budgetValue.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={1000}
                  max={50000}
                  step={1000}
                  value={budgetValue}
                  onChange={(e) => setBudgetValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>$1,000</span>
                  <span>$50,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={submitStatus === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">ahmed@example.com</span>
                      <button
                        onClick={copyEmail}
                        className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                        aria-label="Copy email"
                      >
                        {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Available Worldwide</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="font-medium text-green-400">Open for opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              
              <div className="flex gap-3">
                {[
                  { icon: Code2, label: 'GitHub' },
                  { icon: Link2, label: 'LinkedIn' },
                  { icon: Globe, label: 'Twitter' },
                  { icon: Globe, label: 'Dribbble' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="p-3 rounded-xl bg-white/5 hover:bg-primary/20 hover:scale-110 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <button className="w-full py-4 border-2 border-primary/30 rounded-xl font-semibold hover:bg-primary/10 transition-all flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;