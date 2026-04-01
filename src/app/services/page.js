'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  { icon: '🌐', title: 'Custom Websites', desc: 'Bespoke, hand-crafted websites built from scratch. Every pixel is intentional, every interaction is smooth, every page converts.', features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Analytics'], color: 'var(--primary)' },
  { icon: '📄', title: 'Landing Pages', desc: 'High-converting landing pages engineered for maximum lead generation and campaign ROI. A/B tested and conversion-optimized.', features: ['A/B Testing Ready', 'Lead Capture', 'Fast Load', 'Analytics'], color: 'var(--secondary)' },
  { icon: '🛒', title: 'E-commerce', desc: 'Powerful online stores with seamless checkout flows, inventory systems, payment gateways, and subscription management.', features: ['Payment Integration', 'Inventory Mgmt', 'Subscription Billing', 'Admin Dashboard'], color: 'var(--accent)' },
  { icon: '⚙️', title: 'Web Platforms', desc: 'Complex SaaS applications and internal tools built with scalable architecture, real-time features, and robust APIs.', features: ['Real-time Features', 'API Development', 'User Auth', 'Cloud Deploy'], color: 'var(--primary)' },
];

const process = [
  { num: '01', title: 'Discovery Call', desc: 'We learn everything about your business, goals, and target audience.', duration: '1-2 days' },
  { num: '02', title: 'Strategy & Design', desc: 'We create wireframes, mockups, and an interactive prototype for your review.', duration: '3-5 days' },
  { num: '03', title: 'Development Sprint', desc: 'We build with clean, performant, well-documented code. Weekly demos included.', duration: '1-4 weeks' },
  { num: '04', title: 'Launch & Optimize', desc: 'We deploy, monitor Core Web Vitals, and provide ongoing maintenance.', duration: 'Ongoing' },
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
          <h1 className="reveal-element" style={{ marginBottom: '1rem' }}>Services built for <span style={{ color: 'var(--primary)' }}>results</span></h1>
          <p className="reveal-element" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto' }}>
            Everything you need to build, launch, and scale your online presence.
          </p>
        </div>
      </section>

      {/* Services Detail Cards */}
      <section className="container" style={{ paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {services.map((s, i) => (
            <div key={i} className="glass card-3d reveal-element" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>{s.desc}</p>
                <Link href="/contact" className="btn-ghost" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Get a Quote →</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {s.features.map((f, j) => (
                  <div key={j} style={{ background: 'var(--surface-2)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
                    <span style={{ color: s.color, marginRight: '0.4rem' }}>✓</span> {f}
                  </div>
                ))}
              </div>
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
              <div key={i} className="reveal-element" style={{ padding: '2rem', background: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', position: 'relative' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.15 }}>{p.num}</span>
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
