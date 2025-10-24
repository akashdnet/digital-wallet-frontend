import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import TextFomField from "@/components/TextFomField"
import { formSchema, useValidationForm } from "./ProfileFormValidation"
import { useState } from "react"
import ImageInputComponent from "@/components/ImageInputComponent"
import { toast } from "sonner"
import { useUpdateProfileMutation } from "@/redux/features/profile/profile.api"





interface props {
    onFormClose: any;
    data: any;
}



export function FormComponent({onFormClose, data}:props) {

  const [loading, setLoading] = useState(false);

  const [updateProfile] = useUpdateProfileMutation();

   const [file, setFile] = useState<any>(null);
    const form = useValidationForm(data)

 
  
  async function onSubmit(values: z.infer<typeof formSchema>) {

    const formData = new FormData();

    formData.append("data", JSON.stringify(values));
    if(file){
      formData.append("file", file);
      console.log(`image data:`, file)
    }

     setLoading(true);
    const loadingID = toast.loading(`Updating...`);
    try {
      await updateProfile({data:formData, userID:data._id}).unwrap();
      setLoading(false);
      toast.success(`User Profile has been Updated successfully.`, {id: loadingID});
      onFormClose("none")

    } catch (error: any) {
      toast.error(`Failed to update User Profile.`, {id: loadingID});
      console.error("User Profile update error:", error);
      setLoading(false);
    } 

  }


  return (
    <section className="max-w-md mx-auto px-6 pb-4  bg-white shadow-lg rounded-xl   ">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">



         <ImageInputComponent
          imageLink={data?.avatar}
          onFileHandle={(file) => setFile(file)}
        />



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




        <div className="flex flex-col gap-4 justify-stretch mt-10">
            <Button disabled={loading} type="submit">{ loading ? "Updating..." : "Update"}</Button>
        <Button type="button" onClick={()=> onFormClose("none")} variant="outline">Cancel</Button>
        </div>
      </form>
    </Form>
    </section>
  )
}