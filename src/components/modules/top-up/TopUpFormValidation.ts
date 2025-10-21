import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


export const formSchema = z.object({
  phone: z.string().regex(/^01[0-9]{9}$/, {
    message: "Invalid BD phone number",
  }),
   amount: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Amount must be a valid number")
})


export function useValidationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      amount: "",
    },
  })

  return form
}
