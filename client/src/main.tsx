import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
