import React from "react";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="mx-auto mb-2">
      <div className="flex border-b border-gray-200">
        {tabs?.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1 text-center transition-colors duration-300 font-semibold text-base ${
              activeTab === tab
                ? "border-b-2 border-[#95BEFE] text-[#041737]"
                : "border-b-2 border-transparent text-[#828282]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
