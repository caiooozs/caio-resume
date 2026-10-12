"use client";
import { usePathname } from "next/navigation";

export default function useNavBarViewModel() {
  const pathname = usePathname();

  return {
    pathname,
  };
}
