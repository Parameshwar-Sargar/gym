import { useEffect, useState } from 'react';

export function usePointerSupport() {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') {
      return { isTouch: false, reducedMotion: false };
    }
    return {
      isTouch: window.matchMedia('(hover: none), (pointer: coarse)').matches,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };
  });

  useEffect(() => {
    const touchMq = window.matchMedia('(hover: none), (pointer: coarse)');
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const sync = () => {
      setState({
        isTouch: touchMq.matches,
        reducedMotion: motionMq.matches
      });
    };

    touchMq.addEventListener('change', sync);
    motionMq.addEventListener('change', sync);
    return () => {
      touchMq.removeEventListener('change', sync);
      motionMq.removeEventListener('change', sync);
    };
  }, []);

  return state;
}
