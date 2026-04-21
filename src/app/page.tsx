import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Resume from '@/components/sections/Resume';
import Skills from '@/components/sections/Skills';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Resume />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}