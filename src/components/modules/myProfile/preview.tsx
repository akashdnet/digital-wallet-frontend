import { Button } from "@/components/ui/button";
import { useMyProfileQuery } from "@/redux/features/user/user.api";
import { TUser } from "@/redux/features/user/user.type";
import { useNavigate } from "react-router";




function Preview  ({onEditMode}:any) {
    const navigate = useNavigate()
    const {data, isLoading, error} = useMyProfileQuery(undefined)
    const user:TUser = data?.data

    if(isLoading){
        return <div>Loading...</div>
    }


  return (
    <div className="max-w-3xl mx-auto p-6">
        
      {/* Avatar & Name */}
      <div className="flex items-center gap-4">
        <img
          src={user?.avatar}
          alt="Avatar"
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="text-sm text-gray-500">Phone</label>
          <p className="font-medium"> {user?.phone ? `${user?.phone}`: <h1 className="text-sm text-gray-500">Not Available.</h1>} </p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Role</label>
          <p className="font-medium">{user?.role?.join(", ")}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Agent Status</label>
          <p className="font-medium capitalize">{user?.agentStatus}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Wallet Balance</label>
          <p className="font-medium">৳ {user?.wallet?.balance}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Wallet Status</label>
          <p className="font-medium capitalize">{user?.wallet?.status}</p>
        </div>
      </div>


    <div className="w-full flex flex-col justify-center items-center gap-2 mt-6">
        
            <Button onClick={onEditMode} className="w-full cursor-pointer" >Update Profile</Button>
            {/* <Button onClick={()=>{
                navigate("/change-password")
            }} className="w-full cursor-pointer">Change Password</Button> */}
    </div>


    </div>
  );
};

export default Preview;
