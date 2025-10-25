import { useUserInfoQuery } from "@/redux/features/profile/profile.api";
import type { ReactNode } from "react";
import LoadingPage from "../modules/LoadingPage";
import UnauthorizedPage from "../modules/UnauthorizedPage";

type TRole = "user" | "agent" | "admin";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: TRole[];  
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { data, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) {
    return <LoadingPage />;
  }

  const role = data?.data?.userInfo?.role;

  
  if (!role || !allowedRoles.includes(role)) {
    return <UnauthorizedPage />;
  }

  return children;
}
