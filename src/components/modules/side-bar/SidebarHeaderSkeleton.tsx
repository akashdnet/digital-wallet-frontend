import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

export function SidebarHeaderSkeleton() {
  return (
    <div className="p-4">
      <Button className="cursor-pointer mt-2 w-full">
              <Link className="w-full" to="/">
                Go to home
              </Link>
            </Button>

      <section className="flex items-center gap-3 p-4 my-3 bg-white rounded-lg shadow-sm">
        
        <Skeleton className="h-12 w-12 rounded-full" />

        <div className="flex flex-col gap-2">

          <Skeleton className="h-4 w-32 rounded" />

          <Skeleton className="h-3 w-40 rounded" />
          
          <Skeleton className="h-4 w-20 rounded-full" />
        </div>
      </section>
    </div>
  );
}
