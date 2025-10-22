import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import TextFomField from "@/components/TextFomField"
import { formSchema, useValidationForm } from "./LoginFormValidation"
import { Link, useNavigate } from "react-router-dom"
import { useLoginMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"





interface props {
    // handleUpdateProfile: any;
}



export function FormComponent({}:props) {
    const form = useValidationForm();
     const [login] = useLoginMutation();
     const navigate = useNavigate();
  
  async function onSubmit(data: z.infer<typeof formSchema>) {
    const loadingID = toast.loading("Loading...");
    try {
      const res = await login(data).unwrap();
      if(res.success){
        toast.success(res.message, {id: loadingID})
        navigate("/dashboard/profile")
      }else{
        toast.error(res.message, {id: loadingID})
      }
      console.log(res);
    } catch (error:any) {
      toast.error(error.data.message, {id: loadingID})
      console.log(error)
    }
  }


  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl space-y-8">
        {/* <h1 className="text-lg font-semibold">Update your information</h1> */}
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">






          <TextFomField
          form={form}
          name="email"
          label="Email"
          placeholder="username@email.com"   
          />
          
          <TextFomField
          form={form}
          name="password"
          label="Password"
          placeholder=""   
          />





        <div className="flex flex-col gap-4 justify-stretch text-right text-gray-500">
          <h1> Do not have an account? <span className="text-blue-500"> <Link to="/signup">Sign Up</Link></span></h1>
            <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </section>
  )
}