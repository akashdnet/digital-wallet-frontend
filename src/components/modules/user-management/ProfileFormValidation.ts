import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


export const UserRoleSchema = z.enum(["user", "agent", "admin"]);
export type TUserRole = z.infer<typeof UserRoleSchema>;




export const UserRole = {
  USER: "user",
  AGENT: "agent",
  ADMIN: "admin",
} as const;




export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  phone: z
    .string()
    .regex(/^01[0-9]{9}$/, {
      message: "Invalid BD phone number",
    })
    .optional(),
  password: z.string().optional(),
});



export type TFormValues = z.infer<typeof formSchema>;

export function useValidationForm(data: any) {
  const form = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name || "",
      email: data?.email || "",
      phone: data?.phone || "",
      password: "",
    },
  });

  return form;
}