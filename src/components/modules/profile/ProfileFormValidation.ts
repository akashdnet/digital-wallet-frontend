import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export const formSchema = z.object({
  id: z.string("ID is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^01[0-9]{9}$/, {
    message: "Invalid BD phone number",
  }),
})


export function useValidationForm(data:any) {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: data?._id || "",
      name: data?.name || "",
      email: data?.email ||"",
      phone: data?.phone ||"",
    },
  })

  return form
}
