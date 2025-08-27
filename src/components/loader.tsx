import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className=" flex-1 flex bg-amber-600  items-center justify-center">
        <h1>hi</h1>
        <Loader2 className="h-10 w-10 animate-spin" />
      
    </div>
  );
};
