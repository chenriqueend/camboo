import * as React from "react";

import { cn } from "../../lib/utils";

import Image from "next/image";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasMail?: boolean;
  width?: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasMail, width = "100%", ...props }, ref) => {
    return (
      <>
        {hasMail ? (
          <div className="relative w-full">
            <Image
              src="/assets/icons/mailIcon.svg"
              alt="mail"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              fill={false}
              width={24}
              height={24}
            />
            <input
              type={type}
              className={cn(
                (className =
                  "border-0 border-b-2 border-gray-300 pl-10  bg-transparent focus:outline-none focus:ring-0 focus:border-[#F845FC]"),
                className
              )}
              style={{ width }}
              ref={ref}
              {...props}
            />
          </div>
        ) : (
          <input
            type={type}
            className={cn(
              (className =
                "w-full border-0 border-b-2 text-sm bg-transparent border-gray-300 focus:outline-none focus:ring-0 focus:border-[#F845FC]"),
              className
            )}
            style={{ width }}
            ref={ref}
            {...props}
          />
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
