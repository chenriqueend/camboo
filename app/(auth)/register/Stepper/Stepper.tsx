"use client";
import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full border-2 ${
            index < currentStep
              ? "bg-[#35CA4D] border-transparent"
              : index === currentStep
              ? "bg-[#F4F3FE] border-[#F845FC]"
              : "bg-[#F4F3FE] "
          }`}
        />
      ))}
    </div>
  );
};

export default Stepper;
