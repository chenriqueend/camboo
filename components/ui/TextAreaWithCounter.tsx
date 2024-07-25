import React, { useState } from "react";

type TextAreaWithCounterProps = {
  placeholder?: string;
  width?: string;
  maxChars?: number;
};

const TextAreaWithCounter: React.FC<TextAreaWithCounterProps> = ({
  placeholder,
  width,
  maxChars = 400,
}) => {
  const [text, setText] = useState("");
  const widthClass = width ? width : "w-full";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxChars) {
      setText(e.target.value);
    }
  };

  return (
    <div className={`relative ${widthClass}`}>
      <textarea
        id="message"
        name="message"
        rows={4}
        value={text}
        onChange={handleChange}
        className={`w-full px-3 py-2 border-2 scrollbar-hide resize-none ${
          text.length >= maxChars ? "border-red-500" : "border-gray-300"
        } bg-transparent rounded-md focus:outline-none focus:ring-0 ${
          text.length >= maxChars
            ? "focus:border-red-500"
            : "focus:border-[#F845FC]"
        }`}
        placeholder={placeholder || "macbook xxx"}
      ></textarea>
      <div className="absolute bottom-2 mb-2 right-4 text-sm text-gray-300 ">
        {text.length}/{maxChars}
      </div>
    </div>
  );
};

export default TextAreaWithCounter;
