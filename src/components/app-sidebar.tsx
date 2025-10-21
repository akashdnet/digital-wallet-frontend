import { Home } from "lucide-react"
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { TbPhonePlus } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";
import { BiTransferAlt } from "react-icons/bi";


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: GrAnalytics,
  },
  {
      title: "Transitions",
      url: "/dashboard/transitions",
      icon: BiTransferAlt,
    },
    {
      title: "Top-Up",
      url: "/dashboard/top-up",
      icon: TbPhonePlus,
    },
  {
    title: "Cash-In",
    url: "/dashboard/cash-in",
    icon: GiCash,
  },
  {
    title: "Cash-Out",
    url: "/dashboard/cash-out",
    icon: BsCashCoin,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader>
            <Button className="cursor-pointer">
                <Link className="w-full" to="/">Go to home</Link>
            </Button>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">User Dashboard</SidebarGroupLabel>
          <SidebarGroupContent className="ml-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}