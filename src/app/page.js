'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TECH_STACK = ['Next.js', 'React', 'React Native', 'Flutter', 'Node.js', 'TypeScript', 'Tailwind', 'Figma', 'Vercel', 'Stripe', 'Razorpay', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Google Ads'];
const CLIENTS = ['Startup Alpha', 'TechCorp', 'GreenLeaf', 'CloudSync', 'Atlas Group', 'Urban Eats', 'LaunchPad', 'FlowState'];

export default function Home() {
  useScrollReveal();

  return (
    <div>
      {/* Ambient Background */}
      <div className="gradient-bg"></div>

      {/* ═══ HERO ═══ */}
      <section style={heroStyle}>
        <div className="dot-pattern"></div>

        {/* Floating Orbs */}
        <div className="orb" style={{ top: '10%', left: '5%', width: '300px', height: '300px', background: 'var(--primary-glow)', animation: 'orbit 15s ease-in-out infinite' }}></div>
        <div className="orb" style={{ bottom: '10%', right: '8%', width: '250px', height: '250px', background: 'var(--secondary-glow)', animation: 'orbit 20s ease-in-out infinite reverse' }}></div>
        <div className="orb" style={{ top: '50%', left: '60%', width: '180px', height: '180px', background: 'var(--accent-glow)', animation: 'orbit 25s ease-in-out infinite' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge reveal-element" style={{ marginBottom: '1.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }}></span>
            Available for new projects
          </div>

          <h1 className="reveal-element" style={{ marginBottom: '1.5rem' }}>
            Websites. Apps. Growth.<br/>
            <span style={{ color: 'var(--primary)' }}>We Handle It All.</span>
          </h1>

          <p className="reveal-element" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 2.5rem', lineHeight: '1.75' }}>
            From custom websites and mobile apps to SEO, marketing, and ongoing maintenance — we build, launch, and grow your digital presence.
          </p>

          <div className="reveal-element" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>Let&apos;s Talk →</Link>
            <Link href="/portfolio" className="btn btn-outline">View Our Work</Link>
          </div>

          {/* Stats Row */}
          <div className="reveal-element" style={statsRow}>
            {[
              { value: '35+', label: 'Projects Delivered' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '<2 wk', label: 'Avg. Turnaround' },
              { value: '24/7', label: 'Support & Care' },
            ].map((s, i) => (
              <div key={i} style={statItem}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em' }}>{s.value}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENT MARQUEE ═══ */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} style={{ padding: '0 3rem', fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)', whiteSpace: 'nowrap', opacity: 0.5 }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US — Bento Grid ═══ */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge reveal-element" style={{ marginBottom: '1rem' }}>WHY US</div>
          <h2 className="reveal-element">We don&apos;t just build products.<br/><span style={{ color: 'var(--primary)' }}>We engineer growth.</span></h2>
        </div>

        <div style={bentoGrid}>
          {/* Large Card */}
          <div className="glass card-3d reveal-element" style={{ ...bentoCard, gridColumn: 'span 2', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div className="orb" style={{ top: '-30%', right: '-10%', width: '200px', height: '200px', background: 'var(--primary-glow)' }}></div>
            <div className="badge" style={{ marginBottom: '1.5rem' }}>FULL-STACK AGENCY</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', maxWidth: '450px' }}>Websites, Apps, Marketing & Maintenance — all under one roof</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', lineHeight: '1.7' }}>
              We handle the entire lifecycle — from design to development, marketing to maintenance. One team, zero handoff headaches.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div><span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>95+</span><br/><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Lighthouse Score</span></div>
              <div><span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>&lt;1s</span><br/><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>First Paint</span></div>
              <div><span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>7+</span><br/><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Services Offered</span></div>
            </div>
          </div>

          {/* Small Cards */}
          {[
            { icon: '📱', title: 'Apps & Websites', desc: 'Web, iOS, Android — we build it all with a single design language.', color: 'var(--primary)' },
            { icon: '📈', title: 'Marketing & SEO', desc: 'Organic growth, paid ads, social media — data-driven strategies.', color: 'var(--accent)' },
            { icon: '⚡', title: 'Rapid Delivery', desc: 'From concept to launch in weeks, not months. Agile sprints.', color: 'var(--secondary)' },
            { icon: '🛠️', title: 'Ongoing Maintenance', desc: 'Updates, monitoring, bug fixes, and performance tuning 24/7.', color: 'var(--primary)' },
          ].map((f, i) => (
            <div key={i} className="glass card-3d reveal-element" style={bentoCard}>
              <div style={{ ...iconBox, background: `${f.color}15`, color: f.color }}>{f.icon}</div>
              <h3 style={{ marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-alt)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="reveal-element" style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '2rem' }}>OUR TECH STACK</p>
          <div className="reveal-element" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {TECH_STACK.map(t => (
              <span key={t} style={techChip}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge reveal-element" style={{ marginBottom: '1rem' }}>PROCESS</div>
          <h2 className="reveal-element">Ship in 4 steps</h2>
        </div>

        <div style={stepsGrid}>
          {[
            { num: '01', title: 'Discovery', desc: 'Deep-dive into your business, audience, and goals. We map the entire digital strategy before writing a single line of code.', icon: '🔍' },
            { num: '02', title: 'Design', desc: 'Interactive prototypes and high-fidelity mockups. You see it, feel it, and approve it before development starts.', icon: '✏️' },
            { num: '03', title: 'Development', desc: 'Clean, performant, accessible code. Continuous demos so you see progress every sprint.', icon: '⚙️' },
            { num: '04', title: 'Launch & Scale', desc: 'We deploy, monitor performance, and provide ongoing support. Your success is our success.', icon: '🚀' },
          ].map((s, i) => (
            <div key={i} className="reveal-element" style={stepCard}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.2, fontFamily: 'var(--mono)' }}>{s.num}</span>
              <span style={{ fontSize: '1.8rem', margin: '1rem 0 0.5rem' }}>{s.icon}</span>
              <h3 style={{ marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.7' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="badge reveal-element" style={{ marginBottom: '1rem' }}>TESTIMONIALS</div>
            <h2 className="reveal-element">What our clients say</h2>
          </div>

          <div style={testimonialGrid}>
            {[
              { text: "Codecyclon delivered a stunning website that doubled our conversion rate in the first month. Their attention to detail is unmatched.", name: 'Sarah K.', role: 'CEO, LaunchPad', avatar: 'S' },
              { text: "The fastest turnaround I've ever experienced. They understood our brand immediately and built exactly what we needed. Incredible team.", name: 'James R.', role: 'CTO, TechFlow', avatar: 'J' },
              { text: "Our e-commerce platform handles 3x more traffic now with better performance scores. ROI on their work was visible within weeks.", name: 'Priya M.', role: 'Founder, GreenLeaf', avatar: 'P' },
            ].map((t, i) => (
              <div key={i} className="glass card-3d reveal-element" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={avatarStyle}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{t.name}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t.role}</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ marginTop: '1rem', color: 'var(--primary)', letterSpacing: '2px' }}>★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FREE AUDIT CTA ═══ */}
      <section className="section container">
        <div className="glass reveal-element" style={{ padding: '4rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div className="orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', background: 'var(--primary-glow)' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ marginBottom: '0.75rem' }}>Get Your Free Website Audit</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Unlock the potential of your digital presence. Performance, SEO, and UX — analyzed by our engineers.
            </p>
            <form style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '450px', margin: '0 auto' }}>
              <input type="email" className="input-field" placeholder="Enter your work email" style={{ flex: 1, minWidth: '200px' }} />
              <button type="button" className="btn btn-primary">Claim Audit</button>
            </form>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '1rem' }}>Free, no commitment. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const heroStyle = {
  minHeight: '100vh', display: 'flex', alignItems: 'center',
  position: 'relative', overflow: 'hidden', paddingTop: '2rem',
};
const statsRow = {
  display: 'flex', gap: '0', justifyContent: 'center', flexWrap: 'wrap',
  background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
  border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)',
  padding: '1rem 0', maxWidth: '700px', margin: '0 auto',
};
const statItem = {
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  padding: '0.75rem 2rem',
  borderRight: '1px solid var(--border)',
  flex: 1, minWidth: '120px',
};
const bentoGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
  gap: '1rem',
};
const bentoCard = { padding: '2rem', cursor: 'default' };
const iconBox = {
  width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '1.3rem', marginBottom: '1.25rem',
};
const techChip = {
  padding: '0.5rem 1.1rem', borderRadius: 'var(--radius-full)',
  background: 'var(--surface-2)', color: 'var(--text-secondary)',
  fontSize: '0.85rem', fontWeight: 500, border: '1px solid var(--border)',
  transition: 'all var(--transition)',
};
const stepsGrid = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1.5rem',
};
const stepCard = {
  padding: '2rem', background: 'var(--surface-1)',
  borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)',
  transition: 'all var(--transition)',
};
const testimonialGrid = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
};
const avatarStyle = {
  width: '40px', height: '40px', borderRadius: '50%',
  background: 'linear-gradient(135deg, var(--primary), var(--primary-dim))',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#000', fontWeight: 700, fontSize: '0.9rem',
};
