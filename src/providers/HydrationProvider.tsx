"use client";

import { useEffect, useState } from "react";

interface HydrationProviderProps {
  children: React.ReactNode;
}

export const HydrationProvider = ({ children }: HydrationProviderProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <div suppressHydrationWarning>{isHydrated ? children : null}</div>;
};
