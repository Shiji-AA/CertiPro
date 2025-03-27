import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivatePages() {
  const adminUser = useSelector((state) => state.admin.admindata);
  const token = localStorage.getItem("adminToken"); // ✅ Also check localStorage

  if (adminUser || token) {  // ✅ Allow access if Redux state or token exists
    return <Outlet />;
  } else {
    return <Navigate to="/admin" />;
  }
}

export default PrivatePages;
