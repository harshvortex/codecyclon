import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={footerWrap}>
      {/* Pre-footer CTA */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div className="glass" style={preCta}>
          <div style={preCtaInner}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Ready to build something great?</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Start your project today — no commitment required.</p>
            </div>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '0.9rem 2rem', flexShrink: 0 }}>
              Start Project →
            </Link>
          </div>
        </div>
      </div>

      <div className="container" style={grid}>
        <div style={{ maxWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}></div>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.03em' }}>codecyclon</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.7' }}>
            Building modern websites that help businesses grow and stand out in the digital world.
          </p>
        </div>

        <div>
          <h4 style={colTitle}>Pages</h4>
          <ul style={list}>
            {[['/', 'Home'], ['/services', 'Services'], ['/pricing', 'Pricing'], ['/portfolio', 'Work'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href} style={fLink}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={colTitle}>Services</h4>
          <ul style={list}>
            {['Custom Websites', 'App Development', 'Landing Pages', 'E-commerce', 'Marketing & SEO', 'Maintenance'].map(s => (
              <li key={s} style={fLink}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={colTitle}>Connect</h4>
          <ul style={list}>
            <li><a href="mailto:codecyclon@gmail.com" style={fLink}>codecyclon@gmail.com</a></li>
            <li><a href="https://wa.me/919520535135" target="_blank" rel="noopener noreferrer" style={fLink}>WhatsApp</a></li>
            <li><a href="https://github.com/codecyclon" target="_blank" rel="noopener noreferrer" style={fLink}>GitHub</a></li>
            <li><a href="#" style={fLink}>LinkedIn</a></li>
            <li><a href="#" style={fLink}>Twitter / X</a></li>
          </ul>
        </div>
      </div>

      <div style={bottom}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>© {new Date().getFullYear()} Codecyclon. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Privacy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerWrap = { paddingTop: '4rem', background: 'var(--bg-alt)' };
const preCta = { padding: '3rem', overflow: 'hidden', position: 'relative' };
const preCtaInner = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' };
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem', paddingBottom: '3rem' };
const colTitle = { fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '1rem' };
const list = { display: 'flex', flexDirection: 'column', gap: '0.5rem' };
const fLink = { color: 'var(--text-secondary)', fontSize: '0.88rem', transition: 'color 0.2s', cursor: 'pointer' };
const bottom = { borderTop: '1px solid var(--border)', padding: '1.5rem 0' };
