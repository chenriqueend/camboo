import React, { useState } from "react";

interface CalendarTagProps {
  daysOfWeek: string[];
}

const CalendarTag: React.FC<CalendarTagProps> = ({ daysOfWeek }) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<{ [key: number]: string }>(
    {}
  );

  const handleDayClick = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const handleTimeChange = (dayIndex: number, time: string) => {
    setSelectedTimes({ ...selectedTimes, [dayIndex]: time });
  };

  return (
    <div className="flex flex-col gap-4">
      {daysOfWeek.map((day, index) => (
        <div key={index} className="flex items-center gap-4">
          <div
            className={`w-[52px] h-[32px] flex items-center justify-center border rounded cursor-pointer ${
              activeIndices.includes(index)
                ? "bg-[#006FFD] text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleDayClick(index)}
          >
            {day}
          </div>
          {activeIndices.includes(index) && (
            <div className="flex gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`time-${index}`}
                  value="morning"
                  checked={selectedTimes[index] === "morning"}
                  onChange={() => handleTimeChange(index, "morning")}
                  className="mr-2"
                />
                Manhã
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`time-${index}`}
                  value="afternoon"
                  checked={selectedTimes[index] === "afternoon"}
                  onChange={() => handleTimeChange(index, "afternoon")}
                  className="mr-2"
                />
                Tarde
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`time-${index}`}
                  value="night"
                  checked={selectedTimes[index] === "night"}
                  onChange={() => handleTimeChange(index, "night")}
                  className="mr-2"
                />
                Noite
              </label>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarTag;
