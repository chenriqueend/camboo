import React from "react";

interface CheckboxWithLabelProps {
  label: string;
  checked: boolean;
  hasLabel?: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label,
  checked,
  onChange,
  hasLabel,
}) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="form-checkbox h-4 w-4 text-blue-[#006FFD] bg-gray-300 focus:ring-0 border-0"
      />
      {hasLabel ? (
        <label className="ml-2 mb-1 text-blackwhitespace-nowrap">{label}</label>
      ) : null}
    </div>
  );
};

export default CheckboxWithLabel;
