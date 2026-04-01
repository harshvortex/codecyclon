'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  { title: 'TechFlow Dashboard', cat: 'Web Apps', desc: 'A comprehensive analytics dashboard for a SaaS startup. Real-time data, custom charts, role-based access.', tech: ['React', 'Node.js', 'D3.js'], color: 'var(--primary)' },
  { title: 'GreenLeaf Organics', cat: 'E-commerce', desc: 'An organic food store with subscription boxes, Stripe integration, and automated inventory.', tech: ['Next.js', 'Stripe', 'Sanity'], color: 'var(--accent)' },
  { title: 'Atlas Consulting', cat: 'Websites', desc: 'Corporate website for a management consulting firm. Clean, authoritative, high-converting.', tech: ['Next.js', 'Vercel'], color: 'var(--secondary)' },
  { title: 'LaunchPad Startup', cat: 'Landing Pages', desc: 'A high-converting product launch page. 12% conversion rate in the first week live.', tech: ['React', 'Framer Motion'], color: 'var(--primary)' },
  { title: 'CloudSync Platform', cat: 'Web Apps', desc: 'A cloud file management platform with real-time collaboration and sharing features.', tech: ['React', 'WebSockets', 'AWS'], color: 'var(--accent)' },
  { title: 'Urban Eats', cat: 'E-commerce', desc: 'Food delivery marketplace connecting local restaurants with 10k+ monthly orders.', tech: ['Next.js', 'Stripe', 'Maps'], color: 'var(--secondary)' },
];

const filters = ['All', 'Websites', 'Landing Pages', 'E-commerce', 'Web Apps'];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  useScrollReveal();

  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <div>
      <div className="gradient-bg"></div>

      <section style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="dot-pattern"></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="badge reveal-element" style={{ marginBottom: '1rem' }}>PORTFOLIO</div>
          <h1 className="reveal-element" style={{ marginBottom: '1rem' }}>Our <span style={{ color: 'var(--primary)' }}>Work</span></h1>
          <p className="reveal-element" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
            Real projects, real results. See what we&apos;ve built.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '5rem' }}>
        {/* Filter Bar */}
        <div className="reveal-element" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: '0.5rem 1.2rem', borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', border: 'none',
              fontFamily: 'inherit', transition: 'all var(--transition)',
              background: active === f ? 'var(--primary)' : 'var(--surface-2)',
              color: active === f ? '#000' : 'var(--text-secondary)',
              boxShadow: active === f ? '0 4px 15px rgba(0,212,255,0.3)' : 'none',
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((p, i) => (
            <div key={`${p.title}-${i}`} className="glass card-3d reveal-element" style={{ overflow: 'hidden', cursor: 'default' }}>
              {/* Thumbnail */}
              <div style={{ height: '200px', background: `linear-gradient(135deg, var(--surface-3), var(--surface-2))`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="orb" style={{ width: '150px', height: '150px', background: `${p.color}20` }}></div>
                <span style={{ fontSize: '3rem', opacity: 0.15, position: 'relative', zIndex: 1 }}>🖥️</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge">{p.cat}</span>
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', background: 'var(--surface-2)', color: 'var(--text-muted)', fontSize: '0.72rem', fontFamily: 'var(--mono)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="glass reveal-element" style={{ textAlign: 'center', padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div className="orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '400px', height: '400px', background: 'var(--primary-glow)' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ marginBottom: '1rem' }}>Like what you see?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Let&apos;s create something amazing for your business.</p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Start Your Project →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
