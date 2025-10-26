import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  phone: z.string().regex(/^01[0-9]{9}$/, {
    message: "Invalid BD phone number",
  }),
  password: z.string().min(8, "New password must be at least 8 characters"),
  confirm_password: z.string().min(8, "Confirm password is required"),
  role: z.enum(["user", "agent"], {error: "Role must be either 'user' or 'agent'"} ),
}) .refine((data) => data.password === data.confirm_password, {
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
      password: "",
      confirm_password: "",
      role: "user",
    },
  })

  return form
}
