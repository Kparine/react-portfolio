import { useEffect, useState } from 'react';

interface ScrollUpButtonProps {
  /** Scroll offset in pixels after which the button appears. */
  showAt?: number;
}

export default function ScrollUpButton({ showAt = 150 }: ScrollUpButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAt);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [showAt]);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      id="BTTbtn"
      className={`scroll-up${visible ? ' is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 18l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>
  );
}
