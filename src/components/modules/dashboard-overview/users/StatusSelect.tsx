import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type TWalletStatus = "pending" | "active" | "blocked";

interface Props {
  value: TWalletStatus;
  disabled?: boolean;
  onChange: (status: TWalletStatus) => void;
}

export default function StatusSelect({ value, disabled, onChange }: Props) {
  return (
    <Select value={value} onValueChange={(val) => onChange(val as TWalletStatus)} disabled={disabled}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="blocked">Blocked</SelectItem>
      </SelectContent>
    </Select>
  );
}
