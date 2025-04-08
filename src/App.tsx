import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";

import { Toaster } from "@/components/ui/sonner";

import { ThemeProvider } from "./components/theme/theme-provider";
import "./index.css";
import { router } from "./routes";

export function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey="loanX-theme" defaultTheme="dark">
          <Helmet titleTemplate="%s | LoanX " />
          <Toaster richColors closeButton />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}
