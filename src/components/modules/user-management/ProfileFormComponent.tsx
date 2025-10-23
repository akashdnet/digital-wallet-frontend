import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import TextFomField from "@/components/TextFomField"
import { formSchema, useValidationForm } from "./ProfileFormValidation"
import { useUpdateUserProfileMutation } from "@/redux/features/admin/admin.api"
import { toast } from "sonner"
import { useState } from "react"





interface props {
    onModalClose: any;
    data: any
}



export function FormComponent({onModalClose, data}:props) {
  const [loading, setLoading] = useState(false);

  const [updateUserProfile] = useUpdateUserProfileMutation();
    const form = useValidationForm(data)
 
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    setLoading(true);
    const loadingID = toast.loading(`Updating...`);
    try {
      await updateUserProfile({data:values, userID:data._id}).unwrap();
      setLoading(false);
      toast.success(`Agent Profile has been Updated successfully.`, {id: loadingID});
      onModalClose(false)
    } catch (error: any) {
      toast.error(`Failed to update User Profile.`, {id: loadingID});
      console.error("Agent Profile update error:", error);
      setLoading(false);
    } 
  }


  return (
    <section className="w-full mx-auto   space-y-8">
        <h1 className="text-lg font-semibold">Update <span className="uppercase font-extrabold mx-2">USER</span> information</h1>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">






          <TextFomField
          form={form}
          name="name"
          label="Full Name"
          placeholder="John Doe"   
          />
          
          <TextFomField
          form={form}
          name="email"
          label="Email"
          placeholder="username@email.com"   
          />

          <TextFomField
          form={form}
          name="phone"
          label="BD Phone Number"
          placeholder="01xxxxxxxxx"   
          />

          <TextFomField
          form={form}
          name="password"
          label="Password"
          placeholder=""   
          />




        <div className="flex flex-col gap-4 justify-stretch">
            <Button type="submit" disabled={loading}>{ loading ? "Updating..." : "Submit"}</Button>
        <Button type="button" onClick={()=> onModalClose(false)} variant="outline">Cancel</Button>
        </div>
      </form>
    </Form>
    </section>
  )
}