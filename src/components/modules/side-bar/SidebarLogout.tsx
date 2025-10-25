import { Button } from "@/components/ui/button";
import { SidebarFooter } from "@/components/ui/sidebar";
import { baseApi } from "@/redux/baseApi";
import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SidebarLogoutComponent() {
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
      dispatch(baseApi.util.resetApiState());
      navigate("/");
      toast.success("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <SidebarFooter className="courser-pointer">
      <Button
        variant="destructive"
        onClick={handleLogout}
        disabled={isLoading}
        className="w-full courser-pointer"
      >
        {isLoading ? "Logging out..." : "Logout"}
      </Button>
    </SidebarFooter>
  );
}
