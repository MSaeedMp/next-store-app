"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SearchProvider } from "@/contexts/SearchContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

import queryClient from "@/lib/react-query-client";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <SidebarProvider defaultOpen={false}>
        <SearchProvider>{children}</SearchProvider>
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default Providers;
