import type { ComponentProps } from "react";

type PrefixProps = ComponentProps<"div">;

export const Prefix = (props: PrefixProps) => {
  return <div {...props} />;
};
