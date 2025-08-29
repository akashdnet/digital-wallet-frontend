import App from "@/App";
import { Loader } from "@/components/loader";
import { RequireAuth } from "@/components/RequireAuth";
import TestComponent from "@/components/TestComponent";
import ChangePasswordPage from "@/pages/changePassword.page";
import Home from "@/pages/home.page";
import Login from "@/pages/login.page";
import MyProfile from "@/pages/myProfile.page";
import RegisterPage from "@/pages/register.page";
import SendMoney from "@/pages/sendMoney.page";
import Transitions from "@/pages/transaction.page";
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
        Component: RequireAuth(MyProfile)
      },
      {
        path: "change-password",
        Component: RequireAuth(ChangePasswordPage)
      },
      {
        path: "transaction",
        Component: RequireAuth(Transitions)
      },
      {
        path: "send-money",
        Component: RequireAuth(SendMoney)
      },
      {
        path: "loader",
        Component: Loader,
      },
    ],
  },
]);
