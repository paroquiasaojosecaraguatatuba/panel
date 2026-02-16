"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export const TabItem = ({ value, title, isSelected = false }: TabItemProps) => {
  return (
    <Tabs.Trigger
      value={value}
      className="relative cursor-pointer px-1 pb-4 text-sm font-medium text-brand-600 hover:text-brand-700 data-[state=active]:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 rounded-t-md"
    >
      <span className="font-medium">{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute right-0 -bottom-px left-0 h-0.5 bg-brand-700"
        />
      )}
    </Tabs.Trigger>
  );
};
