import { createContext, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type RootProps = ComponentProps<"div"> & {
  error?: string;
  touched?: boolean;
};

type InputContextType = {
  showError: boolean;
};

const InputContext = createContext({} as InputContextType);

export const Root = ({ error, touched, ...props }: RootProps) => {
  const showError = Boolean(error && touched);

  return (
    <InputContext.Provider value={{ showError }}>
      <div>
        <div
          className={twMerge(
            "flex w-full items-center gap-2 rounded-lg border px-3 py-2 shadow-sm bg-white",
            "focus-within:border-brand-300 focus-within:ring-4 focus-within:ring-brand-100",
            ...(showError ? ["border-red-700"] : ["border-brand-100"]),
            props.className,
          )}
          {...props}
        />
        {showError && (
          <p
            className={twMerge(
              "mt-2 ml-4 text-xs",
              ...(error ? ["text-red-700"] : ["text-brand-600"]),
              props.className,
            )}
            {...props}
          >
            {error}
          </p>
        )}
      </div>
    </InputContext.Provider>
  );
};
