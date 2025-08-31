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
import { useCashInMutation, useCashOutMutation, useSendMoneyMutation, useTopUpMutation } from "@/redux/features/wallet/wallet.api";
import { useMyProfileQuery } from "@/redux/features/user/user.api";
import { useNavigate } from "react-router";
import NotFound from "@/pages/notFound.page";

export function CashInForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const {data:userData} = useMyProfileQuery(undefined);
  const [sendCashInError, setSendCashInError] = useState<string>("");
  const [sendCashInPost, { isLoading , error }] = useCashInMutation()
  const navigate = useNavigate();

  const hasAccess = userData?.data?.userInfo?.role.includes("agent");
      if (!hasAccess) {
        return <NotFound />;
      }



  if(userData?.data?.userInfo?.wallet?.status != "active" ) {
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
      const res = await sendCashInPost(data).unwrap();
      toast.success("Cash-In sent successfully.", { id: toastId } );
      navigate("/transaction");
    } catch (error:any) {
      toast.error("something went wrong.", { id: toastId });
      setSendCashInError(error.data.message);
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
          <CardTitle className="text-2xl font-bold">Cash-In Securely</CardTitle>
        </CardHeader>

        <CardContent className="space-t-6 w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full max-w-md"
            >
              {/* Phone Number */}
              <FormField
                control={form.control}
                name="sendTo"
                rules={{
                  required: "Phone Number is required",
                  pattern: {
                    value: /^(01[3-9]\d{8})$/,
                    message: "Enter a valid BD phone number.",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="BD phone number"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) => {
                        field.onChange(e);
                        setSendCashInError("");
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
                        if (sendCashInError) setSendCashInError("");
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
                {isLoading ? "Sending..." : "Sent Now"}
              </Button>
            </form>
          </Form>
          <h1 className="text-red-500 text-center">{sendCashInError}</h1>
        </CardContent>

        <CardFooter className="flex flex-col justify-center">
          
        </CardFooter>
      </Card>
    </div>
  );
}
