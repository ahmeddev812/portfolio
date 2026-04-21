'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const SkillBar = ({ name, level, index }: SkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <CountUpNumber target={level} isInView={isInView} />
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-purple-500 to-cyan-500"
        />
      </div>
    </motion.div>
  );
};

const CountUpNumber = ({ target, isInView }: { target: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span className="text-primary font-bold">{count}%</span>;
};

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      name: 'Styling',
      skills: [
        { name: 'CSS3', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 78 },
      ],
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Figma', level: 85 },
        { name: 'Vercel', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, high-performance web applications
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6">Building the Future</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With years of experience in web development, I bring a diverse skill set that spans 
              the entire development stack. From crafting pixel-perfect user interfaces with React 
              and Next.js, to building robust backend systems with Node.js, I have the expertise 
              to bring your vision to life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines technical excellence with creative problem-solving, ensuring 
              every project not only meets but exceeds expectations. I stay current with the latest 
              technologies and best practices to deliver solutions that stand the test of time.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: 50, label: 'Projects' },
                { number: 30, label: 'Clients' },
                { number: 5, label: 'Years' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/5"
                >
                  <div className="text-3xl font-bold text-gradient">{stat.number}+</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {category.name}
                </h4>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={categoryIndex * 3 + skillIndex}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;