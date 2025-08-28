import App from "@/App";
import { Loader } from "@/components/loader";
import TestComponent from "@/components/TestComponent";
import Home from "@/pages/home.page";
import Login from "@/pages/login.page";
import MyProfile from "@/pages/myProfile";
import RegisterPage from "@/pages/register.page";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      {
        index: true,
        Component: Home
      },
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
        Component: RegisterPage
      },
      {
        path: "profile",
        Component: MyProfile
      },
      {
        path: "loader",
        Component: Loader,
      },
    ],
  },
]);
