# Ahmed's Portfolio - Premium Developer Portfolio Specification

## 1. Concept & Vision

A **luxury, premium, forever portfolio** that sets a new standard for developer portfolios. This is not just a resume website—it's an immersive digital experience that showcases Ahmed's technical expertise, creative vision, and attention to detail. Every interaction should feel deliberate, every animation polished, every pixel considered. Think Apple product page meets high-end agency portfolio.

## 2. Design Language

### Aesthetic Direction
**Reference**: Apple.com meets Stripe.com meets Linear.app
- Dark mode by default with subtle gradients
- Glassmorphism elements with backdrop blur
- Sophisticated micro-animations (60fps)
- Premium typography with generous spacing
- 3D elements and depth through shadows/lighting

### Color Palette
```
Light Mode:
- Background: #FAFAFA (warm off-white)
- Foreground: #18181B (near black)
- Primary: #6366F1 (indigo)
- Primary Light: #818CF8
- Accent: #22D3EE (cyan)
- Muted: #71717A

Dark Mode:
- Background: #09090B (near black)
- Card: #18181B
- Foreground: #FAFAFA
- Primary: #818CF8 (light indigo)
- Primary Gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)
- Accent: #22D3EE (cyan)
- Muted: #71717A
- Border: rgba(255, 255, 255, 0.1)
```

### Typography
- **Headings**: Plus Jakarta Sans (700, 800) - geometric, modern, premium
- **Body**: Inter (400, 500) - clean, highly readable
- **Mono**: JetBrains Mono - for code snippets
- **Scale**: 
  - Hero: 72px / 80px (mobile: 48px)
  - H1: 56px
  - H2: 40px
  - H3: 28px
  - Body: 18px
  - Small: 14px

### Spatial System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Container max-width: 1400px
- Section padding: 96px vertical (mobile: 64px)
- Component padding: 24px / 32px

### Motion Philosophy
- **Duration**: 300ms (micro), 500ms (standard), 700ms (emphasis), 1000ms (dramatic)
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1) - smooth, slightly bouncy
- **Principles**:
  - Entrance: fade + slide up (20px)
  - Exit: fade + slide down (20px)
  - Hover: scale 1.02 + shadow lift
  - Click: scale 0.98 (spring back)
  - Stagger: 50ms between items

### Visual Assets
- **Icons**: Lucide React (consistent stroke width)
- **3D Elements**: Three.js with React Three Fiber
- **Images**: Next/Image with blur placeholder
- **Decorative**: Gradient orbs, noise texture (5% opacity), animated lines

## 3. Layout & Structure

### Page Architecture
1. **Sticky Header** (64px height, glassmorphism on scroll)
2. **Hero Section** (100vh - 2vh padding)
3. **Services Section** (min-height: 100vh)
4. **Projects Section** (min-height: 100vh)
5. **Resume Section** (min-height: 100vh)
6. **Skills Section** (min-height: 100vh)
7. **Testimonials Section** (min-height: 80vh)
8. **Contact Section** (min-height: 100vh)
9. **Footer Section** (fixed height)

### Responsive Strategy
- **Mobile**: < 768px (single column, simplified animations)
- **Tablet**: 768px - 1024px (2 columns where applicable)
- **Desktop**: > 1024px (full experience)
- **Large**: > 1400px (max-width container)

### Content Flow
- Vertical scroll with smooth momentum (Lenis)
- Parallax sections for depth
- Sticky elements during scroll
- Reading progress indicator at top

## 4. Features & Interactions

### Global Features
- **Custom Cursor**: Dot (8px) + Ring (40px) that scales on interactive elements
- **Smooth Scroll**: Lenis with 1.2s duration
- **Page Transitions**: Shared layout animations between routes
- **Noise Texture**: 3% opacity overlay for depth
- **Gradient Orbs**: 2 animated orbs following mouse
- **Back to Top**: Appears after 300px scroll
- **Reading Progress**: Thin bar at top showing scroll progress

### Navigation
- Transparent → Glassmorphism on scroll
- Logo with typing animation: "Ahmed"
- Desktop: Horizontal nav links + CTA button
- Mobile: Hamburger → Full-screen overlay with blur
- Theme toggle: Dark/Light/System

### Hero Section
- **Animated Text**: "Hi, I'm Ahmed" with shimmer gradient
- **Typing Animation**: Roles cycle every 3 seconds
- **Dynamic Taglines**: 3 rotating taglines
- **3D Element**: Floating geometric wireframe
- **Social Proof Bar**: Stats with counting animation
- **CTAs**: "View Work" (primary) + "Let's Talk" (secondary)
- **Scroll Indicator**: Animated mouse icon

### Services Section
- **3 Premium Cards** with:
  - 3D tilt effect on hover (max 10deg)
  - Animated gradient border (rotating)
  - Icon with draw-in animation
  - Hover reveals additional content
- **Services**:
  1. Web Development
  2. UI/UX Design
  3. Responsive Design

