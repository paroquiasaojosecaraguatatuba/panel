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
      className="group relative cursor-pointer px-1 pb-4 text-sm font-medium text-brand-600 hover:text-brand-700 data-[state=active]:text-brand-700 focus:outline-none"
    >
      <span className="font-medium group-focus-visible:ring-2 group-focus-visible:ring-brand-300 group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-brand-0 rounded">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute right-0 -bottom-px left-0 h-0.5 bg-brand-700"
        />
      )}
    </Tabs.Trigger>
  );
};
