import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function BackBtn(props: { path: string; className?: string }) {
  return (
    <div>
      <Link
        href={props.path}
        className={cn(
          `
        flex
        items-center
        
        py-2
        text-sm
        no-underline
        rounded-md
        text-foreground
        bg-btn-background
        hover:bg-btn-background-hover
        group`,
          props.className
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 mr-2 transition-transform text-blue-gray-400 group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        <span className="text-blue-gray-400">Voltar</span>
      </Link>
    </div>
  );
}
