import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Twitter, Github, Mail } from 'lucide-react';

const SocialSidebar = () => {
  const socials = [
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
    { icon: <Mail size={18} />, href: "mailto:hq@codecyclon.com", label: "Email" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4">
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
          whileHover={{ x: -8 }}
          className="w-12 h-12 bg-white/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-xl flex items-center justify-center rounded-xl text-foreground/40 hover:text-primary hover:border-primary/30 transition-all duration-300 group relative"
        >
          {social.icon}
          <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-primary text-background text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {social.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialSidebar;
