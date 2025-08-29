import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Password from "@/components/ui/Password";
import { useMyProfileQuery, useRegisterMutation } from "@/redux/features/user/user.api";
import SingleImageUpload from "@/components/SingleImageUpload";
import { useState } from "react";




interface UpdateProfileFormProps extends React.HTMLAttributes<HTMLDivElement> {


  // onEditMode: () => void; // Define onEditMode type here




}








const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        error: "Name is too short",
      })
      .max(50),
    email: z.email(),
    phone: z.string().regex(/^01[3-9]\d{8}$/, {
      message: "Invalid Bangladeshi phone number",
    }),
    currentPassword: z.string().min(8, { error: "Password is too short" }),
    password: z.string().min(8, { error: "Password is too short" }),
    confirmPassword: z
      .string()
      .min(8, { error: "Confirm Password is too short" }),
    role: z.enum(["user", "agent"], {
      error: "Role must be either 'user' or 'agent'.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export default function UpdatePasswordForm({
  className,
  ...props
}: UpdateProfileFormProps) {

  const navigate = useNavigate()
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [register, { isLoading, isError, isSuccess, data, error }] =
    useRegisterMutation();

  const {data:userData} = useMyProfileQuery(undefined)  

  // @ts-ignore
  const errorMessage = error?.data?.message;



  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: userData?.data?.name,
      email: userData?.data?.email,
      phone: userData?.data?.phone,
      currentPassword: "",
      password: "",
      confirmPassword: "",
      role: userData?.data?.role.includes("agent") || userData?.data?.agentStatus != "idk"   ? "agent" : "user"
,
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("file", imageFile as File);
      const res = await register(formData).unwrap();
      console.log(res);

      toast.success("User created successfully");
      // navigate("/login");
    } catch (error: any) {
      toast.error(error.data.message);
      console.error(error);
    }
  };

  return (
    <div
      className={cn("flex flex-col gap-6 w-full max-w-md my-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Change Password</h1>
      </div>

      <div className="grid gap-6">
        <div className="flex flex-col gap-2 text-sm font-bold">
          <h1>Profile Picture</h1>
          <SingleImageUpload onChange={setImageFile} oldImageUrl={userData?.data?.avatar} />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@company.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="01xxxxxxxxx" type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />




            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <div className="flex gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="user"
                          checked={field.value === "user"}
                          className="h-4 w-4"
                        />
                        <span>User</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...field}
                          value="agent"
                          checked={field.value === "agent"}
                          className="h-4 w-4"
                        />
                        <span>Agent</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormDescription className="sr-only">
                    Select your role
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading} className="w-full cursor-pointer">
              {isLoading ? "Loading..." : "Change Password"}
            </Button>
          </form>
          {errorMessage && (
            <div className="py-2 px-4 bg-red-200">
              <p className="text-red-800 text-center">{errorMessage}</p>
            </div>
          )}
        </Form>

        <Button type="button" disabled={isLoading} onClick={()=>{
          navigate("/profile")
        }} variant="secondary"  className="w-full cursor-pointer">
              Cancel
            </Button>
      </div>

      
    </div>
  );
}
