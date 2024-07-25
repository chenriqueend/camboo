import { useEffect, useRef } from 'react';
/*
 *
 * @param callback
 * @param intervalMs
 */

export const useCronLikeEffect = (callback: () => void, intervalMs: number) => {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Define a function to start the interval
  const startInterval = () => {
    if (intervalMs !== null) {
      intervalId.current = setInterval(() => {
        savedCallback.current?.();
      }, intervalMs);
    }
  };

  // Define a function to stop the interval
  const stopInterval = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  // Set up and clean up the interval
  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [intervalMs]);

  // Handle tab visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval();
      } else {
        startInterval();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};

export default useCronLikeEffect;
