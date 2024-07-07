"use client";
import { type DefaultOptions, QueryClient } from "@tanstack/react-query";

export const defaultQueryClientOptions = {
  queries: {
    refetchOnWindowFocus: false,
  },
} satisfies DefaultOptions;

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
