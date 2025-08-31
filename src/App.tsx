import { AppSidebar } from "./components/app-sidebar"; // Sidebar
import { Outlet } from "react-router";
import { SidebarProvider } from "./components/ui/sidebar";
import CommonLayout from "./components/layout/CommonLayout";
import { ThemeProvider } from "./providers/theme-provider";
import Joyride, { Step } from "react-joyride";
import React, { useEffect, useState } from "react";
import { useMyProfileQuery } from "./redux/features/user/user.api";

function App() {
   const {data} = useMyProfileQuery(undefined)
  const email = data?.data?.userInfo?.email
  
  const [run, setRun] = useState(false);

  const steps: Step[] = [
    {
      target: ".home-guide",
      content: "This is Home page",
    },
    {
      target: ".services-guide",
      content: "This is Services page",
    },
    {
      target: ".about-guide",
      content: "This is About page",
    },
    {
      target: ".contact-guide",
      content: "This is Contact page",
    },
    {
      target: ".auth-guide",
      content: "This is your Authentication options",
    },
  ];

  useEffect(() => {
    const hasRun = localStorage.getItem("hasRunJoyride");
    if (!hasRun) {
      setRun(true);
      localStorage.setItem("hasRunJoyride", "true");
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <Joyride
          steps={steps}
          run={run}
          continuous
          showSkipButton
          showProgress
          styles={{
            options: {
              primaryColor: "#6366f1",
              zIndex: 10000,
            },
          }}
        />

        {email && <AppSidebar />}
        <CommonLayout>
          <div className="flex w-full main-content">
            <div className="flex-1 ">
              <Outlet />
            </div>
          </div>
        </CommonLayout>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
