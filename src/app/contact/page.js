'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', projectType: 'website', budget: '$1k-$3k', message: '' });
  const [status, setStatus] = useState(null);
  useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', projectType: 'website', budget: '$1k-$3k', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <div>
      <div className="gradient-bg"></div>

      <section style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="dot-pattern"></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="badge reveal-element" style={{ marginBottom: '1rem' }}>CONTACT</div>
          <h1 className="reveal-element" style={{ marginBottom: '1rem' }}>Let&apos;s <span style={{ color: 'var(--primary)' }}>talk</span></h1>
          <p className="reveal-element" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
            Ready to start your project? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          
          {/* Left: Info */}
          <div>
            <div className="glass reveal-element" style={{ padding: '2rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Contact Information</h3>
              {[
                { icon: '📧', label: 'Email', value: 'codecyclon@gmail.com', href: 'mailto:codecyclon@gmail.com' },
                { icon: '💬', label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919520535135' },
                { icon: '🌍', label: 'Location', value: 'Remote — Worldwide' },
                { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.92rem' }}>{item.value}</a>
                    ) : (
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass reveal-element" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Follow us</h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['GitHub', 'LinkedIn', 'Twitter / X', 'Instagram'].map(s => (
                  <a key={s} href="#" style={{ padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-sm)', background: 'var(--surface-2)', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 500, border: '1px solid var(--border)', transition: 'all var(--transition)' }}>{s}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass reveal-element" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input className="input-field" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" required />
              </div>
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input className="input-field" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Project Type</label>
                  <select className="input-field" value={form.projectType} onChange={e => setForm({ ...form, projectType: e.target.value })}>
                    <option value="website">Website</option>
                    <option value="landing">Landing Page</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="webapp">Web App</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Budget Range</label>
                  <select className="input-field" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                    <option value="<$1k">&lt; $1,000</option>
                    <option value="$1k-$3k">$1k - $3k</option>
                    <option value="$3k-$5k">$3k - $5k</option>
                    <option value="$5k+">$5,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={labelStyle}>Project Details *</label>
                <textarea className="input-field" rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project goals, timeline, and anything specific..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', marginTop: '0.5rem' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'success' && <div style={{ textAlign: 'center', color: 'var(--accent)', fontSize: '0.9rem', padding: '0.75rem', background: 'var(--accent-glow)', borderRadius: 'var(--radius-md)' }}>✓ Message sent! We&apos;ll respond within 24 hours.</div>}
              {status === 'error' && <div style={{ textAlign: 'center', color: 'var(--danger)', fontSize: '0.9rem', padding: '0.75rem', background: 'rgba(248,113,113,0.1)', borderRadius: 'var(--radius-md)' }}>Something went wrong. Please try again or email us directly.</div>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const labelStyle = { display: 'block', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.35rem' };
