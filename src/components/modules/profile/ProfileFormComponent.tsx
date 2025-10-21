import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import TextFomField from "@/components/TextFomField"
import { formSchema, useValidationForm } from "./ProfileFormValidation"





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
        <h1 className="text-lg font-semibold">Update your information</h1>
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




        <div className="flex flex-col gap-4 justify-stretch">
            <Button type="submit">Submit</Button>
        <Button type="button" onClick={()=> handleUpdateProfile("none")} variant="outline">Cancel</Button>
        </div>
      </form>
    </Form>
    </section>
  )
}