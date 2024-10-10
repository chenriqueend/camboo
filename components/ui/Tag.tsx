import { cn } from "@/lib/utils";
import React from "react";

interface TagProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const Tag: React.FC<TagProps> = ({ text, isActive, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={cn(
        " inline-block py-1 px-2 text-[#5001A8] rounded-lg border-1 border-[#5001A8] hover:bg-[#F5F4F8] whitespace-nowrap font-bold cursor-pointer text-xs md:text-1xl md:w-[4.6rem]",
        isActive ? "bg-[#F5F4F8] " : "bg-transparent"
      )}
    >
      {text}
    </span>
  );
};

export default Tag;
