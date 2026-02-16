"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export const Trigger = () => {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:bg-brand-0/50 hover:text-brand-500 hover:border-brand-300"
    >
      <div className="rounded-full border-6 border-zinc-100 bg-zinc-200/50 p-2 group-hover:border-brand-50 group-hover:bg-brand-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-brand-700" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-brand-700">Click to upload</span>{" "}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
};
