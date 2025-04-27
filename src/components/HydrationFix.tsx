'use client';

import React, { useEffect, useState } from 'react';

interface HydrationFixProps {
  children?: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  render?: (isMounted: boolean) => React.ReactNode;
}


export default function HydrationFix({ 
  children, 
  as: Component = 'div',
  className = '',
  render
}: HydrationFixProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Component suppressHydrationWarning={true} className={className}></Component>;
  }

  if (render) {
    return <Component suppressHydrationWarning={true} className={className}>{render(isMounted)}</Component>;
  }

  return <Component suppressHydrationWarning={true} className={className}>{children}</Component>;
} 