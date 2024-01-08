import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoutes = ({ isAllowed, redirectPath = '/login' }) => {
  console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;