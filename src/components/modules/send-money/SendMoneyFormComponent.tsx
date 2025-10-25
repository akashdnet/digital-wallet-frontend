import { z } from "zod"

import TextFomField from "@/components/TextFomField"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { useSendMoneyMutation } from "@/redux/features/wallet/wallet.api"
import { useState } from "react"
import { toast } from "sonner"
import { formSchema, useValidationForm } from "./SendMoneyFormValidation"





interface props {
    // handleUpdateProfile: any;
}



export function FormComponent({}:props) {
  const [loading, setLoading] = useState(false);



  const [sendMoney] = useSendMoneyMutation();
    const form = useValidationForm()
 
  
  async function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(`password compo: `,values)

 
     setLoading(true);
    const loadingID = toast.loading(`Sending...`);
    try {
      await sendMoney(values).unwrap();
      setLoading(false);
      toast.success(`Money has been sent successfully.`, {id: loadingID});


    } catch (error: any) {
      toast.error(error?.data?.message, {id: loadingID});
      console.error("Failed to send money:", error);
      setLoading(false);
    } 

  }


  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl space-y-8">
        {/* <h1 className="text-lg font-semibold">Update your information</h1> */}
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">






          <TextFomField
          form={form}
          name="to"
          label="Receiver Phone Number or Email Address"
          placeholder="01xxxxxxxxx or username@email.com"   
          />
          
          <TextFomField
          form={form}
          name="amount"
          label="Amount"
          placeholder=""   
          />





        <div className="flex flex-col gap-4 justify-stretch">
            <Button disabled={loading} type="submit">{ loading ? "Sending..." : "Send Money"}</Button>
        {/* <Button type="button" onClick={()=> handleUpdateProfile("none")} variant="outline">Cancel</Button> */}
        </div>
      </form>
    </Form>
    </section>
  )
}