import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import { useMyProfileQuery } from "@/redux/features/user/user.api"

const navData = {

  admin: [
    {
      title: "My Profile",
      url: "/profile",
      icon: IconDashboard,
    },
    {
      title: "Dashboard Overview",
      url: "dashboard-overview",
      icon: IconListDetails,
    },
    {
      title: "All Transactions",
      url: "all-transactions",
      icon: IconListDetails,
    },
    {
      title: "All Users",
      url: "all-users",
      icon: IconListDetails,
    },
    {
      title: "All Agents",
      url: "all-agents",
      icon: IconListDetails,
    },
   
  ],
  agent: [
    {
      title: "My Profile",
      url: "/profile",
      icon: IconDashboard,
    },
    
    {
      title: "Transactions",
      url: "/transaction",
      icon: IconChartBar,
    },
    
    {
      title: "CashIn",
      url: "/cash-in",
      icon: IconChartBar,
    },
    
  ],
  user: [
    {
      title: "My Profile",
      url: "/profile",
      icon: IconDashboard,
    },
    
    {
      title: "Transactions",
      url: "/transaction",
      icon: IconChartBar,
    },
    {
      title: "Send Money",
      url: "/send-money",
      icon: IconChartBar,
    },
    {
      title: "TopUp",
      url: "/top-up",
      icon: IconChartBar,
    },
    
    {
      title: "CashOut",
      url: "/cash-out",
      icon: IconChartBar,
    },
    
  ],
 
  
}

type TRoles = "admin" | "agent" | "user"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {data, error, isLoading } = useMyProfileQuery(undefined)
  const user = data?.data?.userInfo
  
  const roles = (role:TRoles)=>data?.data?.userInfo?.role.includes(role)


  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="mt-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="#">
                <img src={user?.avatar} alt={user?.name.split(" ")[0]} className="w-10 h-10 rounded-full object-cover"/>
                <span className="text-base font-semibold">{user?.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {roles("admin") ? <NavMain items={navData?.admin} title="Admin Dashboard" />:(
          roles("agent") ? <NavMain items={navData?.agent} title="Agent Dashboard"/> :(
            roles("user") && <NavMain items={navData?.user} title="User Dashboard" />
          )
        )}
        
        
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}
