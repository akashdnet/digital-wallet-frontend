import App from "@/App";
import { Loader } from "@/components/loader";
import TestComponent from "@/components/TestComponent";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      {
        path: "about",
        element: <TestComponent name="About" />,
      },
      {
        path: "contact",
        element: <TestComponent name="Contact" />,
      },
      {
        path: "login",
        element: <TestComponent name="login" />,
      },
      {
        path: "signup",
        element: <TestComponent name="signup" />,
      },
      {
        path: "loader",
        Component: Loader,
      },
    ],
  },
]);
