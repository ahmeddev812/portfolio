'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'E-commerce Sample Store',
    description: 'A complete e-commerce platform with product catalog, shopping cart, and checkout.',
    category: 'E-Commerce',
    techStack: ['React', 'Next.js', 'Tailwind'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: '2',
    title: 'ShopGrid Marketplace',
    description: 'Multi-vendor e-commerce platform with advanced product filtering.',
    category: 'E-Commerce',
    techStack: ['Next.js', 'TypeScript', 'Node.js'],
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    id: '3',
    title: 'Meezan Bank',
    description: 'Banking interface prototype with account management and financial dashboard.',
    category: 'Banking',
    techStack: ['React', 'Framer Motion', 'Chart.js'],
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    id: '4',
    title: 'E-book Focused Portfolio',
    description: 'Portfolio specifically designed for showcasing e-book projects.',
    category: 'Portfolio',
    techStack: ['Next.js', 'Tailwind', 'GSAP'],
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    id: '5',
    title: 'SolPlant Energy Platform',
    description: 'Solar energy company website with service catalog and calculator.',
    category: 'Energy',
    techStack: ['React', 'Styled Components', 'Leaflet'],
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    id: '6',
    title: 'Freelance Portfolio',
    description: 'Primary professional portfolio showcasing skills and projects.',
    category: 'Portfolio',
    techStack: ['Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    id: '7',
    title: 'Comic Book Website',
    description: 'Interactive comic book platform with digital reading experience.',
    category: 'Entertainment',
    techStack: ['Next.js', 'Three.js', 'Framer Motion'],
    gradient: 'from-red-500 to-rose-400',
  },
  {
    id: '8',
    title: 'Sapphire Design Framework',
    description: 'Custom design system and component library.',
    category: 'Development',
    techStack: ['React', 'TypeScript', 'Storybook'],
    gradient: 'from-indigo-500 to-blue-400',
  },
  {
    id: '9',
    title: 'JS-Engineers Platform',
    description: 'Developer community website with tutorials and tools.',
    category: 'Development',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma'],
    gradient: 'from-cyan-500 to-sky-400',
  },
];

const categories = ['All', 'E-Commerce', 'Banking', 'Portfolio', 'Energy', 'Entertainment', 'Development'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best projects across various industries and domains
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="group/btn flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;