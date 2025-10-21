import {  Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";


export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen  ">
        <SidebarTrigger />
        <div className=" text-center">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
