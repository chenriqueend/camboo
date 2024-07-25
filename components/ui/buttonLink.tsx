import { cn } from "../../lib/utils";
import Link from "next/link";

export const ButtonLink = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        `
          flex no-underline rounded-md bg-btn-background 
          hover:bg-btn-background-hover`,
        className
      )}
    >
      {children}
    </Link>
  );
};
