import { TbPhonePlus } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";
import { BiTransferAlt } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUsers, FaUserClock } from "react-icons/fa";

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
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

// user_nav.
const user_nav = [
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
    title: "Send Money",
    url: "/dashboard/send-moneyp-d",
    icon: GiCash,
  },
  {
    title: "Cash-Out",
    url: "/dashboard/cash-out",
    icon: BsCashCoin,
  },
];

const agent_nav = [
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
];

const admin_nav = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: GrAnalytics,
  },

  {
    title: "Overview",
    url: "/dashboard/overview",
    icon: LuLayoutDashboard,
  },
  {
    title: "Transitions",
    url: "/dashboard/transitions",
    icon: BiTransferAlt,
  },
  
  {
    title: "Pending User",
    url: "/dashboard/pending-user",
    icon: FaUserClock,
  },
  {
    title: "User Management",
    url: "/dashboard/user-management",
    icon: FaUsers,
  },
  {
    title: "Pending Agent",
    url: "/dashboard/pending-agent",
    icon: FaUserClock,
  },
  {
    title: "Agent Management",
    url: "/dashboard/agent-management",
    icon: FaUsers,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Button className="cursor-pointer">
          <Link className="w-full" to="/">
            Go to home
          </Link>
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">
            Admin Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent className="ml-4">
            <SidebarMenu>
              {admin_nav.map((item) => (
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
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">
            Agent Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent className="ml-4">
            <SidebarMenu>
              {agent_nav.map((item) => (
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
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">
            User Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent className="ml-4">
            <SidebarMenu>
              {user_nav.map((item) => (
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
  );
}
