import Button from "@/components/Button";
import { formatBytes } from "@/utils/format-bytes";
import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

const fileItem = tv({
  slots: {
    container:
      "bg-white group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
    icon: "rounded-full border-4 border-brand-100 bg-brand-200 p-2 text-brand-600",
    deleteButton: "",
  },

  variants: {
    state: {
      progress: {
        container: "",
      },
      complete: { container: "border-brand-500" },
      error: {
        container: "bg-error-25 border-error-300",
        icon: "border-error-50 bg-error-100 text-error-600",
        deleteButton: "text-error-700 hover:text-error-900",
      },
    },
  },

  defaultVariants: {
    state: "progress",
  },
});

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

export default function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state });

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 dark:text-error-400 text-sm font-medium">
              Upload failed, please try again.
            </span>
            <span className="text-error-600 dark:text-error-500 text-sm">
              {name}
            </span>
          </div>

          <button
            type="button"
            className="text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className="h-2 rounded-full bg-brand-600 dark:bg-brand-400"
                style={{ width: state === "complete" ? "100%" : "80%" }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {state === "complete" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      {state === "complete" ? (
        <CheckCircle2 className="h-5 w-5 fill-brand-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
