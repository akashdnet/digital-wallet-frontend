import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import TextFomField from "@/components/TextFomField"
import { formSchema, useValidationForm } from "./PasswordFormValidation";
import { useChangePasswordMutation } from "@/redux/features/profile/profile.api";
import { toast } from "sonner";
import { useState } from "react";





interface props {
    onFormClose: any;
}



export function FormComponent({onFormClose}:props) {
  const [loading, setLoading] = useState(false);


  const [changePassword] = useChangePasswordMutation()


    const form = useValidationForm()
 
  
  async function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(`password compo: `,values)

 
     setLoading(true);
    const loadingID = toast.loading(`Changed password...`);
    try {
      await changePassword(values).unwrap();
      setLoading(false);
      toast.success(`Password has been changed successfully.`, {id: loadingID});
      onFormClose("none")

    } catch (error: any) {
      toast.error(`Failed to change password.`, {id: loadingID});
      console.error("Failed to change password:", error);
      setLoading(false);
    } 

  }


  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl space-y-8">
        <h1 className="text-lg font-semibold">Change your password</h1>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">






          <TextFomField
          form={form}
          name="oldPassword"
          label="Old Password"
          placeholder=""   
          />
          
          <TextFomField
          form={form}
          name="newPassword"
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
            <Button disabled={loading} type="submit">{ loading ? "Submitting..." : "Submit"}</Button>
        <Button type="button" onClick={()=> onFormClose("none")} variant="outline">Cancel</Button>
        </div>
      </form>
    </Form>
    </section>
  )
}