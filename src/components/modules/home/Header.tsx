import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { Menu, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {

    const {isLoggedIn} = useAuth()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link to="/" className="flex items-center space-x-2">
            <Wallet className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">D-Wallet</span>
          </Link>

          
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.href}
                      className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {isLoggedIn? 
          <Button asChild>
              <Link to="dashboard/profile">Dashboard</Link>
          </Button>
            :
            <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" id="login" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button id="signup" asChild>
              <Link to="/sign-up">Open Account</Link>
            </Button>
          </div>
        
        }
          

          





          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Separator className="my-4" />
                  {isLoggedIn ?
                   <Button asChild>
              <Link to="dashboard/profile">Dashboard</Link>
          </Button>
                  : 
                  
                  <div>
                    <Button variant="outline" asChild>
                    <Link to="/login" id="login">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/sign-up" id="signup">Open Account</Link>
                  </Button>
                  </div>
                  
                  
                  
                  
                  }
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
