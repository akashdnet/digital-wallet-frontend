import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import CommonLayout from "@/components/layouts/CommonLayout";
import AgentManagementPage from "@/components/modules/agent-management/AgentManagementPage";
import AllTransitionPage from "@/components/modules/all-transitions/AllTransitionPage";
import CashinPage from "@/components/modules/cash-in/CashinPage";
import CashoutPage from "@/components/modules/cash-out/CashoutPage";
import LoginPage from "@/components/modules/login/LoginPage";
import OverviewPage from "@/components/modules/overview/OverviewPage";
import PendingAgentPage from "@/components/modules/pending-agent/PendingAgentPage";
import PendingUserPage from "@/components/modules/pending-user/PendingUserPage";
import ProfilePage from "@/components/modules/profile/ProfilePage";
import SendMoneyPage from "@/components/modules/send-money/SendMoneyPage";
import SignupPage from "@/components/modules/signup/SignupPage";
import TopUpPage from "@/components/modules/top-up/TopUpPage";
import TransitionPage from "@/components/modules/transitions/TransitionPage";
import UserManagementPage from "@/components/modules/user-management/UserManagementPage";
import { createBrowserRouter } from "react-router";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: CommonLayout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "about",
        element: <Test t="about"/>,
      },
      {
        path: "contact",
        element: <Test t="contact"/>,
      },
      {
        path: "login",
        Component: LoginPage
      },
      {
        path: "signup",
        Component: SignupPage
      },
    ],
  },
  {
    path: "/dashboard",
    Component: AdminLayout,
    children: [
      {
        index: true,
        element: <Test t="Dashboard"/>,
      },
      {
        path: "profile",
        Component: ProfilePage,
      },
      {
        path: "all-transitions",
        Component: AllTransitionPage,
      },
      {
        path: "transitions",
        Component: TransitionPage,
      },
      {
        path: "cash-in",
        Component: CashinPage
      },
     {
        path: "cash-out",
        Component: CashoutPage
     }
      ,
      {
        path: "top-up",
        Component: TopUpPage
      },
      {
        path: "send-money",
        Component: SendMoneyPage
      },
      {
        path: "overview",
        Component: OverviewPage
      },
      
      {
        path: "pending-user",
        Component: PendingUserPage
      },
      {
        path: "user-management",
        Component: UserManagementPage
      },
      {
        path: "pending-agent",
        Component: PendingAgentPage
      },
      {
        path: "agent-management",
        Component: AgentManagementPage
      },
    ],
  },
]);






function Test ({t}:{t:string}){
    return (<h1 className="text-3xl font-bold underline text-center">this is {t} page</h1>)
}