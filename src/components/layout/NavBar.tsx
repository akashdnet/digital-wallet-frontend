import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";
import { useMyProfileQuery } from "@/redux/features/user/user.api";
import { AuthApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
  isLogin?: {
    profile: {
      title: string;
      url: string;
      className: string;
    };
    transaction: {
      title: string;
      url: string;
      className: string;
    };
    sendMoney: {
      title: string;
      url: string;
      className: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Digital Wallet Solution",
  },
  // menu = [
  //   { title: "Home", url: "#" },
  //   {
  //     title: "Pricing",
  //     url: "#",
  //   },
  //   {
  //     title: "Blog",
  //     url: "#",
  //   },
  // ],
  menu = [],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/register" },
  },
  isLogin = {
    profile: {
      title: "My Profile",
      url: "/profile",
      className: " ",
    },
    transaction: {
      title: "Transactions",
      url: "/transaction",
      className: "",
    },
    sendMoney: {
      title: "Send Money",
      url: "/send-money",
      className: "",
    },
  },
}: Navbar1Props) => {
  const { data, isLoading, error } = useMyProfileQuery(undefined);
  const [postLogout] = useLogoutMutation(undefined);
  const dispatch = useAppDispatch();

  console.log(`profile data`, data);

  const handleLogout = async () => {
    await postLogout(undefined);
    dispatch(AuthApi.util.resetApiState());
  };

  return (
    <section className="py-4 px-8">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <ul className="flex gap-3 text-lg items-center  ">
              {data?.data?.userInfo?.email ? (
                <>
                  {Object.entries(isLogin).map(([key, item]) => (
                    <li
                      key={key}
                      className={` hover:underline cursor-pointer ${item.className} hover:no-underline`}
                    >
                      <Link to={item.url}>{item.title}</Link>
                    </li>
                  ))}
                  <li>
                    <Button
                      asChild
                      variant="destructive"
                      onClick={handleLogout}
                      className="cursor-pointer ml-5"
                      size="sm"
                    >
                       <span>Logout</span>
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <Button asChild variant="outline" size="sm">
                    <Link to={auth.login.url}>{auth.login.title}</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link to={auth.signup.url}>{auth.signup.title}</Link>
                  </Button>
                </>
              )}
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} to={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      to={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Navbar;
