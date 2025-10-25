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
import LoadingPage from "../LoadingPage"
import { useAuth } from "@/hooks/useAuth"





interface props {
    // handleUpdateProfile: any;
}



export function FormComponent({}:props) {
  
  const navigate = useNavigate();



  
    const form = useValidationForm();
     const [login] = useLoginMutation();





  
  async function onSubmit(data: z.infer<typeof formSchema>) {
    const loadingID = toast.loading("Loading...");
    try {
      await login(data).unwrap();
      
        toast.success("Login Successful", {id: loadingID})
        navigate("/dashboard/profile")
      
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
          <h1> Do not have an account? <span className="text-blue-500"> <Link to="/sign-up">Sign Up</Link></span></h1>
            <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </section>
  )
}