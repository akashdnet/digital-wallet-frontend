import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { FormComponent } from "./ProfileFormComponent";

interface EditUserModalProps {
  user: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EditUserModal({ user, open, onOpenChange }: EditUserModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        

        
        <FormComponent
          data={user}
          onModalClose={() => onOpenChange(false)} 
        />
      </DialogContent>
    </Dialog>
  );
}
