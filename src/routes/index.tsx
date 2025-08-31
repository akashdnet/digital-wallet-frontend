import App from "@/App";
import { Loader } from "@/components/loader";
import ManageAgents from "@/components/modules/dashboard-overview/agents/manage-agents";
import ManageUsers from "@/components/modules/dashboard-overview/users/manage-users";
import { RequireAuth } from "@/components/RequireAuth";
import TestComponent from "@/components/TestComponent";
import AboutPage from "@/pages/about.page";
import AllTransactionPage from "@/pages/allTransaction.page";
import CashInPage from "@/pages/cashIn.page";
import CashOutPage from "@/pages/cashOut.page";
import ChangePasswordPage from "@/pages/changePassword.page";
import ContactPage from "@/pages/contact.page";
import DashboardOverviewPage from "@/pages/dashboardOverview.page";
import Home from "@/pages/home.page";
import Login from "@/pages/login.page";
import MyProfile from "@/pages/myProfile.page";
import RegisterPage from "@/pages/register.page";
import SendMoney from "@/pages/sendMoney.page";
import ServicesPage from "@/pages/services.page";
import TopUpPage from "@/pages/topUp.page";
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
        path: "top-up",
        Component: RequireAuth(TopUpPage)
      },
      {
        path: "cash-in",
        Component: RequireAuth(CashInPage, ["agent"])
      },
      {
        path: "cash-out",
        Component: RequireAuth(CashOutPage)
      },
      {
        path: "loader",
        Component: Loader,
      },
      {
        path: "dashboard-overview",
        Component: RequireAuth(DashboardOverviewPage, ["admin"]),
      },
      {
        path: "all-transactions",
        Component: RequireAuth(AllTransactionPage, ["admin"]),
      },
      {
        path: "all-agents",
        Component: RequireAuth(ManageAgents, ["admin"]),
      },
      {
        path: "all-users",
        Component: RequireAuth(ManageUsers, ["admin"]),
      },
      {
        path: "services",
        Component: ServicesPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
    ],
  },
]);
