"use client";

import AuthGuardProvider from "@/providers/AuthGuardProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthGuardProvider />
      {children}
    </QueryClientProvider>
  );
};

export default AppProvider;
