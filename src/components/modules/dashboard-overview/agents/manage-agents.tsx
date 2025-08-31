import React, { useEffect, useState } from "react";
import { useDashboardOverviewQuery, useDeleteUserProfileByAdminMutation, useUpdateUserProfileByAdminMutation } from "@/redux/features/admin/admin.api";
import { useStatusMutation } from "@/redux/features/wallet/wallet.api";
import { toast } from "sonner";
import UserTable from "./UserTable";

type TWalletStatus = "pending" | "active" | "blocked";

type TUser = {
  _id?: string;
  avatar?: string;
  name: string;
  wallet: {
    status: TWalletStatus;
  };
};

export default function ManageAgents() {
  const { data, isLoading, error } = useDashboardOverviewQuery(undefined);
  const [userProfileUpdatePost, { isLoading: userProfileUpdateLoading, error: userProfileUpdateError }] = useUpdateUserProfileByAdminMutation()
  const [userDeletePost] = useDeleteUserProfileByAdminMutation()
  const [statusPost, { isLoading: statusLoading }] = useStatusMutation();

  const userList: TUser[] = data?.data?.agentList || [];
  const [users, setUsers] = useState<TUser[]>(userList);

  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  const handleStatusChange = async (userId: string, newStatus: TWalletStatus) => {
    setUsers((prev) =>
      prev.map((user) =>
        user._id === userId ? { ...user, wallet: { status: newStatus } } : user
      )
    );

    try {
      await statusPost({ id: userId, status: newStatus }).unwrap();
      console.log(`✅ Status updated for user ${userId} to ${newStatus}`);
    } catch (err) {
      console.error(`❌ Failed to update status for user ${userId}`, err);
    }
  };

  
  const handleEdit = async (data:any) => {
    const toastId = toast.loading("Updating user profile...");
    try {
      await userProfileUpdatePost(data).unwrap()
      toast.success("User profile updated successfully.", { id: toastId });
    } catch (error:any) {
      toast.error("Failed to update user profile.", { id: toastId });
      console.error("Failed to update user profile:", error);
      
    }
  };

  const handleDelete = async (userId: string) => {
    const toastId = toast.loading("Deleting user...");

    try {
      await userDeletePost(userId).unwrap()
      toast.success("User deleted successfully.", { id: toastId });
    } catch (error:any) {
      toast.error("Failed to delete user.", { id: toastId });
      console.log(error)
    }
  };

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error loading users</div>;

  return (
    <div className="p-6 shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Agents</h2>
      <UserTable
        users={users}
        onStatusChange={handleStatusChange}
        onEdit={handleEdit}
        onDelete={handleDelete}
        statusLoading={statusLoading}
      />
    </div>
  );
}
