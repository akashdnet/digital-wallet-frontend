import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDeleteUserMutation, useUpdateWalletStatusMutation } from "@/redux/features/admin/admin.api";
import clsx from "clsx";
import { toast } from "sonner";
import { useState } from "react";
import EditUserModal from "./EditUserModal";

interface Props {
  data: any;
  isLoading?: boolean;
}

export default  function TableData({ data }: Props) {

  const [updateWalletStatus] = useUpdateWalletStatusMutation();

const [deleteUser] = useDeleteUserMutation();


  const [currentlyApprovingId, setCurrentlyApprovingId] = useState<string | null>(null);
  const [currentlyDeletingId, setCurrentlyDeletingId] = useState<string | null>(null);
  const [openModalId, setOpenModalId] = useState<string | null>(null);












  const handleDelete =  async (user: any) => {

    setCurrentlyDeletingId(user._id);
    const loadingID = toast.loading(`Deleting...`);

    try {
      
       await deleteUser(user._id).unwrap();
      toast.success(
        `${user.name} has been deleted successfully.`,
        { id: loadingID }
      );
    } catch (error: any) {
      toast.error(`Failed to delete ${user.name}.`, {
        id: loadingID,
      });
      console.error(" Error to delete user:", error);
    } finally {
      setCurrentlyApprovingId(null);
    }
  };





  const handleApprove = async (user: any, status: "active" | "blocked") => {
    setCurrentlyApprovingId(user._id);
    const loadingID = toast.loading(`${status === "active" ? "Approving" : "Blocking"}...`);

    try {
      await updateWalletStatus({ userID: user._id, status }).unwrap();
      toast.success(
        `${user.name} has been ${status === "active" ? "activated" : "blocked"} successfully.`,
        { id: loadingID }
      );
    } catch (error: any) {
      toast.error(`Failed to ${status === "active" ? "activate" : "block"} ${user.name}.`, {
        id: loadingID,
      });
      console.error("Update wallet error:", error);
    } finally {
      setCurrentlyApprovingId(null);
    }
  };

  return (
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[150px] text-left">Wallet Status</TableHead>
      <TableHead className="w-[180px] text-center">Name</TableHead>
      <TableHead className="w-[250px] text-center hidden md:table-cell">Email</TableHead>
      <TableHead className="w-[220px] text-right">Action</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {data?.map((user: any, idx: number) => (
      <TableRow
        key={user._id}
        className={clsx(
          "transition-colors",
          idx % 2 === 0 ? "bg-gray-50/60" : "bg-white"
        )}
      >
        {/* Wallet Status */}
        <TableCell className="w-[150px] text-left">
          <span
            className={clsx(
              "px-2 py-0.5 rounded-full text-xs font-semibold uppercase",
              user.wallet?.status === "active" && "bg-green-100 text-green-700",
              user.wallet?.status === "pending" && "bg-yellow-100 text-yellow-700",
              user.wallet?.status === "blocked" && "bg-red-100 text-red-700"
            )}
          >
            {user.wallet?.status || "N/A"}
          </span>
        </TableCell>

        {/* Name */}
        <TableCell className="w-[180px] font-medium text-center">
          {user.name}
        </TableCell>

        {/* Email */}
        <TableCell className="w-[250px] text-center hidden md:table-cell">
          {user.email}
        </TableCell>

        {/* Action */}
        <TableCell className="w-[220px] text-right space-x-2">
          {user.wallet?.status === "active" ? (
            <button
              disabled={currentlyApprovingId === user._id}
              onClick={() => handleApprove(user, "blocked")}
              className="px-3 py-1 rounded-md bg-red-500 text-white text-sm hover:bg-red-600 disabled:opacity-70"
            >
              {currentlyApprovingId === user._id ? "Blocking..." : "Set as Block"}
            </button>
          ) : (
            <button
              disabled={currentlyApprovingId === user._id}
              onClick={() => handleApprove(user, "active")}
              className="px-3 py-1 rounded-md bg-green-500 text-white text-sm hover:bg-green-600 disabled:opacity-70"
            >
              {currentlyApprovingId === user._id ? "Approving..." : "Set as Approve"}
            </button>
          )}

          <EditUserModal
            user={user}
            open={openModalId === user._id}
            onOpenChange={(isOpen) => setOpenModalId(isOpen ? user._id : null)}
          />

          <button
            disabled={currentlyDeletingId === user._id}
            onClick={() => handleDelete(user)}
            className="px-3 py-1 rounded-md bg-gray-700 text-white text-sm hover:bg-gray-800"
          >
            {currentlyDeletingId === user._id ? "Deleting..." : "Delete"}
          </button>
        </TableCell>
      </TableRow>
    ))}

    {data?.length === 0 && (
      <TableRow>
        <TableCell colSpan={4} className="text-center py-6 text-gray-500">
          No pending request found
        </TableCell>
      </TableRow>
    )}
  </TableBody>
</Table>

  );
}