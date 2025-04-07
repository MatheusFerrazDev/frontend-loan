import { createBrowserRouter } from "react-router";

import AppLayout from "./pages/_layouts/app";
import AuthLayout from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { ForgotPassword } from "./pages/auth/forgot-password";
import { ResetPassword } from "./pages/auth/reset-password";
import { SignIn } from "./pages/auth/sign-in";
import { Register } from "./pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/sign-in", element: <SignIn /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/sign-up", element: <Register /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/forgot-password", element: <ForgotPassword /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/reset-password", element: <ResetPassword /> }],
  },
]);
