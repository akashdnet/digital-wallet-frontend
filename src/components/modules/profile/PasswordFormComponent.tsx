import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import TextFomField from "@/components/TextFomField"
import { formSchema, useValidationForm } from "./PasswordFormValidation";





interface props {
    handleUpdateProfile: any;
}



export function FormComponent({handleUpdateProfile}:props) {
    const form = useValidationForm()
 
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }


  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl space-y-8">
        <h1 className="text-lg font-semibold">Change your password</h1>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">






          <TextFomField
          form={form}
          name="old_password"
          label="Old Password"
          placeholder=""   
          />
          
          <TextFomField
          form={form}
          name="new_password"
          label="New Password"
          placeholder=""   
          />

          <TextFomField
          form={form}
          name="confirm_new_password"
          label="Confirm New Password"
          placeholder=""   
          />




        <div className="flex flex-col gap-4 justify-stretch">
            <Button type="submit">Submit</Button>
        <Button type="button" onClick={()=> handleUpdateProfile("none")} variant="outline">Cancel</Button>
        </div>
      </form>
    </Form>
    </section>
  )
}