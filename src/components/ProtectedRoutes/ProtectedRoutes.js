import {Navigate, Outlet} from "react-router-dom";
import {APP_ROUTES} from "../../utils/constants";

const ProtectedRoutes = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? <Outlet /> : <Navigate to={APP_ROUTES.LOGIN} />;
};

export default ProtectedRoutes;