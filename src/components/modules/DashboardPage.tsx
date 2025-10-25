import { Navigate } from "react-router-dom";

function DashboardPage() {
  return <Navigate to="/dashboard/profile" replace />;
}

export default DashboardPage;