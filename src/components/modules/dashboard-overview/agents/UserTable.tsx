import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserRow from "./row";

type TWalletStatus = "pending" | "active" | "blocked";



interface Props {
  users: any;
  onStatusChange: (id: string, status: TWalletStatus) => void;
  onEdit: (updatedUser: any) => void;
  onDelete: (id: string) => void;
  statusLoading: boolean;
}

export default function UserTable({
  users,
  onStatusChange,
  onEdit,
  onDelete,
  statusLoading,
}: Props) {
  if (!users || users.length === 0) {
    return (
      <div className="text-center text-center py-6 text-muted-foreground">
        No Agents found.
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Avatar</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Wallet Status</TableHead>

          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user:any) => (
          <UserRow
            key={user._id}
            user={user}
            onStatusChange={onStatusChange}
            onEdit={onEdit}
            onDelete={onDelete}
            statusLoading={statusLoading}
          />
        ))}
      </TableBody>
    </Table>
  );
}
