import App from "@/App";
import FAQPage from "@/components/faq-page/FAQPage";
import CommonLayout from "@/components/layouts/CommonLayout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ErrorBoundary from "@/components/layouts/ErrorBoundary";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import AboutPage from "@/components/modules/about/AboutPage";
import AgentManagementPage from "@/components/modules/agent-management/AgentManagementPage";
import AllTransitionPage from "@/components/modules/all-transitions/AllTransitionPage";
import CashinPage from "@/components/modules/cash-in/CashinPage";
import CashoutPage from "@/components/modules/cash-out/CashoutPage";
import ContactPage from "@/components/modules/contact-page/ContactPage";
import DashboardPage from "@/components/modules/DashboardPage";
import FeaturesPage from "@/components/modules/features-page/FeaturesPage";
import LoginPage from "@/components/modules/login/LoginPage";
import OverviewPage from "@/components/modules/overview/OverviewPage";
import PendingAgentPage from "@/components/modules/pending-agent/PendingAgentPage";
import PendingUserPage from "@/components/modules/pending-user/PendingUserPage";
import ProfilePage from "@/components/modules/profile/ProfilePage";
import SendMoneyPage from "@/components/modules/send-money/SendMoneyPage";
import SignupPage from "@/components/modules/sign-up/SignupPage";
import TopUpPage from "@/components/modules/top-up/TopUpPage";

import TransitionPage from "@/components/modules/transitions/TransitionPage";
import UserManagementPage from "@/components/modules/user-management/UserManagementPage";
import { Button } from "@/components/ui/button";
import { createBrowserRouter, Link } from "react-router";


export let router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorBoundary>
              <CommonLayout/>
            </ErrorBoundary>
,
errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "features",
        Component: FeaturesPage,
      },
      {
        path: "faq",
        Component: FAQPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "login",
        Component: LoginPage
      },
      {
        path: "sign-up",
        Component: SignupPage
      },
    ],
  },

{
  path: "/dashboard",
  element: <ErrorBoundary>
            <DashboardLayout/>
          </ErrorBoundary>,
          errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      Component: DashboardPage
    },
    {
      path: "profile",
      element: (
        <ProtectedRoute allowedRoles={["user", "agent", "admin"]}>
          <ProfilePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "all-transitions",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <AllTransitionPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "transitions",
      element: (
        <ProtectedRoute allowedRoles={["user", "agent"]}>
          <TransitionPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "cash-in",
      element: (
        <ProtectedRoute allowedRoles={["agent"]}>
          <CashinPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "cash-out",
      element: (
        <ProtectedRoute allowedRoles={["user"]}>
          <CashoutPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "top-up",
      element: (
        <ProtectedRoute allowedRoles={["user"]}>
          <TopUpPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "send-money",
      element: (
        <ProtectedRoute allowedRoles={["user"]}>
          <SendMoneyPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "overview",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <OverviewPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "pending-user",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <PendingUserPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "user-management",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <UserManagementPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "pending-agent",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <PendingAgentPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "agent-management",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <AgentManagementPage />
        </ProtectedRoute>
      ),
    },
  ],
}

]);






// function Test ({t}:{t:string}){
//     return (<h1 className="text-3xl font-bold underline text-center">this is {t} page</h1>)
// }



function ErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-gray-600">Something went wrong or page not found.</p>
      <Button className="transition mt-5">
        <Link
        to="/"
        className="w-full "
      >
        Go Home
      </Link>
      </Button>
    </div>
  );
}