"use client";
import { useEffect, useState } from "react";
export default function useNavBarViewModel() {
  const SCROLL_THRESHOLD = 50;
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    scrolled,
  };
}
