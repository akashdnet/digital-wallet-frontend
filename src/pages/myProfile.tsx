import { useMyProfileQuery } from "@/redux/features/user/user.api";
import { TUser } from "@/redux/features/user/user.type";
import React from "react";
import { useNavigate } from "react-router";




function ProfilePage  () {
    const navigate = useNavigate();
    const {data, isLoading, error} = useMyProfileQuery(undefined)
    const user:TUser = data?.data

    if(isLoading){
        return <div>Loading...</div>
    }

    if (!user?.email) {
        navigate("/login")
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
          <p className="font-medium">+880{user?.phone}</p>
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

    </div>
  );
};

export default ProfilePage;
