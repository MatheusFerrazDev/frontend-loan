import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";

import { Toaster } from "@/components/ui/sonner";

import "./index.css";
import { router } from "./routes";

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | LoanX " />
        <Toaster richColors closeButton />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}
