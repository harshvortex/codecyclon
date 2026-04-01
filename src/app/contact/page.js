'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SERVICE_OPTIONS = [
  { id: 'website', label: '🌐 Custom Website', color: 'var(--primary)' },
  { id: 'app', label: '📱 App Development', color: 'var(--secondary)' },
  { id: 'landing', label: '📄 Landing Page', color: 'var(--accent)' },
  { id: 'ecommerce', label: '🛒 E-commerce', color: 'var(--primary)' },
  { id: 'webapp', label: '⚙️ Web Platform / SaaS', color: 'var(--secondary)' },
  { id: 'marketing', label: '📈 Marketing & SEO', color: 'var(--accent)' },
  { id: 'maintenance', label: '🛠️ Maintenance & Support', color: 'var(--primary)' },
  { id: 'other', label: '💡 Other / Custom', color: 'var(--secondary)' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', services: [], budget: '₹15k-₹40k', message: '' });
  const [status, setStatus] = useState(null);
  useScrollReveal();

  const toggleService = (id) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.services.length === 0) { alert('Please select at least one service.'); return; }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, projectType: form.services.join(', ') }),
      });
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', phone: '', services: [], budget: '₹15k-₹40k', message: '' }); }
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
            Tell us what you need — select one or more services and we&apos;ll craft a custom proposal.
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
                { icon: '💬', label: 'WhatsApp', value: '+91 95205 35135', href: 'https://wa.me/919520535135' },
                { icon: '📞', label: 'Phone', value: '+91 95205 35135', href: 'tel:+919520535135' },
                { icon: '🌍', label: 'Location', value: 'India — Available Worldwide' },
                { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{item.label}</div>
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
                  <a key={s} href="#" style={socialChip}>{s}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass reveal-element" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input className="input-field" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" required />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input className="input-field" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email Address *</label>
                <input className="input-field" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" required />
              </div>

              {/* Multi-Select Services */}
              <div>
                <label style={labelStyle}>What do you need? * <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: '0' }}>(select all that apply)</span></label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {SERVICE_OPTIONS.map(s => {
                    const selected = form.services.includes(s.id);
                    return (
                      <button key={s.id} type="button" onClick={() => toggleService(s.id)} style={{
                        padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)',
                        fontSize: '0.82rem', fontWeight: 500, cursor: 'pointer',
                        fontFamily: 'inherit', textAlign: 'left',
                        transition: 'all var(--transition)',
                        background: selected ? 'var(--primary-glow)' : 'var(--surface-2)',
                        color: selected ? 'var(--primary)' : 'var(--text-secondary)',
                        border: selected ? '1.5px solid var(--primary)' : '1px solid var(--border)',
                        boxShadow: selected ? '0 0 12px rgba(0,212,255,0.15)' : 'none',
                      }}>
                        {selected ? '✓ ' : ''}{s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Budget Range</label>
                <select className="input-field" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                  <option value="<₹15k">Under ₹15,000</option>
                  <option value="₹15k-₹40k">₹15,000 - ₹40,000</option>
                  <option value="₹40k-₹75k">₹40,000 - ₹75,000</option>
                  <option value="₹75k-₹1.5L">₹75,000 - ₹1.5 Lakh</option>
                  <option value="₹1.5L+">₹1.5 Lakh+</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Project Details *</label>
                <textarea className="input-field" rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project goals, timeline, and anything specific..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', marginTop: '0.5rem' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : `Send Message${form.services.length > 0 ? ` (${form.services.length} service${form.services.length > 1 ? 's' : ''} selected)` : ''} →`}
              </button>

              {status === 'success' && <div style={successMsg}>✓ Message sent! We&apos;ll respond within 24 hours with a custom quote.</div>}
              {status === 'error' && <div style={errorMsg}>Something went wrong. Please try again or WhatsApp us directly.</div>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const labelStyle = { display: 'block', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' };
const socialChip = { padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-sm)', background: 'var(--surface-2)', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 500, border: '1px solid var(--border)', transition: 'all var(--transition)' };
const successMsg = { textAlign: 'center', color: 'var(--accent)', fontSize: '0.9rem', padding: '0.75rem', background: 'var(--accent-glow)', borderRadius: 'var(--radius-md)' };
const errorMsg = { textAlign: 'center', color: 'var(--danger)', fontSize: '0.9rem', padding: '0.75rem', background: 'rgba(248,113,113,0.1)', borderRadius: 'var(--radius-md)' };
