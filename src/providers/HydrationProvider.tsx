"use client";

import { useEffect, useState } from "react";

interface HydrationProviderProps {
  children: React.ReactNode;
}

export const HydrationProvider = ({ children }: HydrationProviderProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  console.log("HydrationProvider rendered. isHydrated:", isHydrated);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated ? children : null;
};
