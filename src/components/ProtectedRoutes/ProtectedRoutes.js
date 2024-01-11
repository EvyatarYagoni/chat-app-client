import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoutes = () => {
  console.log('ProtectedRoutes');
  const user = useSelector(state => state.user.value);
  console.log('user', user);
  if (!user) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;