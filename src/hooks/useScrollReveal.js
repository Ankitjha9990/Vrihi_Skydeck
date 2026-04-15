import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — adds .visible class to .reveal* elements inside ref
 */
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current || document;
    const elements = root.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useCountUp — animates a number from 0 to `target` when element enters viewport
 * @param {number} target   - final value to count to
 * @param {number} duration - animation duration in ms (default 2000)
 * @returns [displayValue, elementRef]
 */
export function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const elRef   = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTs;

          const step = (ts) => {
            if (!startTs) startTs = ts;
            const progress = Math.min((ts - startTs) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, elRef];
}

/**
 * useDragScroll — drag-to-scroll on a ref element
 */
export function useDragScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false, startX, scrollLeft;

    const onDown  = (e) => { isDown = true; el.style.cursor = 'grabbing'; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; };
    const onLeave = () => { isDown = false; el.style.cursor = 'grab'; };
    const onUp    = () => { isDown = false; el.style.cursor = 'grab'; };
    const onMove  = (e) => {
      if (!isDown) return;
      e.preventDefault();
      el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.5;
    };

    el.addEventListener('mousedown', onDown);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mouseup', onUp);
    el.addEventListener('mousemove', onMove);

    return () => {
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mouseup', onUp);
      el.removeEventListener('mousemove', onMove);
    };
  }, []);

  return ref;
}

/**
 * useNavScroll — scrolled class on .vs-nav
 */
export function useNavScroll() {
  useEffect(() => {
    const nav = document.querySelector('.vs-nav');
    if (!nav) return;
    const handler = () => nav.classList.toggle('scrolled', window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
}
