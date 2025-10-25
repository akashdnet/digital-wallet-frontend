import { useAuth } from "@/hooks/useAuth";
import { Link, Outlet } from "react-router-dom";
import Header from "../modules/home/Header";
import FooterComponent from "../modules/home/FooterComponent";



interface TNav{
  label: string
  path: string
}










export default function CommonLayout() {

  const {isLoggedIn, isLoading} = useAuth()


  const rLoading = isLoading? "" : "/login"
  const authNav= !isLoggedIn? {label: "Login", path: rLoading } : {label: "Dashboard", path: "/dashboard"}

  const nav: TNav[]= [
  {label: "Home", path: "/"},
  {label: "About", path: "/about"},
  {label: "Contact", path: "/contact"},
  authNav,
  
  
]







  return (
    <main className="font-mono min-h-screen flex flex-col">
        <Header/>
        <div className=" flex-1">
          <Outlet/>
        </div>
        <FooterComponent/>
    </main>
  )
}
