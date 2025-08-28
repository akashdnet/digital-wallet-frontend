import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className=" flex-1 flex w-full min-h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin" />
      
    </div>
  );
};
