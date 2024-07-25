import React, { ReactNode } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return <div className="min-w-full">{children}</div>;
};

export default Tab;
