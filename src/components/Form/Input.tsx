import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputPrefixProps = ComponentProps<"div">;

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<"input">;

function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-brand-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  );
}

type InputRootProps = ComponentProps<"div">;

function InputRoot(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        "flex w-full items-center gap-2 bg-white rounded-lg border border-brand-100 px-3 py-2 shadow-sm",
        "focus-within:border-brand-300 focus-within:ring-4 focus-within:ring-brand-100",
        props.className,
      )}
      {...props}
    />
  );
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
};
