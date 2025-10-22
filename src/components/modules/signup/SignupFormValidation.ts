import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"




export const formSchema = z
  .object({
    name: z.string().min(3, "Name is required"),
    email: z.email("Invalid email address"),
    phone: z.string().regex(/^01[0-9]{9}$/, "Invalid BD phone number"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z.string().min(6, "Confirm password is required"),
    role: z.enum([ "user", "agent"] ),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"], 
  })


export function useValidationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "user",
      password: "",
      confirm_password: "",
    },
  })

  return form
}
