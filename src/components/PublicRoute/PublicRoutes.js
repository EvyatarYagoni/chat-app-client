import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {APP_ROUTES} from "../../utils/constants";

const PublicRoutes = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? <Navigate to={APP_ROUTES.HOME} /> : <Outlet />;
};

export default PublicRoutes;