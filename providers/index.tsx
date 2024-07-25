"use client";

import { ThemeProvider } from "@/components/MaterialTailwindProvider";
import JotaiProvider from "./jotai-provider";
import { NextUIProvider } from "@nextui-org/react";
import { EdgeStoreProvider } from "../lib/edgestore";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ThemeProvider>
    <JotaiProvider>
      <NextUIProvider>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </NextUIProvider>
    </JotaiProvider>
    // </ThemeProvider>
  );
}
