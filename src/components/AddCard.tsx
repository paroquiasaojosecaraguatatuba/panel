import { Plus } from "lucide-react";
import type { ElementType } from "react";

interface AddCardProps {
  title: string;
  subtitle: string;
  icon: ElementType;
}

export const AddCard = ({ title, subtitle, icon: Icon }: AddCardProps) => {
  return (
    <div className="py-6 px-6 shadow-sm h-68 rounded-xl border border-brand-200/30 bg-white flex flex-col items-center justify-center gap-6 hover:ring-1 hover:ring-brand-300 transition cursor-pointer outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2">
      <div className="relative w-28 h-28 bg-brand-0 rounded-full flex items-center justify-center">
        <Icon className="text-brand-700 w-14 h-14" strokeWidth={1.5} />
        <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full border border-brand-100 shadow-sm -right-1 -bottom-1">
          <Plus className="text-brand-600 w-5 h-5" />
        </div>
      </div>
      <p className="text-brand-700 text-center">
        <span className="font-semibold">{title}</span> {subtitle}
      </p>
    </div>
  );
};
