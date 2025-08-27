import App from "@/App";
import { Loader } from "@/components/loader";
import TestComponent from "@/components/TestComponent";
import Login from "@/pages/login.page";
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
        Component: Login
      },
      {
        path: "register",
        element: <TestComponent name="Register" />,
      },
      {
        path: "loader",
        Component: Loader,
      },
    ],
  },
]);
