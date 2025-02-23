"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SearchProvider } from "@/contexts/SearchContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import queryClient from "@/lib/react-query-client";
import { ForwardRouteProvider } from "@/contexts/ForwardRouteProvider";
import { ReviewsProvider } from "@/contexts/ReviewsContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ForwardRouteProvider>
        <ReviewsProvider>
          <SidebarProvider defaultOpen={false}>
            <SearchProvider>{children}</SearchProvider>
          </SidebarProvider>
        </ReviewsProvider>
      </ForwardRouteProvider>
    </QueryClientProvider>
  );
};

export default Providers;
