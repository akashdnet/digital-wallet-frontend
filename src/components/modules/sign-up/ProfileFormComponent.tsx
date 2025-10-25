import { z } from "zod"

import ImageInputComponent from "@/components/ImageInputComponent"
import RadioFormField from "@/components/RadioFormField"
import TextFomField from "@/components/TextFomField"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { useRegisterMutation } from "@/redux/features/auth/auth.api"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { formSchema, useValidationForm } from "./ProfileFormValidation"






interface props {

}



export function FormComponent({}:props) {

  const [loading, setLoading] = useState(false);

const navigate = useNavigate();

  const [createAccount] = useRegisterMutation();

   const [file, setFile] = useState<any>(null);
    const form = useValidationForm()

 
  
  async function onSubmit(values: z.infer<typeof formSchema>) {

    const formData = new FormData();

    formData.append("data", JSON.stringify(values));
    if(file){
      formData.append("file", file);
      // console.log(`image data:`, file)
    }


    console.log(`data`, values)


     setLoading(true);
    const loadingID = toast.loading(`Creating...`);
    try {
      console.log(`form data:`, values)
      await createAccount(formData).unwrap();
      setLoading(false);
      navigate("/login")
      toast.success(`Account has been created successfully.`, {id: loadingID});




    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to create Account.", {id: loadingID});
      console.error(" Failed to create Account:", error);
      setLoading(false);
    } 

  }


  return (
    <section className="max-w-md mx-auto px-6 pb-4  bg-white shadow-lg rounded-xl   ">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">



         <ImageInputComponent
          imageLink=""
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
          <TextFomField
          form={form}
          name="password"
          label="Password"
          placeholder=""   
          />
          <TextFomField
          form={form}
          name="confirm_password"
          label="Confirm Password"
          placeholder=""   
          />

          <RadioFormField
          form={form}
          name="role"
          label="Role"
          />



        <div className="flex flex-col gap-4 justify-stretch mt-10">
          
        <h1 className="text-right text-gray-500"> Already have an account? <span className="text-blue-500"> <Link to="/login">Login</Link></span></h1>
            <Button disabled={loading} type="submit">{ loading ? "Creating account..." : "Create Account"}</Button>
        </div>
      </form>
    </Form>
    </section>
  )
}