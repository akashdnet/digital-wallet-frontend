import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUpdateWalletStatusMutation } from "@/redux/features/admin/admin.api";
import clsx from "clsx";
import { toast } from "sonner";
import { useState } from "react";

interface Props {
   data: any;
  isLoading?: boolean;
}

export default function TableData({ data, isLoading }: Props) {
  const [updateWalletStatus] = useUpdateWalletStatusMutation();
  const [currentlyApprovingId, setCurrentlyApprovingId] = useState<string | null>(null); 

  const handleApprove = async (user: any, status: "active" | "blocked") => {
    setCurrentlyApprovingId(user._id); 
    const loadingID = toast.loading(`${status === "active" ? "Approving" : "Blocking"}...`);

    try {
      await updateWalletStatus({ userID: user._id, status }).unwrap(); 
      toast.success(
        `${user.name} has been activated successfully.`,
        { id: loadingID }
      );
    } catch (error: any) {
      toast.error(`Failed to activate ${user.name}.`, {
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
          <TableHead className="text-left">Status</TableHead>
          <TableHead className="text-center">Name</TableHead>
          <TableHead className="text-center hidden md:block">Email</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.map((user: any, idx: number) => (
          <TableRow
            key={user._id}
            className={clsx("transition-colors", idx % 2 === 0 ? "bg-gray-50/60" : "bg-white")}
          >
            <TableCell className="text-left">
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

            <TableCell className="font-medium text-center">{user.name}</TableCell>
            <TableCell className="text-center hidden md:block">{user.email}</TableCell>

            <TableCell className="text-right">
              {user.wallet?.status === "pending" && (
                <button
                  disabled={currentlyApprovingId === user._id} 
                  onClick={() => handleApprove(user, "active")}
                  className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 disabled:opacity-70"
                >
                  {currentlyApprovingId === user._id ? "Approving..." : "Mark as Approve"}
                </button>
              )}
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