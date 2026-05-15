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
    color: "from-primary/20 to-accent/20"
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Strategic Consultancy",
    description: "Navigate the complex landscape of AI and modern engineering with senior-level strategic guidance. We audit your current stack and design 12-24 month digital roadmaps to ensure your technology is an asset, not a liability.",
    tags: ["Tech Audit", "AI Roadmap", "Digital Strategy"],
    color: "from-accent/20 to-primary/20"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Neural Integrations",
    description: "Shift from manual oversight to automated intelligence by embedding custom neural cores into your systems. We build autonomous agents that execute high-level strategy while maintaining technical agility.",
    tags: ["LLM Ops", "Custom RAG", "Workflow Automation"],
    color: "from-primary/20 to-accent/20"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Digital Fortification",
    description: "Protect your intellectual property with rigorous audits and zero-trust architectural principles. We harden your digital systems against modern vulnerabilities before they become catastrophic failures.",
    tags: ["Cyber Audits", "Zero-Trust", "Security Engineering"],
    color: "from-accent/20 to-primary/20"
  }
];

const PROJECTS = [
  {
    title: "Cyber-Copilot",
    category: "Security System",
    code: "CYB-01",
    description: "An advanced security intelligence system leveraging LLMs to detect vulnerabilities and automate threat response.",
    link: "https://github.com/harshvortex/Cyber-copilot"
  },
  {
    title: "Quiz AI Engine",
    category: "EdTech Solution",
    code: "EDU-02",
    description: "A comprehensive assessment system that automates content generation and evaluation for enterprise learning.",
    link: "https://github.com/harshvortex/quiz-ai-platform"
  },
  {
    title: "VoiceSense Core",
    category: "Neural Audio System",
    code: "VSC-03",
    description: "A high-precision vocal data processing system designed for sentiment analysis and real-time transcription.",
    link: "https://github.com/harshvortex/voicesense"
  },
  {
    title: "Nexus ERP",
    category: "Enterprise System",
    code: "NEX-04",
    description: "A next-generation resource planning system with real-time supply chain intelligence and predictive analytics.",
    link: "#"
  },
  {
    title: "Aura Health",
    category: "Digital Health Core",
    code: "AUR-05",
    description: "A secure, HIPAA-compliant patient management system integrated with custom neural diagnostic tools.",
    link: "#"
  },
  {
    title: "Titan Ledger",
    category: "Fintech Solution",
    code: "TIT-06",
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
            
            <h1 className="text-[clamp(2.5rem,8vw,8rem)] md:text-[clamp(4rem,10vw,10rem)] font-sans font-black leading-[1] md:leading-[0.8] tracking-tighter mb-8 md:mb-12 uppercase text-gradient">
              Architecting <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">Digital Systems.</span>
            </h1>

            <p className="text-xl md:text-3xl text-foreground/50 max-w-2xl leading-relaxed font-light mb-12 tracking-tight">
              Codecyclon engineers high-integrity digital systems and strategic roadmaps for enterprises that demand <span className="text-foreground font-medium">architectural excellence</span> and <span className="text-foreground font-medium">strategic foresight</span>.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <a href="#contact">
                <Button className="h-14 md:h-16 px-8 md:px-10 bg-primary text-background hover:scale-105 transition-all rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 btn-sweep shadow-xl shadow-primary/20 dark:shadow-[0_4px_20px_rgba(56,189,248,0.25)]">
                   Get a Free Quote <ArrowRight size={18} />
                </Button>
              </a>
              <a href="#work">
                 <Button variant="outline" className="h-14 md:h-16 px-8 md:px-10 border-border text-foreground hover:bg-foreground/[0.02] dark:hover:bg-foreground/[0.05] transition-all rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center gap-3">
                   View Masterworks
                 </Button>
              </a>
              
              <div className="flex items-center gap-8 md:gap-12 pl-4 md:pl-8 border-l border-border mt-4 md:mt-0">
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
          <div className="w-full h-full border-[40px] border-primary rounded-full mix-blend-overlay filter blur-[100px]" />
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
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto flex flex-wrap justify-center lg:justify-between gap-6 md:gap-12">
          {[
            { icon: <ShieldCheck />, text: "ISO 27001 Certified" },
            { icon: <Zap />, text: "Real-time Latency Ops" },
            { icon: <Layers />, text: "Infinite Scalability" },
            { icon: <Rocket />, text: "Green Code Verified" }
          ].map((feat, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 group bg-background dark:bg-card-bg px-6 py-3 rounded-full border border-border shadow-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-700 shadow-sm">
                {feat.icon}
              </div>
              <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] text-foreground/60 group-hover:text-foreground transition-colors">{feat.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-40 px-6 md:px-10 max-w-[1400px] mx-auto border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Methodology</p>
          <h2 className="text-[clamp(2.5rem,5vw,6rem)] font-sans font-black leading-tight mb-8 uppercase tracking-tighter">
            How we <br /><span className="text-primary">Work.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { step: "01", title: "Discovery", desc: "Technical audit & strategy" },
            { step: "02", title: "Design", desc: "Architecture & UI/UX" },
            { step: "03", title: "Build", desc: "Engineering & integration" },
            { step: "04", title: "Launch", desc: "Deployment & QA" },
            { step: "05", title: "Support", desc: "Scaling & maintenance" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center group relative overflow-hidden flex flex-col items-center justify-center min-h-[240px]"
            >
              <div className="text-5xl font-black text-primary/10 mb-6 group-hover:text-primary transition-colors duration-500 absolute top-4 right-6">{item.step}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground uppercase tracking-wider mt-4">{item.title}</h3>
              <p className="text-sm text-foreground/50">{item.desc}</p>
            </motion.div>
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
              <div className="overflow-hidden rounded-[2.5rem] mb-10 aspect-[4/3] relative border border-border bg-gradient-to-br from-background via-foreground/[0.02] to-primary/5 shadow-xl transition-all duration-500 group-hover:shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
                <div className="text-4xl font-mono font-black text-foreground/10 group-hover:text-primary/20 transition-colors duration-500 z-10">{project.code}</div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                <div className="absolute bottom-6 left-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 z-30">
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
                  {['JD', 'AM', 'RK', 'SL'].map((initials, i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-background bg-foreground/[0.05] shadow-lg flex items-center justify-center overflow-hidden relative group cursor-pointer">
                       <span className="text-sm font-bold text-foreground/60 group-hover:text-primary transition-colors">{initials}</span>
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
                Ready to architect the digital future? We reply within <span className="text-foreground/80 font-medium">24 hours</span>.
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
            <Button className="w-full h-24 bg-primary text-background font-bold uppercase tracking-[0.4em] text-sm hover:scale-[1.02] transition-all rounded-3xl flex items-center gap-6 justify-center btn-sweep shadow-xl shadow-primary/20 dark:shadow-[0_4px_20px_rgba(56,189,248,0.25)]">
              Send Message <Rocket size={24} />
            </Button>
            <p className="text-center text-[10px] uppercase tracking-widest text-foreground/40 mt-6 flex items-center justify-center gap-2">
              <ShieldCheck size={14} /> No spam. No sharing.
            </p>
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
      
      {/* Floating Buttons */}
      <div className="fixed bottom-10 right-6 md:right-10 flex flex-col gap-4 z-[100]">
        <motion.a 
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group relative border border-white/20"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        </motion.a>
        
        <motion.button 
          onClick={() => setIsBotOpen(!isBotOpen)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-primary text-background rounded-full shadow-[0_20px_50px_rgba(14,165,233,0.4)] flex items-center justify-center overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {isBotOpen ? <X size={28} className="relative z-10 md:w-8 md:h-8" /> : <Bot size={28} className="relative z-10 md:w-8 md:h-8" />}
        </motion.button>
      </div>
    </div>
  );
}



