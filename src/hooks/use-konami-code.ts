// Inspired by https://github.com/geotrev/react-konami-code

'use client';

import { useEffect, useState, useCallback } from 'react';

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const useKonamiCode = (callback: () => void) => {
  const [keys, setKeys] = useState<string[]>([]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      setKeys((currentKeys) => [...currentKeys, e.key]);
    },
    [setKeys]
  );

  useEffect(() => {
    if (keys.length > konamiCode.length) {
      setKeys((currentKeys) => currentKeys.slice(currentKeys.length - konamiCode.length));
    }

    if (keys.join('') === konamiCode.join('')) {
      callback();
      setKeys([]);
    }
  }, [keys, callback]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};
