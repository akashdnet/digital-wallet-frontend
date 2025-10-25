import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  form: any;
  name: string;
  label: string;
}

export default function RadioFormField({ form, name, label }: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="flex  gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="r1" />
                <Label htmlFor="r1">User</Label>
              </div>
              {/* <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="r2" />
                <Label htmlFor="r2">Admin</Label>
              </div> */}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="agent" id="r3" />
                <Label htmlFor="r3">Agent</Label>
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
