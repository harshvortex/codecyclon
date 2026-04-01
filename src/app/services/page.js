'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  { icon: '🌐', title: 'Custom Websites', desc: 'Bespoke, hand-crafted websites built from scratch. Every pixel is intentional, every interaction is smooth, every page converts visitors into customers.', features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Analytics Dashboard'], color: 'var(--primary)' },
  { icon: '📱', title: 'App Development', desc: 'Native and cross-platform mobile apps for iOS and Android. From MVPs to full-scale products — smooth UX, fast performance, and reliable backends.', features: ['iOS & Android', 'Cross-Platform (Flutter/RN)', 'Backend & APIs', 'App Store Publishing'], color: 'var(--secondary)' },
  { icon: '📄', title: 'Landing Pages', desc: 'High-converting landing pages engineered for maximum lead generation and campaign ROI. A/B tested and conversion-optimized from day one.', features: ['A/B Testing Ready', 'Lead Capture Forms', 'Blazing Fast', 'Conversion Tracking'], color: 'var(--accent)' },
  { icon: '🛒', title: 'E-commerce', desc: 'Powerful online stores with seamless checkout flows, inventory systems, payment gateways, and subscription management built for scale.', features: ['Payment Integration', 'Inventory Mgmt', 'Subscription Billing', 'Admin Dashboard'], color: 'var(--primary)' },
  { icon: '⚙️', title: 'Web Platforms & SaaS', desc: 'Complex SaaS applications and internal tools built with scalable architecture, real-time features, robust APIs, and enterprise-grade security.', features: ['Real-time Features', 'API Development', 'User Auth & Roles', 'Cloud Deployment'], color: 'var(--secondary)' },
  { icon: '📈', title: 'Marketing & SEO', desc: 'Data-driven digital marketing strategies. We handle your SEO, social media, content marketing, and paid campaigns to drive organic growth.', features: ['On-Page & Off-Page SEO', 'Social Media Mgmt', 'Google Ads & Meta Ads', 'Content Strategy'], color: 'var(--accent)' },
  { icon: '🛠️', title: 'Maintenance & Support', desc: 'Keep your digital products running smoothly. Bug fixes, performance tuning, security patches, content updates, and 24/7 monitoring — we handle it all.', features: ['Bug Fixes & Updates', 'Performance Tuning', 'Security Patches', 'Uptime Monitoring'], color: 'var(--primary)' },
];

const process = [
  { num: '01', title: 'Discovery Call', desc: 'We learn everything about your business, goals, audience, and competitors. No fluff — just strategy.', duration: '1-2 days' },
  { num: '02', title: 'Strategy & Design', desc: 'We create wireframes, mockups, and an interactive prototype. You see it and approve it before a single line of code.', duration: '3-7 days' },
  { num: '03', title: 'Development Sprint', desc: 'We build with clean, performant, well-documented code. Weekly demos so you see progress every step.', duration: '1-6 weeks' },
  { num: '04', title: 'Launch & Scale', desc: 'We deploy, monitor Core Web Vitals, set up analytics, and provide ongoing maintenance and marketing support.', duration: 'Ongoing' },
];

export default function ServicesPage() {
  useScrollReveal();

  return (
    <div>
      <div className="gradient-bg"></div>

      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="dot-pattern"></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="badge reveal-element" style={{ marginBottom: '1rem' }}>WHAT WE DO</div>
          <h1 className="reveal-element" style={{ marginBottom: '1rem' }}>Build. Launch. <span style={{ color: 'var(--primary)' }}>Grow.</span></h1>
          <p className="reveal-element" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            From websites and apps to marketing and maintenance — everything you need to dominate your digital presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container" style={{ paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {services.map((s, i) => (
            <div key={i} className="glass card-3d reveal-element" style={{ padding: '2.5rem 2rem', cursor: 'default', display: 'flex', flexDirection: 'column' }}>
              <div style={{ ...iconBox, background: `${s.color}15`, color: s.color }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem', flex: 1 }}>{s.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {s.features.map((f, j) => (
                  <div key={j} style={{ background: 'var(--surface-2)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
                    <span style={{ color: s.color, marginRight: '0.3rem' }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>Get a Quote →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="badge reveal-element" style={{ marginBottom: '1rem' }}>OUR PROCESS</div>
            <h2 className="reveal-element">From idea to launch, <span style={{ color: 'var(--primary)' }}>simplified</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {process.map((p, i) => (
              <div key={i} className="reveal-element" style={{ padding: '2rem', background: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.15 }}>{p.num}</span>
                <h3 style={{ margin: '1rem 0 0.5rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.7', marginBottom: '1rem' }}>{p.desc}</p>
                <span className="badge" style={{ fontSize: '0.7rem' }}>{p.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section container">
        <div className="glass reveal-element" style={{ textAlign: 'center', padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div className="orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '400px', height: '400px', background: 'var(--primary-glow)' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ marginBottom: '1rem' }}>Have a project in mind?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Let&apos;s discuss how we can bring your vision to life.</p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Get Started →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const iconBox = {
  width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '1.4rem', marginBottom: '1.25rem',
};
