"use client";

import AuthGuardProvider from "@/providers/AuthGuardProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HydrationProvider } from "./HydrationProvider";

const queryClient = new QueryClient();

const AppProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthGuardProvider />
      <HydrationProvider>{children}</HydrationProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
