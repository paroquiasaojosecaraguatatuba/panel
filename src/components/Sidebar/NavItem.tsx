import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { ElementType } from "react";

export interface NavItemProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <Link
      href="#"
      className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-brand-700/30 focus-visible:ring-2 focus-visible:ring-brand-400 outline-none transition-colors"
    >
      <Icon className="h-5 w-5 text-brand-300" />
      <span className="font-medium text-brand-100 group-hover:text-brand-50">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-brand-300 group-hover:text-brand-300" />
    </Link>
  );
}
