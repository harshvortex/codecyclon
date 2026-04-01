'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const plans = [
  { name: 'Starter', price: '$999', period: 'one-time', desc: 'Perfect for small businesses getting started online.',
    features: ['Custom Landing Page', 'Mobile Responsive', 'Basic SEO Setup', 'Contact Form Integration', '1 Round of Revisions', '7-day Delivery'],
    highlighted: false, cta: 'Get Started' },
  { name: 'Professional', price: '$2,499', period: 'one-time', desc: 'For growing businesses that need a full website.',
    features: ['Up to 5 Custom Pages', 'Mobile Responsive', 'Advanced SEO & Analytics', 'CMS Integration (Sanity/Strapi)', 'Social Media Links', '3 Rounds of Revisions', '14-day Delivery'],
    highlighted: true, cta: 'Get Started', badge: 'MOST POPULAR' },
  { name: 'Enterprise', price: '$4,999+', period: 'starting', desc: 'For businesses needing complex custom solutions.',
    features: ['Unlimited Pages', 'Custom Web Application', 'E-commerce / SaaS Features', 'Priority Support & SLA', 'Performance Optimization', 'Unlimited Revisions', 'Dedicated Project Manager'],
    highlighted: false, cta: 'Contact Us' },
];

const faqs = [
  { q: "What's included in every project?", a: "Every project includes responsive design, basic SEO optimization, cross-browser testing, performance benchmarking, and a 30-day post-launch support period." },
  { q: "How long does a typical project take?", a: "Landing pages: 1-2 weeks. Full websites: 2-4 weeks. Custom web apps: 1-3 months. We share a timeline during the discovery call." },
  { q: "Do you offer ongoing maintenance?", a: "Yes. We offer monthly care packages starting at $149/mo that include updates, security patches, backups, and content changes." },
  { q: "What technologies do you use?", a: "Next.js, React, Node.js, TypeScript, PostgreSQL, MongoDB, Stripe, Vercel, AWS. We choose the best tech for each project." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. Many clients start with Starter and upgrade to Professional as their business grows. We make the transition seamless." },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  useScrollReveal();

  return (
    <div>
      <div className="gradient-bg"></div>

      <section style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="dot-pattern"></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="badge reveal-element" style={{ marginBottom: '1rem' }}>PRICING</div>
          <h1 className="reveal-element" style={{ marginBottom: '1rem' }}>Simple, <span style={{ color: 'var(--primary)' }}>transparent</span> pricing</h1>
          <p className="reveal-element" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
            No hidden fees. No surprises. Pick a plan, or get a custom quote.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container" style={{ paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          {plans.map((p, i) => (
            <div key={i} className="glass card-3d reveal-element" style={{
              padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden',
              ...(p.highlighted ? { border: '1px solid var(--primary)', boxShadow: '0 0 40px rgba(0,212,255,0.12)' } : {}),
            }}>
              {p.badge && <div style={badgePos}>{p.badge}</div>}
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{p.name}</h3>
              <div style={{ marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em' }}>{p.price}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>{p.period}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: '1.6' }}>{p.desc}</p>
              <ul style={{ marginBottom: '2rem' }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ padding: '0.45rem 0', color: 'var(--text-secondary)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={p.highlighted ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge reveal-element" style={{ marginBottom: '1rem' }}>FAQ</div>
            <h2 className="reveal-element">Common Questions</h2>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} className="reveal-element" style={{
              background: 'var(--surface-1)', borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.5rem', marginBottom: '0.6rem', cursor: 'pointer',
              border: '1px solid var(--border)', transition: 'all var(--transition)',
            }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{faq.q}</span>
                <span style={{ color: 'var(--primary)', fontSize: '1.2rem', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none', flexShrink: 0, marginLeft: '1rem' }}>+</span>
              </div>
              <div style={{
                maxHeight: openFaq === i ? '200px' : '0', overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem', lineHeight: '1.7' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section container">
        <div className="glass reveal-element" style={{ textAlign: 'center', padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div className="orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '400px', height: '400px', background: 'var(--secondary-glow)' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ marginBottom: '1rem' }}>Not sure which plan fits?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Book a free 15-minute call. We&apos;ll figure it out together.</p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Schedule Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const badgePos = {
  position: 'absolute', top: '1rem', right: '1rem',
  background: 'var(--primary)', color: '#000',
  fontSize: '0.65rem', fontWeight: 700,
  padding: '0.3rem 0.7rem', borderRadius: 'var(--radius-full)',
  letterSpacing: '0.05em',
};
