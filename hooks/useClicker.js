import { useState, useEffect } from 'react';

export default function useClicker() {
  const { count, setCount } = useState(0);

  useEffect(() => {
    const handlerClick = () => {
      setCount((count) => count + 1);
    };
    window.addEventListener('click', handlerClick);
    return () => {
      window.removeEventListener('click', handlerClick);
    };
  }, []);

  return count;
}