### Projects Section
- **Filter Tabs**: Category pills (All, E-Commerce, Banking, etc.)
- **Grid Layout**: 3 columns desktop, 2 tablet, 1 mobile
- **Project Cards**:
  - Image with zoom on hover
  - Category badge (color-coded)
  - Title + description
  - Tech stack icons
  - "View Case Study" button
- **9 Projects** included

### Resume Section
- **Vertical Timeline** (horizontal on desktop)
- **Alternating sides** for desktop
- **Timeline entries**:
  - Year badge
  - Title + Institution/Company
  - Description
  - Skills tags
- **2 Education + 2 Experience entries**

### Skills Section
- **Split Layout**: Description left, skills right
- **Animated Progress Bars**: Count up on scroll into view
- **Skill Categories**: Frontend, Styling, Backend, Tools
- **Alternative 3D View**: Optional sphere visualization

### Testimonials Section
- **Autoplay Carousel**: 5s interval, pauses on hover
- **3D Card Effect**: Subtle perspective transform
- **Navigation**: Dots + arrows
- **4 Testimonials** with avatar placeholders

### Contact Section
- **Split Layout**: Form left, info right
- **Form Fields**:
  - Name (required)
  - Email (required, validated)
  - Phone (optional)
  - Project Type (dropdown)
  - Budget Range (slider)
  - Message (required, textarea)
- **Real-time Validation**: Zod + React Hook Form
- **Info Panel**:
  - Email with copy button
  - Location
  - Availability
  - Social links
  - Calendly placeholder

### Footer
- **Newsletter Signup**: Email input + submit
- **Quick Links**: 3 columns
- **Social Media**: Icon row
- **Copyright**: "© 2024 Ahmed. Crafted with ❤️"

## 5. Component Inventory

### Button
- **Variants**: Primary, Secondary, Ghost, Outline
- **Sizes**: SM, MD, LG
- **States**: Default, Hover (lift + shadow), Active (scale down), Disabled (50% opacity), Loading (spinner)

### Card
- **Base**: Glass background, rounded-2xl, padding 24px
- **Hover**: Scale 1.02, shadow lift, border glow
- **Variants**: Project Card, Service Card, Testimonial Card

### Input
- **Base**: Glass background, rounded-lg, 48px height
- **States**: Default, Focus (ring), Error (red border), Disabled
- **With Icon**: Icon left or right

### Badge
- **Variants**: Default, Outline
- **Colors**: Primary, Success, Warning, Error
- **Sizes**: SM, MD

### Navigation
- **Desktop**: Horizontal links, 16px gap
- **Mobile**: Full-screen overlay
- **Logo**: Animated gradient text

### Timeline
- **Vertical**: Single column, centered line
- **Horizontal**: Multi-column for desktop
- **Entry**: Year, title, description, skills

### Progress Bar
- **Base**: Rounded-full, 8px height
- **Animated**: Width transition + gradient fill

### Modal
- **Backdrop**: Dark overlay with blur
- **Animation**: Scale + fade entrance
- **Close**: X button + click outside

### Toast
- **Variants**: Success, Error, Info, Warning
- **Position**: Bottom-right
- **Animation**: Slide in from right

## 6. Technical Approach

### Frontend Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animation**: Framer Motion 12+
- **3D**: Three.js + React Three Fiber
- **Scroll**: Lenis
- **Forms**: React Hook Form + Zod
- **State**: Zustand
- **Data Fetching**: TanStack Query
- **i18n**: next-intl (EN/AR)

### API Routes
```
POST /api/contact - Contact form submission
  - Rate limit: 5 requests/hour/IP
  - Validation: Zod schema
  - Response: Success/Error

POST /api/newsletter - Newsletter subscription
  - Storage: localStorage for demo
  - Response: Success/Already subscribed

GET /api/projects - Project data
  - Response: Array of projects

POST /api/analytics - Page view tracking
  - Storage: In-memory
```

### Performance Targets
- Lighthouse: 100/100 all categories
- Core Web Vitals: All green
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

### SEO Implementation
- Dynamic metadata per page
- JSON-LD structured data
- OpenGraph images (1200x630)
- Twitter Card meta
- robots.txt + sitemap.xml
- Canonical URLs

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Reduced motion preference
- Focus indicators

## 7. File Structure
```
src/
├── app/
│   ├── layout.tsx (Root layout with providers)
│   ├── page.tsx (Home page)
│   ├── globals.css (Global styles)
│   ├── not-found.tsx (404 page)
│   └── api/
│       ├── contact/route.ts
│       ├── newsletter/route.ts
│       ├── projects/route.ts
│       └── analytics/route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── shared/
│   │   ├── CustomCursor.tsx
│   │   ├── BackToTopButton.tsx
│   │   ├── ReadingProgressBar.tsx
│   │   ├── GradientOrbs.tsx
│   │   └── PageTransition.tsx
│   └── ui/ (shadcn components)
├── data/
│   └── index.ts
├── lib/
│   ├── utils.ts
│   └── animations.ts
├── types/
│   └── index.ts
└── hooks/
    ├── useScrollProgress.ts
    └── useInView.ts
```