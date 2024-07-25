import React, { useState } from "react";

interface CalendarTagProps {
  daysOfWeek: string[];
}

const CalendarTag: React.FC<CalendarTagProps> = ({ daysOfWeek }) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const handleDayClick = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className={`w-[52px] h-[32px] flex items-center justify-center border rounded cursor-pointer ${
            activeIndices.includes(index)
              ? "bg-[#006FFD] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleDayClick(index)}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarTag;
