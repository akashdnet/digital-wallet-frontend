import {  Navigate, Outlet, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { useAuth } from "@/hooks/useAuth";
import LoadingPage from "../modules/LoadingPage";


export default function DashboardLayout() {

  const navigate = useNavigate();
  const {isLoggedIn, isLoading} = useAuth()

  if (isLoading) {
    return <div className="w-full min-h-screen flex flex-col"><LoadingPage/></div>
  };



  if(!isLoggedIn){
    navigate("/login")
  }
 
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen flex flex-col ">
        <SidebarTrigger  />
        <div className=" text-center flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
