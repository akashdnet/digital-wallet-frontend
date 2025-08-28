import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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
import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";
import { AuthApi, useLoginMutation } from "@/redux/features/auth/auth.api";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hook";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [loginError, setLoginError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const [postLogin] = useLoginMutation();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    try {
      const res = await postLogin(data).unwrap();
      toast.success("Logged in successfully.");
      dispatch(AuthApi.util.resetApiState());
      // console.log(res);
      navigate("/");
    } catch (error:any) {
      toast.error("Unidentified credential.");
      setLoginError(error.data.message);
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
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>

          <CardDescription className="space-y-2">
            <Button
              type="button"
              variant="default"
              className="w-full flex justify-center items-center gap-2 cursor-pointer"
            >
              <FaGoogle /> Login with Google
            </Button>
            <hr />
            <h1 className="text-muted-foreground">
              ----- or continue with credentials -----
            </h1>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-t-6 w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full max-w-md"
            >
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) => {
                        field.onChange(e);
                        setLoginError("");
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) => {
                        field.onChange(e);
                        if (loginError) setLoginError("");
                      }}
                        required
                        minLength={8}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full cursor-pointer">
                Login
              </Button>
            </form>
          </Form>
          <h1 className="text-red-500 text-center">{loginError}</h1>
        </CardContent>

        <CardFooter className="flex flex-col justify-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              replace
              className="underline underline-offset-4"
            >
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
