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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useMyProfileQuery, useUpdateMyProfileMutation } from "@/redux/features/user/user.api";
import SingleImageUpload from "@/components/SingleImageUpload";
import { useState } from "react";
import ExistDBImage from "./ExistDBImage";




interface TFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onEditMode: () => void; // Define onEditMode type here
}








const formSchema = z
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
  });

export default function UpdateProfileForm({
  onEditMode,
  className,
  ...props
}: TFormProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [formPost, { isLoading, isError, isSuccess, data, error }] = useUpdateMyProfileMutation();
  
  const {data:userData} = useMyProfileQuery(undefined)  
  const [dbImageUrl, setDbImageUrl] = useState(userData?.data?.userInfo?.avatar);

  // @ts-ignore
  const errorMessage = error?.data?.message;




console.log(`update profile form`)



  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userData?.data?.userInfo?.name,
      email: userData?.data?.userInfo?.email,
      phone: userData?.data?.userInfo?.phone,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("file", imageFile as File);
      const res = await formPost(formData).unwrap();
      console.log(res);

      toast.success("Profile Updated successfully");
      onEditMode()
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
        <h1 className="text-2xl font-bold">Update Profile</h1>
      </div>

      <div className="grid gap-6">
        <div className="flex flex-col gap-2 text-sm font-bold">
          <h1>Profile Picture</h1>
          {dbImageUrl && <ExistDBImage onDBImageUrl={setDbImageUrl} dbImageUrl={dbImageUrl} />}
          {!dbImageUrl && <SingleImageUpload onChange={setImageFile} /> }
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
                  <FormMessage />
                </FormItem>
              )}
            />




           

            <Button type="submit" disabled={isLoading} className="w-full cursor-pointer">
              {isLoading ? "Loading..." : "Save Changes"}
            </Button>
          </form>
          {errorMessage && (
            <div className="py-2 px-4 bg-red-200">
              <p className="text-red-800 text-center">{errorMessage}</p>
            </div>
          )}
        </Form>

        <Button type="button" disabled={isLoading} variant="secondary" onClick={onEditMode} className="w-full cursor-pointer">
              Cancel
            </Button>
      </div>

      
    </div>
  );
}
