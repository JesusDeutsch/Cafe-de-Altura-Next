"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SuccessLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/success') {
      localStorage.clear();
    }
  }, [pathname]);

  return <success>{children}</success>;

}
