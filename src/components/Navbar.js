'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav style={navStyle}>
        <div className="container" style={inner}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={logoDot}></div>
            <span style={logoText}>codecyclon</span>
          </Link>

          <div className="nav-links" style={navLinks}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                ...linkStyle,
                color: pathname === l.href ? 'var(--primary)' : 'var(--text-secondary)',
              }}>
                {l.label}
                {pathname === l.href && <span style={activeDot}></span>}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={toggleTheme} style={themeBtn} aria-label="Toggle theme">
              <span style={{ fontSize: '0.85rem', lineHeight: 1 }}>{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.3rem', fontSize: '0.82rem' }}>
              Let&apos;s Talk →
            </Link>
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} style={mobileBtn} aria-label="Menu">
              <span style={{ fontSize: '1.2rem' }}>{mobileOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={mobileMenu}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={mobileLinkStyle}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

const navStyle = {
  position: 'fixed', top: 0, width: '100%', zIndex: 1000,
  background: 'var(--glass-bg)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  borderBottom: '1px solid var(--border)',
  height: '64px', display: 'flex', alignItems: 'center',
};
const inner = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' };
const logoDot = { width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' };
const logoText = { fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.03em' };
const navLinks = { display: 'flex', alignItems: 'center', gap: '2rem' };
const linkStyle = { fontWeight: 500, fontSize: '0.88rem', transition: 'color 0.2s', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' };
const activeDot = { width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)', position: 'absolute', bottom: '-8px' };
const themeBtn = {
  background: 'var(--surface-2)', border: '1px solid var(--border)',
  borderRadius: '50%', width: '34px', height: '34px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', transition: 'all var(--transition)',
};
const mobileBtn = {
  background: 'var(--surface-2)', border: '1px solid var(--border)',
  borderRadius: '8px', width: '38px', height: '38px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', color: 'var(--text)',
};
const mobileMenu = {
  position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
  background: 'var(--bg)', zIndex: 999,
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  justifyContent: 'center', gap: '2rem',
};
const mobileLinkStyle = { fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)' };
