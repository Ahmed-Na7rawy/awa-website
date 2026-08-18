import { useEffect, useRef } from 'react';

export function useScrollReveal(options?: string | { threshold?: number; rootMargin?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: (typeof options === 'object' ? options?.threshold : undefined) ?? 0.15,
        rootMargin: (typeof options === 'object' ? options?.rootMargin : undefined) ?? '0px 0px -40px 0px',
      }
    );

    // Observe the container and all children with reveal classes
    const revealElements = el.querySelectorAll('.reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale');
    revealElements.forEach((child) => observer.observe(child));
    
    // Also observe the container itself if it has a reveal class
    if (el.classList.contains('reveal-fade-up') || el.classList.contains('reveal-fade-left') || el.classList.contains('reveal-fade-right') || el.classList.contains('reveal-scale')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [typeof options === 'object' ? options?.threshold : undefined, typeof options === 'object' ? options?.rootMargin : undefined]);

  return ref;
}
