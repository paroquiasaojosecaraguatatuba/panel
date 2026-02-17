import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type DescribeProps = ComponentProps<"p">;

export function Describe({ className, ...props }: DescribeProps) {
  return (
    <p className={twMerge(["mt-4 text-brand-800", className])} {...props} />
  );
}
