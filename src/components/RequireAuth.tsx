import { Navigate } from "react-router";
import { useMyProfileQuery } from "@/redux/features/user/user.api";
import NotFound from "@/pages/notFound.page";

type Role = "user" | "agent" | "admin";

export function RequireAuth<T extends object>(
  Component: React.ComponentType<T>,
  allowedRoles: Role[] = ["user"] // ✅ default fallback
) {
  return (props: T) => {
    const { data, isLoading } = useMyProfileQuery(undefined);
   
    const user = data?.data?.userInfo;

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen text-gray-500">
          Loading...
        </div>
      );
    }


    if (!user?.email) {
      return <Navigate to="/login" replace />;
    }

    const hasAccess = allowedRoles.some((role) => user.role.includes(role));
    if (!hasAccess) {
      return <NotFound />;
    }

    return <Component {...props} />;
  };
}
