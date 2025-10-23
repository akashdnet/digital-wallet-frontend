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
  SidebarFooter,
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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUserInfoQuery } from "@/redux/features/profile/profile.api";

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


interface AppSidebarProps {
  role: "admin" | "agent" | "user";
}

export function AppSidebar({ role="admin" }: AppSidebarProps) {

  const { data } = useUserInfoQuery(undefined)
  const userInfo = data?.data?.userInfo





   const baseClass = "mt-1 inline-block w-fit rounded-full px-2 py-0.5 text-[10px] font-medium";

  const roleClass =
    role === "admin"
      ? "bg-red-100 text-red-700"
      : role === "agent"
      ? "bg-green-100 text-green-700"
      : "bg-blue-100 text-blue-700";
  // const navItems = role === "admin" ? admin_nav : role === "agent" ? agent_nav : user_nav;

  return (
    <Sidebar>
      <SidebarHeader>
        <Button className="cursor-pointer mt-2">
          <Link className="w-full" to="/">
            Go to home
          </Link>
        </Button>
        <section className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <Avatar className="h-12 w-12">
            <AvatarImage src={userInfo?.avatar} alt="User avatar" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
  <h1 className="text-sm font-semibold text-gray-900">{userInfo?.name}</h1>
  <h2 className="text-xs text-gray-500">{userInfo?.email}</h2>
  <span className={`${baseClass} ${roleClass}`}>
      Role: <span className="uppercase mx-1">{userInfo?.role}</span>
    </span>
</div>

        </section>

        
      </SidebarHeader>

      <SidebarContent className="overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg capitalize">
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
          <SidebarGroupLabel className="text-lg capitalize">
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
          <SidebarGroupLabel className="text-lg capitalize">
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

      <SidebarFooter>
        <Button variant="destructive">
          <Link to="/login" className="w-full">Logout</Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

