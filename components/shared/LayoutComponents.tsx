import { APP_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const LayoutComponents = {
  stickyPlaceholder: ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
      <div className={cn(className)} style={{ position: 'sticky', top: APP_CONFIG.layout.headerHeight }}>
        {children}
      </div>
    )
  }
}

export default LayoutComponents;