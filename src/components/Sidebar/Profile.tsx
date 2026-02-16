import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-brand-100 font-bold text-xl border-brand-300 border-2">
        P
      </div>

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-brand-100">
          Padre Altair
        </span>
        <span className="truncate text-sm text-brand-300">
          parsaojosecaraguatatuba@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:cursor-pointer hover:bg-brand-800 focus-visible:ring-2 focus-visible:ring-brand-400 outline-none transition-colors"
      >
        <LogOut className="h-5 w-5 text-brand-300" />
      </button>
    </div>
  );
}
