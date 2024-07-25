import * as React from "react";
import Image from "next/image";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const SelectCustomArrow = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="text-[#041737] text-base font-bold mb-2 block">
            {label}
          </label>
        )}
        <div className="relative w-full">
          <select
            className={`w-full text-xs border-0 border-b-2 border-gray-300 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-[#F845FC] ${className}`}
            ref={ref}
            {...props}
          >
            {children}
          </select>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <Image
              src="/assets/icons/arrowDownIcon.svg"
              alt="arrow down"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    );
  }
);

export { SelectCustomArrow };
