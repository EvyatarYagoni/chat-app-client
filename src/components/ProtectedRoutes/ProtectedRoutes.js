import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {APP_ROUTES} from "../../utils/constants";

const ProtectedRoutes = () => {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');

  // useEffect(() => {
  //   if (!accessToken) {
  //     return navigate(APP_ROUTES.LOGIN);
  //   }
  // }, [user]);

  return accessToken ? <Outlet /> : <Navigate to={APP_ROUTES.LOGIN} />;
};

export default ProtectedRoutes;