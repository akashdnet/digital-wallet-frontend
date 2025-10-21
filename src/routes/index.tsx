import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import CommonLayout from "@/components/layouts/CommonLayout";
import CashinPage from "@/components/modules/cash-in/CashinPage";
import CashoutPage from "@/components/modules/cash-out/CashoutPage";
import ProfilePage from "@/components/modules/profile/ProfilePage";
import SendMoneyPage from "@/components/modules/send-money/SendMoneyPage";
import TopUpPage from "@/components/modules/top-up/TopUpPage";
import TransitionPage from "@/components/modules/transitions/TransitionPage";
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
    ],
  },
]);






function Test ({t}:{t:string}){
    return (<h1 className="text-3xl font-bold underline text-center">this is {t} page</h1>)
}