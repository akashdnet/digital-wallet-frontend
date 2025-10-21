import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


export const formSchema = z
  .object({
    old_password: z.string().min(6, "Old password is required"),
    new_password: z.string().min(6, "New password must be at least 6 characters"),
    confirm_new_password: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "Passwords do not match",
    path: ["confirm_new_password"], 
  })


export function useValidationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_new_password: "",
    },
  })

  return form
}
