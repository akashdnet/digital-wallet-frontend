import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SidebarHeaderSkeleton } from './SidebarHeaderSkeleton';


interface props{
    userInfo:any;
  isLoading:boolean;
}



export default function SidebarHeaderComponent({userInfo, isLoading}:props) {

      const baseClass =
    "mt-1 inline-block w-fit rounded-full px-2 py-0.5 text-[10px] font-medium";

  const roleClass =
    userInfo?.role === "admin"
      ? "bg-red-100 text-red-700"
      : userInfo?.role === "agent"
      ? "bg-green-100 text-green-700"
      : "bg-blue-100 text-blue-700";

  

      if(isLoading){
        return <SidebarHeaderSkeleton/>
      }


  return (
    
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
                <h1 className="text-sm font-semibold text-gray-900">
                  {userInfo?.name}
                </h1>
                <h2 className="text-xs text-gray-500">{userInfo?.email}</h2>
                <span className={`${baseClass} ${roleClass}`}>
                  Role: <span className="uppercase mx-1">{userInfo?.role}</span>
                </span>
              </div>
            </section>
          </SidebarHeader>
          
  )
}
