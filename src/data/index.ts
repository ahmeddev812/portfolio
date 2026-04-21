import { Project, Service, Experience, Education, Skill, Testimonial } from "@/types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    icon: "Code2",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance usability and create engaging experiences.",
    icon: "Palette",
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description: "Websites that look and function perfectly on all devices, from desktop to mobile.",
    icon: "Smartphone",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Sample Store",
    description: "A complete e-commerce platform with product catalog, shopping cart, and checkout.",
    category: "E-Commerce",
    image: "/projects/ecommerce.jpg",
    techStack: ["React", "Next.js", "Tailwind"],
    link: "#",
  },
  {
    id: "2",
    title: "ShopGrid Marketplace",
    description: "Multi-vendor e-commerce platform with advanced product filtering.",
    category: "E-Commerce",
    image: "/projects/shopgrid.jpg",
    techStack: ["Next.js", "TypeScript", "Node.js"],
    link: "#",
  },
  {
    id: "3",
    title: "Meezan Bank",
    description: "Banking interface prototype with account management and financial dashboard.",
    category: "Banking",
    image: "/projects/meezan.jpg",
    techStack: ["React", "Framer Motion", "Chart.js"],
    link: "#",
  },
  {
    id: "4",
    title: "E-book Focused Portfolio",
    description: "Portfolio specifically designed for showcasing e-book projects.",
    category: "Portfolio",
    image: "/projects/ebook.jpg",
    techStack: ["Next.js", "Tailwind", "GSAP"],
    link: "#",
  },
  {
    id: "5",
    title: "SolPlant Energy Platform",
    description: "Solar energy company website with service catalog and calculator.",
    category: "Energy",
    image: "/projects/solplant.jpg",
    techStack: ["React", "Styled Components", "Leaflet"],
    link: "#",
  },
  {
    id: "6",
    title: "Freelance Portfolio",
    description: "Primary professional portfolio showcasing skills and projects.",
    category: "Portfolio",
    image: "/projects/freelance.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    id: "7",
    title: "Comic Book Website",
    description: "Interactive comic book platform with digital reading experience.",
    category: "Entertainment",
    image: "/projects/comic.jpg",
    techStack: ["Next.js", "Three.js", "Framer Motion"],
    link: "#",
  },
  {
    id: "8",
    title: "Sapphire Design Framework",
    description: "Custom design system and component library.",
    category: "Development",
    image: "/projects/sapphire.jpg",
    techStack: ["React", "TypeScript", "Storybook"],
    link: "#",
  },
  {
    id: "9",
    title: "JS-Engineers Platform",
    description: "Developer community website with tutorials and tools.",
    category: "Development",
    image: "/projects/jsengineers.jpg",
    techStack: ["Next.js", "PostgreSQL", "Prisma"],
    link: "#",
  },
];

export const experience: Experience[] = [
  {
    id: "exp1",
    year: "2022-Present",
    title: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    description: "Leading development of responsive web applications and mentoring.",
    skills: ["Next.js", "TypeScript", "Team Leadership"],
  },
  {
    id: "exp2",
    year: "2020-2022",
    title: "Frontend Developer",
    company: "Digital Creative Agency",
    description: "Developed interactive websites and implemented UI/UX designs.",
    skills: ["React", "Tailwind", "Framer Motion"],
  },
];

export const education: Education[] = [
  {
    id: "edu1",
    year: "2018-2022",
    title: "Bachelor of Computer Science",
    institution: "University of Technology",
    description: "Graduated with honors, specializing in web technologies.",
  },
  {
    id: "edu2",
    year: "2020-2021",
    title: "UX Design Certification",
    institution: "Interaction Design Foundation",
    description: "Completed advanced courses in user research and prototyping.",
  },
];

export const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Styling" },
  { name: "CSS3", level: 90, category: "Styling" },
  { name: "HTML5", level: 95, category: "Styling" },
  { name: "Framer Motion", level: 85, category: "Styling" },
  { name: "Node.js", level: 82, category: "Backend" },
  { name: "Python", level: 78, category: "Backend" },
  { name: "Git", level: 88, category: "Tools" },
  { name: "Figma", level: 85, category: "Tools" },
  { name: "Vercel", level: 90, category: "Tools" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content: "Ahmed delivered an exceptional website that exceeded our expectations. His attention to detail and understanding of our brand was impressive.",
  },
  {
    id: "t2",
    name: "Michael Chen",
    role: "Product Manager, StartupXYZ",
    content: "Working with Ahmed was a pleasure. He transformed our complex requirements into a beautiful, user-friendly application that our customers love.",
  },
  {
    id: "t3",
    name: "Emma Rodriguez",
    role: "Creative Director, DesignStudio",
    content: "Ahmed's design expertise helped us rebrand our company with a fresh, modern identity that resonates with our target audience.",
  },
  {
    id: "t4",
    name: "David Wilson",
    role: "CEO, BusinessSolutions",
    content: "The website Ahmed developed for us has significantly improved our online presence and user engagement.",
  },
];
