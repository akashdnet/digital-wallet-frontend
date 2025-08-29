import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { useSendMoneyMutation } from "@/redux/features/wallet/wallet.api";
import { useMyProfileQuery } from "@/redux/features/user/user.api";

export function SendMoneyForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const {data:userData} = useMyProfileQuery(undefined);
  const [sendMoneyError, setSendMoneyError] = useState<string>("");
  const [sendMoneyPost, { isLoading , error }] = useSendMoneyMutation()

  if(userData.data.wallet.status != "active" ) {
    return <h1 className="text-red-900 text-center p-3 bg-red-300 rounded-2xl">Your wallet is not active. Please activate your wallet for sending money.</h1>
  }
  

  const form = useForm({
    defaultValues: {
      sendTo: "",
      amount: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    const toastId = toast.loading("Sending...");


    try {
      const res = await sendMoneyPost(data).unwrap();
      toast.success("Money sent successfully.", { id: toastId } );
      // console.log(res);
    } catch (error:any) {
      toast.error("something went wrong.", { id: toastId });
      setSendMoneyError(error.data.message);
      // console.log(error)
    }
  };

  return (
    <div
      className={cn(
        "flex flex- w-full items-center justify-center ",
        className
      )}
      {...props}
    >
      <Card className="max-w-md w-full mx-auto ">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-2xl font-bold">Send Money Securely</CardTitle>
        </CardHeader>

        <CardContent className="space-t-6 w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full max-w-md"
            >
              {/* Email or Phone Number */}
              <FormField
                control={form.control}
                name="sendTo"
                rules={{
                  required: "Email or Phone Number is required",
                  pattern: {
                    value: /^(01[3-9]\d{8}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                    message: "Enter a valid email or bd phone number.",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email or Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com or bd phone number"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) => {
                        field.onChange(e);
                        setSendMoneyError("");
                      }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Amount"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) => {
                        field.onChange(e);
                        if (sendMoneyError) setSendMoneyError("");
                      }}
                        required
                        minLength={8}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full cursor-pointer">
                {isLoading ? "Sending..." : "Send Money"}
              </Button>
            </form>
          </Form>
          <h1 className="text-red-500 text-center">{sendMoneyError}</h1>
        </CardContent>

        <CardFooter className="flex flex-col justify-center">
          
        </CardFooter>
      </Card>
    </div>
  );
}
