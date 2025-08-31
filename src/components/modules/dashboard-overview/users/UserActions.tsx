import { Button } from "@/components/ui/button";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

export default function UserActions({ onEdit, onDelete }: Props) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={onEdit}>
        Edit
      </Button>
      <Button variant="destructive" size="sm" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
}
