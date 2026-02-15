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
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-brand-800"
    >
      <Icon className="h-5 w-5 text-brand-400" />
      <span className="font-medium text-brand-200 group-hover:text-brand-100">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-brand-400 group-hover:text-brand-300" />
    </Link>
  );
}
