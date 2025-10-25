import { BiTransferAlt } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { FaUserClock, FaUsers } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbPhonePlus } from "react-icons/tb";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUserInfoQuery } from "@/redux/features/profile/profile.api";
import { Link } from "react-router-dom";
import SidebarHeaderComponent from "./modules/side-bar/SidebarHeader";
import SidebarLogoutComponent from "./modules/side-bar/SidebarLogout";

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
    url: "/dashboard/send-money",
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
    title: "All Transitions",
    url: "/dashboard/all-transitions",
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
  const { data, isLoading } = useUserInfoQuery(undefined);
  const userInfo = data?.data?.userInfo;



  const navItems =
    userInfo?.role === "admin"
      ? admin_nav
      : userInfo?.role === "agent"
      ? agent_nav
      : user_nav;

  return (
    <Sidebar>
      <SidebarHeaderComponent userInfo={userInfo} isLoading={isLoading} />

      <SidebarContent className="overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg capitalize">
            {userInfo?.role} Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent className="ml-4">
            <SidebarMenu>
              {navItems.map((item) => (
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

      <SidebarLogoutComponent/>
    </Sidebar>
  );
}
