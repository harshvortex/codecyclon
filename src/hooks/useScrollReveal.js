'use client';

import { useEffect, useRef, useCallback } from 'react';

export function useScrollReveal() {
  const init = useRef(false);

  const observe = useCallback(() => {
    const elements = document.querySelectorAll('.reveal-element:not(.revealed)');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (init.current) return;
    init.current = true;
    // Small delay ensures DOM is painted
    const timer = setTimeout(observe, 100);
    return () => clearTimeout(timer);
  }, [observe]);

  // Re-observe on route change
  useEffect(() => {
    const timer = setTimeout(observe, 200);
    return () => clearTimeout(timer);
  });
}
