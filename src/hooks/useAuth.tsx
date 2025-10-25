import { useUserInfoQuery } from "@/redux/features/profile/profile.api";

export function useAuth() {
  const { data, isLoading, error } = useUserInfoQuery(undefined);

  const user = data?.data?.userInfo;
  const isLoggedIn = Boolean(user && user.role); 

  return {
    user,
    isLoading,
    error,
    isLoggedIn,
  };
}
