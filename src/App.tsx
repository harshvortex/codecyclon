import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  X,
  Plus,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Mail,
  Quote,
  Layers,
  Rocket,
  BarChart3,
  Zap,
  Sun,
  Moon,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AIConsultant from "@/src/components/AIConsultant";
import NeuralBackground from "@/src/components/NeuralBackground";
import SocialSidebar from "@/src/components/SocialSidebar";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "AI Strategist", href: "#ai-strategist" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Digital Solution Systems",
    description: "We don't just build apps; we architect end-to-end digital systems that solve core business friction. From custom ERPs to high-velocity consumer platforms, we engineer the backbone of your digital operation.",
    tags: ["Systems Architecture", "Full-Stack", "Scalability"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Strategic Consultancy",
    description: "Navigate the complex landscape of AI and modern engineering with senior-level strategic guidance. We audit your current stack and design 12-24 month digital roadmaps to ensure your technology is an asset, not a liability.",
    tags: ["Tech Audit", "AI Roadmap", "Digital Strategy"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Neural Integrations",
    description: "Shift from manual oversight to automated intelligence by embedding custom neural cores into your systems. We build autonomous agents that execute high-level strategy while maintaining technical agility.",
    tags: ["LLM Ops", "Custom RAG", "Workflow Automation"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Digital Fortification",
    description: "Protect your intellectual property with rigorous audits and zero-trust architectural principles. We harden your digital systems against modern vulnerabilities before they become catastrophic failures.",
    tags: ["Cyber Audits", "Zero-Trust", "Security Engineering"],
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

const PROJECTS = [
  {
    title: "Cyber-Copilot",
    category: "Security System",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "An advanced security intelligence system leveraging LLMs to detect vulnerabilities and automate threat response.",
    link: "https://github.com/harshvortex/Cyber-copilot"
  },
  {
    title: "Quiz AI Engine",
    category: "EdTech Solution",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive assessment system that automates content generation and evaluation for enterprise learning.",
    link: "https://github.com/harshvortex/quiz-ai-platform"
  },
  {
    title: "VoiceSense Core",
    category: "Neural Audio System",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    description: "A high-precision vocal data processing system designed for sentiment analysis and real-time transcription.",
    link: "https://github.com/harshvortex/voicesense"
  },
  {
    title: "Nexus ERP",
    category: "Enterprise System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "A next-generation resource planning system with real-time supply chain intelligence and predictive analytics.",
    link: "#"
  },
  {
    title: "Aura Health",
    category: "Digital Health Core",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "A secure, HIPAA-compliant patient management system integrated with custom neural diagnostic tools.",
    link: "#"
  },
  {
    title: "Titan Ledger",
    category: "Fintech Solution",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
    description: "A high-frequency distributed ledger system architected for ultra-low latency transaction processing.",
    link: "#"
  }
];

const REVIEWS = [
  { 
    name: "Marcus Thorne", 
    role: "CTO, Vector Payments", 
    text: "Codecyclon didn't just build our app; they architected our entire transaction system. Their strategic consultancy saved us months of rework by identifying structural flaws in our original roadmap." 
  },
  { 
    name: "Elena Vance", 
    role: "Founder, Scribble Learning", 
    text: "As a strategic partner, Codecyclon helped us transition from a legacy monolith to a high-performance system. Their guidance on AI integration was pivotal for our Series B round." 
  },
  { 
    name: "David Park", 
    role: "Head of Engineering, SwiftStream", 
    text: "Most partners hand off code. Codecyclon hands off a future. Their systems-first approach and deep consultancy expertise make them an essential extension of our leadership team." 
  }
];

const FAQ_DATA = [
  { 
    q: "How does your consultancy work?", 
    a: "We begin with a deep-dive technical audit of your current systems and business objectives. From there, we architect a solution system and a strategic roadmap, ensuring every line of code serves a high-level business goal." 
  },
  { 
    q: "Do you only build the software?", 
    a: "No. We provide the full spectrum: from high-level strategic consultancy to the final engineering of complex software systems. We are your partners in digital transformation, not just a dev shop." 
  },
  { 
    q: "What is the typical investment for a system solution?", 
    a: "Our system-level solutions typically start at $15k, reflecting the deep architectural work and strategic consultancy involved. We build assets that generate long-term value, not just short-term tools." 
  },
  { 
    q: "Can we hire you for strategy only?", 
    a: "Yes. Many enterprises engage Arch and our senior architects for high-level strategy and system design before moving into the implementation phase." 
  },
  { 
    q: "Who owns the intellectual property?", 
    a: "You do. Every system we architect and every roadmap we design becomes your intellectual property. We build the fortress; you hold the keys." 
  }
];


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [role='button'], input, textarea"));
    };
    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.classList.add("custom-cursor-active");
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [isMobile]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden font-sans relative selection:bg-primary/20">
      <div className="bg-grid" />
      <div className="grain-overlay" />
      
      {/* Custom Cursor */}
      {!isMobile && (
        <>
          <motion.div 
            className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[99999]"
            animate={{ 
              x: mousePos.x - 4, 
              y: mousePos.y - 4,
              scale: isHovering ? 0 : 1
            }}
            transition={{ type: "spring", damping: 30, stiffness: 600, mass: 0.2 }}
          />
          <motion.div 
            className="fixed w-12 h-12 border border-primary/30 rounded-full pointer-events-none z-[99998]"
            animate={{ 
              x: mousePos.x - 24, 
              y: mousePos.y - 24,
              scale: isHovering ? 2 : 1,
              backgroundColor: isHovering ? "var(--primary-glow)" : "transparent",
              borderColor: isHovering ? "var(--primary)" : "var(--primary-glow)"
            }}
            transition={{ type: "spring", damping: 35, stiffness: 300, mass: 0.4 }}
          />
        </>
      )}

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* TopNavBar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? "bg-background/80 backdrop-blur-xl border-border py-4" : "bg-transparent border-transparent py-8"}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="font-sans text-2xl font-black tracking-tighter hover:tracking-normal transition-all duration-700 flex items-center gap-2 group">
              <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-background text-sm group-hover:rotate-[360deg] transition-transform duration-1000 shadow-lg shadow-primary/20">C</span>
              Codecyclon
            </a>
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  whileHover={{ y: -2 }}
                  className="text-[11px] uppercase tracking-[0.3em] font-bold text-foreground/50 hover:text-primary transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
              className="p-3 border border-border rounded-2xl hover:bg-foreground/5 transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {themeMode === "dark" ? <Sun size={18} className="text-primary" /> : <Moon size={18} className="text-primary" />}
            </motion.button>
            <div className="hidden xl:flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-primary font-black">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_var(--primary)]" />
              Status: Available
            </div>
            <a href="#contact" className="hidden sm:block">
              <Button className="bg-primary text-background px-8 h-12 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:shadow-xl hover:shadow-primary/20 transition-all btn-sweep border border-primary/20">
                Initiate Strategy
              </Button>
            </a>
            <button className="lg:hidden p-2 text-foreground/60 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-12 lg:hidden"
          >
            <button className="absolute top-8 right-8 p-2 text-foreground/60 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-sans font-black uppercase tracking-tighter text-foreground hover:text-primary transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="bg-primary text-background px-12 h-16 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20" onClick={() => setIsMenuOpen(false)}>
                Start Project
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 overflow-hidden pt-20">
        <NeuralBackground />
        <div className="kinetic-glow" />
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-8"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              The Architectural Standard
            </motion.div>
            
            <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-sans font-black leading-[0.8] tracking-tighter mb-12 uppercase text-gradient">
              Architecting <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">Digital Systems.</span>
            </h1>

            <p className="text-xl md:text-3xl text-foreground/50 max-w-2xl leading-relaxed font-light mb-12 tracking-tight">
              Codecyclon engineers high-integrity digital systems and strategic roadmaps for enterprises that demand <span className="text-foreground font-medium">architectural excellence</span> and <span className="text-foreground font-medium">strategic foresight</span>.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <a href="#contact">
                <Button className="h-16 px-10 bg-primary text-background hover:scale-105 transition-all rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 btn-sweep shadow-xl shadow-primary/20">
                   Initiate Strategy <ArrowRight size={18} />
                </Button>
              </a>
              
              <div className="flex items-center gap-12 pl-8 border-l border-border">
                <div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-sans font-bold text-primary"
                  >
                    140+
                  </motion.div>
                  <div className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold">Solutions Shipped</div>
                </div>
                <div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-sans font-bold text-primary"
                  >
                    $200M+
                  </motion.div>
                  <div className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold">Client Value Created</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Parallax Image Simulation */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-2/3 h-full opacity-[0.03] dark:opacity-[0.07] pointer-events-none hidden lg:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-contain mix-blend-screen" 
            alt="Kinetic interaction" 
          />
        </motion.div>
      </section>

      {/* Tech Marquee */}
      <section className="py-24 bg-foreground/[0.02] border-y border-border overflow-hidden">
        <div className="marquee-track flex gap-24 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center shrink-0">
              {["CONSULTANCY", "STRATEGY", "SYSTEMS", "ARCHITECTURE", "AI OPS", "SOLUTIONS", "ENTERPRISE", "NEURAL"].map(tech => (
                <span key={tech} className="text-5xl md:text-8xl font-sans font-black opacity-[0.05] hover:opacity-100 hover:text-primary transition-all duration-500 cursor-default tracking-tighter">
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>


      {/* Manifesto / About Section */}
      <section id="about" className="py-40 px-6 md:px-10 max-w-[1400px] mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8">The Ethos</p>
          <h2 className="text-[clamp(2.5rem,5vw,6rem)] font-sans font-black leading-tight mb-12 uppercase tracking-tighter">
            We don't just build code. <br />
            <span className="text-primary">We architect futures.</span>
          </h2>
          <p className="text-xl md:text-3xl text-foreground/40 font-light leading-relaxed max-w-2xl mx-auto tracking-tight">
            Codecyclon is a strategic engineering partner. We operate at the intersection of <span className="text-foreground/80 font-medium">high-level consultancy</span> and <span className="text-foreground/80 font-medium">complex system architecture</span>.
          </p>
        </motion.div>
      </section>

      {/* Capabilities (Glass Bento Grid) */}
      <section id="services" className="py-20 px-6 md:px-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="glass-card p-10 group relative"
              >
                <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform duration-700 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-sans font-black mb-6 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">{service.title}</h3>
                  <p className="text-xl text-foreground/50 font-light leading-relaxed mb-10 tracking-tight">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-widest border-border text-foreground/40 bg-foreground/[0.02] px-3 py-1">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Feature Strip */}
      <section className="py-24 border-y border-border bg-foreground/[0.01]">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto flex flex-wrap justify-center lg:justify-between gap-12">
          {[
            { icon: <ShieldCheck />, text: "ISO 27001 Certified" },
            { icon: <Zap />, text: "Real-time Latency Ops" },
            { icon: <Layers />, text: "Infinite Scalability" },
            { icon: <Rocket />, text: "Green Code Verified" }
          ].map((feat, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-700 shadow-sm">
                {feat.icon}
              </div>
              <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-foreground/40 group-hover:text-foreground transition-colors">{feat.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-40 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <h2 className="text-[clamp(2.5rem,5vw,6rem)] font-sans font-bold leading-tight uppercase tracking-tighter">
            Selected <br /><span className="text-primary font-black">Masterworks.</span>
          </h2>
          <a href="#" className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] border-b border-primary pb-2 group hover:pr-8 transition-all duration-500">
            View All Systems
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="overflow-hidden rounded-[2.5rem] mb-10 aspect-[4/3] relative border border-border bg-foreground/[0.02] shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-6 left-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100">
                  <Badge className="bg-primary text-background uppercase tracking-widest text-[9px] px-3 py-1 shadow-xl">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-sans font-black mb-4 group-hover:text-primary transition-colors duration-500 uppercase tracking-tighter">{project.title}</h3>
              <p className="text-lg text-foreground/40 font-light leading-relaxed mb-6 line-clamp-2 tracking-tight">{project.description}</p>
              <a href={project.link} className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary group-hover:gap-6 transition-all duration-700">
                Explore Architecture <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Strategist Chat */}
      <section id="ai-strategist" className="py-40 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="glass-card rounded-[3.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 md:p-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[clamp(2.5rem,4vw,5rem)] font-sans font-black leading-[1] mb-10 uppercase text-gradient tracking-tighter">
                Consult with <br /><span className="text-primary">Arch.</span>
              </h2>
              <p className="text-xl text-foreground/50 font-light leading-relaxed mb-12">
                Arch is our proprietary AI Strategist, trained on over <span className="text-foreground/80 font-medium">50,000 hours</span> of engineering data to help you scope your project in real-time.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-background bg-foreground/[0.05] shadow-lg flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Founder" className="w-full h-full object-cover grayscale" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                   <span className="text-xl font-sans font-bold text-primary">400+</span>
                   <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-foreground/40">Founders Scoped</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="bg-foreground/[0.03] border-l border-border relative p-4 md:p-8">
            <AIConsultant />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-40 px-6 md:px-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Inquiries</p>
          <h2 className="text-[clamp(2.5rem,5vw,6rem)] font-sans font-black leading-tight mb-8 uppercase tracking-tighter">
            Frequent <br /><span className="text-primary">Inquiries.</span>
          </h2>
        </motion.div>
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_DATA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem value={`item-${i}`} className="glass-card border-border rounded-3xl px-8 hover:bg-foreground/[0.02] transition-all duration-500">
                  <AccordionTrigger className="text-xl md:text-2xl font-sans font-bold py-10 hover:no-underline text-foreground text-left group/trigger">
                    <div className="flex items-center justify-between w-full pr-4">
                      <span className="group-hover/trigger:text-primary transition-colors duration-500 tracking-tight">{item.q}</span>
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-data-[state=open]:rotate-[135deg] transition-transform duration-700 shadow-inner">
                        <Plus size={24} />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg md:text-xl text-foreground/40 font-light leading-relaxed pb-12 pt-4 border-t border-border px-2 tracking-tight">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[clamp(2.5rem,5vw,6rem)] font-sans font-black leading-tight mb-10 uppercase tracking-tighter">
                Initiate <br /><span className="text-primary">Sequence.</span>
              </h2>
              <p className="text-xl text-foreground/40 font-light leading-relaxed mb-16 max-w-md tracking-tight">
                Ready to architect the digital future? Our team responds within <span className="text-foreground/80 font-medium">12 standard business hours</span>.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-foreground/[0.03] border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-700 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div className="group-hover:translate-x-3 transition-transform duration-700">
                    <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-foreground/20 mb-2">Direct Channel</div>
                    <a href="mailto:hq@codecyclon.com" className="text-2xl md:text-3xl font-sans font-bold text-foreground hover:text-primary transition-colors">hq@codecyclon.com</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-20">
                {[Linkedin, Instagram, Twitter, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-16 h-16 rounded-2xl bg-foreground/[0.03] border border-border flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-700 text-foreground/20 hover:scale-110 shadow-sm">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 bg-white dark:bg-foreground/[0.03] p-8 md:p-16 rounded-[4rem] border-2 border-primary/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] dark:shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <label className="text-[10px] uppercase font-bold tracking-[0.4em] text-foreground/40 ml-4">Identity</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="bg-transparent border-b border-border py-6 px-4 text-2xl font-light focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-foreground/20"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-[10px] uppercase font-bold tracking-[0.4em] text-foreground/40 ml-4">Email</label>
                <input 
                  type="email" 
                  placeholder="email@company.com" 
                  className="bg-transparent border-b border-border py-6 px-4 text-2xl font-light focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-foreground/20"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-[10px] uppercase font-bold tracking-[0.4em] text-foreground/40 ml-4">Project Brief</label>
              <textarea 
                placeholder="Tell us about the system you envision..." 
                rows={4}
                className="bg-transparent border-b border-border py-6 px-4 text-2xl font-light focus:outline-none focus:border-primary transition-colors resize-none text-foreground placeholder:text-foreground/20"
              />
            </div>
            <Button className="w-full h-24 bg-primary text-background font-bold uppercase tracking-[0.4em] text-sm hover:scale-[1.02] transition-all rounded-3xl flex items-center gap-6 justify-center btn-sweep shadow-2xl shadow-primary/30">
              Send Message <Rocket size={24} />
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground/[0.01]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-24">
            <div className="max-w-md">
              <a href="#" className="font-sans text-4xl font-black tracking-tighter text-primary mb-8 block">
                Codecyclon
              </a>
              <p className="text-2xl text-foreground/20 font-light italic leading-relaxed">
                Architecting digital futures for the elite. Based in India, shipping globally.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-24">
              <div>
                <h4 className="text-[11px] uppercase font-bold tracking-[0.4em] text-foreground/20 mb-10">Navigation</h4>
                <div className="flex flex-col gap-6">
                  {NAV_LINKS.map(link => (
                    <a key={link.name} href={link.href} className="text-lg font-sans font-medium text-foreground/40 hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[11px] uppercase font-bold tracking-[0.4em] text-foreground/20 mb-10">Studio</h4>
                <div className="flex flex-col gap-6 text-lg font-sans font-medium text-foreground/40">
                  <span>Dehradun, IN</span>
                  <span>Berlin, DE</span>
                  <span>Remote Ops</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-40 pt-16 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-10">
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-foreground/20">© 2026 CODECYCLON STUDIO</span>
            <div className="flex gap-12">
              <a href="#" className="text-[10px] uppercase font-bold tracking-[0.5em] text-foreground/20 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] uppercase font-bold tracking-[0.5em] text-foreground/20 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <SocialSidebar />
      
      {/* Bot Dialog */}
      <AnimatePresence mode="wait">
        {isBotOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            className="fixed bottom-32 right-6 md:right-10 z-[200] w-[min(95vw,480px)] h-[min(65vh,520px)] glass-card shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-primary/30 flex flex-col"
          >
            <div className="p-6 border-b border-border flex items-center justify-between bg-primary/10 backdrop-blur-3xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-background shadow-lg shadow-primary/20">
                  <Bot size={24} />
                </div>
                <div>
                  <div className="font-sans font-black text-foreground uppercase tracking-tight">Arch Intelligence</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-primary font-black flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    Online & Analyzing
                  </div>
                </div>
              </div>
              <button onClick={() => setIsBotOpen(false)} className="w-10 h-10 flex items-center justify-center hover:bg-foreground/5 rounded-2xl transition-all">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 bg-background/20">
               <AIConsultant />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating AI Bubble */}
      <motion.button 
        onClick={() => setIsBotOpen(!isBotOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-10 right-10 w-20 h-20 bg-primary text-background rounded-full z-[100] shadow-[0_20px_50px_rgba(14,165,233,0.4)] flex items-center justify-center overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isBotOpen ? <X size={32} className="relative z-10" /> : <Bot size={32} className="relative z-10" />}
      </motion.button>
    </div>
  );
}



