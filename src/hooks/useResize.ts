import { useEffect, useState } from 'react';

type UseResizeReturnType = {
  width: number;
};

export const useResize = (): UseResizeReturnType => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const onResize = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return { width };
};
