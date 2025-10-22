import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import TextFomField from "@/components/TextFomField"
import { formSchema, useValidationForm } from "./SignupFormValidation"
import { Link } from "react-router-dom"





interface props {
    // handleUpdateProfile: any;
}



export function FormComponent({}:props) {
    const form = useValidationForm()
 
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }


  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl space-y-8">
        {/* <h1 className="text-lg font-semibold">Update your information</h1> */}
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">






          <TextFomField
          form={form}
          name="name"
          label="Full Name"
          placeholder="Tony Stark"   
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
          label="Phone Number"
          placeholder=""   
          />


          {/* role  */}



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





        <div className="flex flex-col gap-4 justify-stretch ">
          <h1 className="text-right text-gray-500"> Already have an account? <span className="text-blue-500"> <Link to="/login">Login</Link></span></h1>
            <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </section>
  )
}