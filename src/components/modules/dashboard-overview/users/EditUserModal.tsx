import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const editSchema = z.object({
  id: z.string(),
  name: z.string().min(3).max(50),
  email: z.email(),
  phone: z.string().regex(/^01[3-9]\d{8}$/, "Invalid Bangladeshi phone number"),
  avatar: z.string().url().optional(),
  role: z.enum(["user", "agent", "admin"]),
  agentStatus: z.enum(["idk", "approved", "suspended"]).optional(),
  walletBalance: z.number().min(0).optional(),
  walletStatus: z.enum(["pending", "active", "blocked"]),
});

interface Props {
  user: any;
  onSave: (updatedUser: any) => void;
}

export default function EditUserModal({ user, onSave }: Props) {
  const [open, setOpen] = useState(false);
//   console.log(user?.wallet?.balance);
  const userBalance = user?.wallet?.balance;

  const form = useForm<z.infer<typeof editSchema>>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      id: user._id || "",
      name: user.name || "",
      email: user.email || "",
      phone: user.phone?.toString() || "",
      agentStatus: user.agentStatus || "idk",
      walletBalance: Number(userBalance) || 0,
      walletStatus: user?.wallet?.status || "",
      role: user.role?.[0] || "user",
    },
  });

  const handleSubmit = (values: z.infer<typeof editSchema>) => {
    console.log(`edit user values `,values)
    onSave(values);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="01xxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="01xxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agent Status</FormLabel>
                  <FormControl>
                    <div className="flex gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="idk"
                          checked={field.value === "idk"}
                          className="h-4 w-4"
                        />
                        <span>IDK</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="approved"
                          checked={field.value === "approved"}
                          className="h-4 w-4"
                        />
                        <span>Approved</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="suspended"
                          checked={field.value === "suspended"}
                          className="h-4 w-4"
                        />
                        <span>Suspended </span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="walletBalance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wallet Balance</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder=""
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="walletStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wallet Status</FormLabel>
                  <FormControl>
                    <div className="flex gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="active"
                          checked={field.value === "active"}
                          className="h-4 w-4"
                        />
                        <span>Active</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="blocked"
                          checked={field.value === "blocked"}
                          className="h-4 w-4"
                        />
                        <span>Block</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="pending"
                          checked={field.value === "pending"}
                          className="h-4 w-4"
                        />
                        <span>Pending</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <div className="flex gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="user"
                          checked={field.value === "user"}
                          className="h-4 w-4"
                        />
                        <span>User</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="agent"
                          checked={field.value === "agent"}
                          className="h-4 w-4"
                        />
                        <span>Agent</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
