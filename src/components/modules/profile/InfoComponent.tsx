import { Button } from "@/components/ui/button";
import { RxAvatar } from "react-icons/rx";


interface props {
    handleUpdateProfile: any;
    data: any
}

export default function InfoComponent({handleUpdateProfile, data}:props) {
  console.log(data)
  return (
    <div className="max-w-md mx-auto md:p-6 p-3 bg-white shadow-lg rounded-xl space-y-8">
      <h1 className="text-lg font-semibold"> Your profile information </h1>


      <div className="flex flex-col items-center space-y-3">
        {data?.avatar ? <img
          src={data?.avatar}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-4 border-gray-200 shadow"
        />: 
        <RxAvatar className="w-20 h-20" />
        }
      </div>







      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Name:</span>
          <span className="text-gray-900">{data?.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Email:</span>
          <span className="text-gray-900">{data?.email}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Phone:</span>
          <span className="text-gray-900">{data?.phone}</span>
        </div>
       <div className="mt-4 space-y-1">
         <Button onClick={()=> handleUpdateProfile("update")} className="w-full ">Update Profile</Button>
        <Button onClick={()=>handleUpdateProfile("pass")} className="w-full ">Change Password</Button>
       </div>
      </div>


      <div className="p-4 bg-gray-50 rounded-lg space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Account Type:</span>
          <span className="uppercase text-gray-600 font-semibold">{data?.role}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Status:</span>
          <span className="uppercase text-green-600 font-semibold">{data?.wallet?.status}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Balance:</span>
          <span className="font-semibold">Tk {data?.wallet?.balance}</span>
        </div>
      </div>
    </div>
  );
}
