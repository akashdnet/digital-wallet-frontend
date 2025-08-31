import Logo from '/logo.svg'
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMyProfileQuery } from "@/redux/features/user/user.api";
import { Link } from "react-router";
import { AuthApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { toast } from "sonner";
import { ModeToggle } from "../mode-toggle";
import { NavMain } from "../nav-main";
import { IconChartBar, IconDashboard, IconListDetails } from "@tabler/icons-react";




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









export default function GlassNavbar() {
  const { data } = useMyProfileQuery(undefined);
  const [postLogout] = useLogoutMutation(undefined);
  const dispatch = useAppDispatch();
  const email = data?.data?.userInfo?.email;
   const user = data?.data?.userInfo
  
  const roles = (role:TRoles)=>data?.data?.userInfo?.role.includes(role)
  const handleLogout = async () => {
    const id = toast.loading("Logging out...");
    try {
      await postLogout(undefined).unwrap();
      dispatch(AuthApi.util.resetApiState());
      toast.success("Logged out successfully.", { id });
    } catch (error: any) {
      toast.error(error.data.message || "Logout failed.", { id });
    }
  };
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        <div className='flex items-center gap-2'>
        <Link to="/" className="text-xl font-bold text-foreground drop-shadow flex items-center gap-2">
          <img src={Logo} className=" logo " alt="logo" />
          Digital Wallet Solution
        </Link>

        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className='home-guide'>
                <NavigationMenuLink
                  asChild
                  className="px-3 py-2 text-foreground hover:text-blue-400 transition"
                >
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className='services-guide'>
                <NavigationMenuLink
                  asChild
                  className="px-3 py-2 text-foreground hover:text-blue-400 transition"
                >
                  <Link to="/services">Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className='about-guide'>
                <NavigationMenuLink
                  asChild
                  className="px-3 py-2 text-foreground hover:text-blue-400 transition"
                >
                  <Link to="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className='contact-guide'>
                <NavigationMenuLink asChild className="px-3 py-2  hover:text-blue-400 transition">
                  <Link to="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div>
            <ModeToggle />
          </div>

          {email ? (
            <>
              <Button
                onClick={handleLogout}
                asChild
                variant={"destructive"}
                className=" text-white shadow-lg"
              >
                <Link to="/">Logout</Link>
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-2 auth-guide ">
              <Button
                asChild
                variant={"default"}
                className=" shadow-lg"
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild variant={"outline"} className="  shadow-lg">
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>








        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/20  border-white/30 text-foreground hover:bg-white/30"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white/10 backdrop-blur-md border-white/20 text-black"
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4 mx-2">
                <Link to="/" className="hover:underline dark:text-white">
                  Home
                </Link>
                <Link
                  to="/services"
                  className="hover:underline dark:text-white"
                >
                  Services
                </Link>
                <Link to="/about" className="hover:underline dark:text-white">
                  About
                </Link>
                <Link to="/contact" className="hover:underline dark:text-white">
                  Contact
                </Link>








{roles("admin") ? <NavMain items={navData?.admin} title="Admin Dashboard" />:(
          roles("agent") ? <NavMain items={navData?.agent} title="Agent Dashboard"/> :(
            roles("user") && <NavMain items={navData?.user} title="User Dashboard" />
          )
        )}



















                {email ? (
                  <>
                    <Button
                      onClick={handleLogout}
                      asChild
                      variant={"destructive"}
                      className=" text-white dark:text-gray-900 shadow-lg"
                    >
                      <Link to="/">Logout</Link>
                    </Button>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <Button
                      asChild
                      variant={"default"}
                      className=" text-white dark:text-gray-900 shadow-lg"
                    >
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button asChild variant={"outline"} className="dark:text-white  shadow-lg">
                      <Link to="/register">Sign Up</Link>
                    </Button>
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
