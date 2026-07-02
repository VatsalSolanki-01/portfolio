"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenisInstance } from "@/lib/lenis";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.7,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.95,
      touchMultiplier: 1,
    });

    setLenisInstance(lenis);

    return () => {
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}