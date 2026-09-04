'use client';

import { ReactLenis } from 'lenis/react';
import { SmoothScrollProps } from '@/types/types';
function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
