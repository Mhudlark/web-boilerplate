import { QueryCache, QueryClient } from "@tanstack/react-query";

/**
 * Create a query client for React Query
 *
 * @see https://tanstack.com/query/latest/docs/framework/react/guides/ssr#initial-setup
 */
export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
    queryCache: new QueryCache({
      onError: () => {
        // global error handling, e.g. toast notification ...
      },
    }),
  });
