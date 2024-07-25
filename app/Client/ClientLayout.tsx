"use client";

import { useEffect } from "react";
import useScrollbarWidth from "@/hooks/useScrollbarWidth";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollbarWidth = useScrollbarWidth();

  useEffect(() => {
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.paddingRight = "0px";
    };
  }, [scrollbarWidth]);

  return <section>{children}</section>;
}
