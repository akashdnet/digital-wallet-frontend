import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import CommonLayout from "@/components/layouts/CommonLayout";
import ProfilePage from "@/components/modules/profile/ProfilePage";
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
        element: <Test t="Cash-In"/>,
      },
     {
        path: "cash-out",
        element: <Test t="Cash-Out"/>,
     }
      ,
      {
        path: "top-up",
        element: <Test t="Top-Up"/>,
      },
    ],
  },
]);






function Test ({t}:{t:string}){
    return (<h1 className="text-3xl font-bold underline text-center">this is {t} page</h1>)
}