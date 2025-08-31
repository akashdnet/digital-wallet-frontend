import {
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import StatusSelect from "./StatusSelect";
import { Button } from "@/components/ui/button";
import EditUserModal from "./EditUserModal";

type TWalletStatus = "pending" | "active" | "blocked";

type TUser = {
  _id?: string;
  avatar?: string;
  name: string;
  wallet: {
    status: TWalletStatus;
  };
};

interface Props {
  user: TUser;
  onStatusChange: (id: string, status: TWalletStatus) => void;
  onEdit: (updatedUser: TUser) => void;
  onDelete: (id: string) => void;
  statusLoading: boolean;
}

export default function UserRow({
  user,
  onStatusChange,
  onEdit,
  onDelete,
  statusLoading,
}: Props) {
  return (
    <TableRow>
      <TableCell>
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>
        <StatusSelect
          value={user.wallet.status}
          disabled={statusLoading}
          onChange={(status) => onStatusChange(user._id!, status)}
        />
      </TableCell>
      <TableCell>
        <div className="flex gap-2">
          <EditUserModal user={user} onSave={onEdit} />
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(user._id!)}
          >
            Delete
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
