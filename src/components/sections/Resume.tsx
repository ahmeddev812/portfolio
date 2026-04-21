'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const experience = [
  {
    id: 'exp1',
    year: '2022-Present',
    title: 'Senior Web Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading development of responsive web applications and mentoring junior developers. Architected multiple high-traffic applications.',
    skills: ['Next.js', 'TypeScript', 'Team Leadership'],
  },
  {
    id: 'exp2',
    year: '2020-2022',
    title: 'Frontend Developer',
    company: 'Digital Creative Agency',
    description: 'Developed interactive websites and implemented UI/UX designs for diverse clients across multiple industries.',
    skills: ['React', 'Tailwind', 'Framer Motion'],
  },
];

const education = [
  {
    id: 'edu1',
    year: '2018-2022',
    title: 'Bachelor of Computer Science',
    institution: 'University of Technology',
    description: 'Graduated with honors, specializing in web technologies and software engineering.',
  },
  {
    id: 'edu2',
    year: '2020-2021',
    title: 'UX Design Certification',
    institution: 'Interaction Design Foundation',
    description: 'Completed advanced courses in user research, prototyping, and design thinking.',
  },
];

const TimelineItem = ({ item, type, index }: { item: any; type: 'experience' | 'education'; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/20 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary to-cyan-500 text-white">
              {item.year}
            </span>
            {type === 'experience' ? (
              <Briefcase className="w-4 h-4 text-primary" />
            ) : (
              <GraduationCap className="w-4 h-4 text-primary" />
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-primary font-medium mb-2">{item.company || item.institution}</p>
          <p className="text-muted-foreground text-sm mb-3">{item.description}</p>

          {item.skills && (
            <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
              {item.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-cyan-500 z-10">
        {type === 'experience' ? (
          <Briefcase className="w-5 h-5 text-white" />
        ) : (
          <GraduationCap className="w-5 h-5 text-white" />
        )}
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const Resume = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
        </motion.div>

        <div className="space-y-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6 text-primary" />
              Experience
            </motion.h3>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />
              
              <div className="space-y-12">
                {experience.map((item, index) => (
                  <TimelineItem key={item.id} item={item} type="experience" index={index} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </motion.h3>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />
              
              <div className="space-y-12">
                {education.map((item, index) => (
                  <TimelineItem key={item.id} item={item} type="education" index={index + 2} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;