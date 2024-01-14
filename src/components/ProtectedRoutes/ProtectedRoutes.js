import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axiosInstance  from "../../config/axios/axiosInstance";
import {setAccessToken, setUser} from "../../store/slices/auth/authSlice";

const ProtectedRoutes = () => {
  const user = useSelector(state => state.auth.user);
  const accessToken = useSelector(state => state.auth.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const redirectToHomePage = () => {
    navigate('/');
  }

  const refreshToken = async () => {
    try {
      // Try to create new access token with refresh token
      const newAccessToken = await axiosInstance.get('/auth/refresh-token');
      dispatch(setAccessToken(true));
      dispatch(setUser({name: "evyatar"}));
      redirectToHomePage();
      setIsAuthLoading(false);
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  }
  useEffect(() => {
    if (!user || !accessToken) {
      refreshToken();
    }
  }, [user, accessToken]);

  if (isAuthLoading) {
    return <></>
  }

  return user && accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;