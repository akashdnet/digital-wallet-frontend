import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export const formSchema = z
  .object({
    oldPassword: z.string().min(8, "Old password is required"),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
    confirm_new_password: z.string().min(8, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirm_new_password, {
    message: "Passwords do not match",
    path: ["confirm_new_password"], 
  })


export function useValidationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "12345678",
      newPassword: "12345678",
      confirm_new_password: "12345678",
    },
  })

  return form
}
