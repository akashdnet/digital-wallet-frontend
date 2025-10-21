import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import TextFomField from "@/components/TextFomField"
import { formSchema, useValidationForm } from "./TopUpFormValidation"





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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">






          <TextFomField
          form={form}
          name="phone"
          label="Phone Number"
          placeholder="01xxxxxxxxx"   
          />
          
          <TextFomField
          form={form}
          name="amount"
          label="Amount"
          placeholder=""   
          />





        <div className="flex flex-col gap-4 justify-stretch">
            <Button type="submit">Submit</Button>
        {/* <Button type="button" onClick={()=> handleUpdateProfile("none")} variant="outline">Cancel</Button> */}
        </div>
      </form>
    </Form>
    </section>
  )
}