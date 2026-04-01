'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919520535135?text=Hi%20Codecyclon!%20I'm%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        background: '#25D366',
        color: '#fff',
        padding: hovered ? '0.85rem 1.4rem' : '0.85rem',
        borderRadius: 'var(--radius-full)',
        fontSize: '1.4rem',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        textDecoration: 'none',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ lineHeight: 1 }}>💬</span>
      {hovered && (
        <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
          Chat with us
        </span>
      )}
    </a>
  );
}
