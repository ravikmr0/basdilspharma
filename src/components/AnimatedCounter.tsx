import { useEffect, useState } from 'react';

type AnimatedCounterProps = {
  value: number;
  duration?: number;
};

export function AnimatedCounter({ value, duration = 1800 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [duration, value]);

  return <>{count}</>;
}
