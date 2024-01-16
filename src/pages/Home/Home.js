import Grid from "@mui/material/Grid";
import SideBar from "../../components/SideBar/SideBar";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import axiosInstance from "../../config/axios/axiosInstance";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../store/slices/auth/authSlice";
import {useNavigate} from "react-router-dom";

export default function Home() {

  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const response = await axiosInstance.post('/auth/me');
      console.log(response.data);
      dispatch(setUser(response.data));
    } catch (err) {
      try {
        const response = await axiosInstance.get('/auth/refresh-token');
        const newAccessToken = response.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken);
        const response2 = await axiosInstance.post('/auth/me');
        return dispatch(setUser(response2.data));
      } catch (err) {
        console.log(err);
        localStorage.removeItem('accessToken');
        return navigate('/login');
      }
    }
  }

  useEffect(() => {
      fetchUser();
  }, []);


  if (!user) {
    return <h1>Loading...</h1>
  }


    return (
        <Grid container style={{height: '96vh'}}>
            <Grid item xs={4}>
                <SideBar/>
            </Grid>
            <Grid item xs={8} >
                <ChatWindow />
            </Grid>
        </Grid>
    )
}