import Grid from "@mui/material/Grid";
import SideBar from "../../components/SideBar/SideBar";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import axiosInstance from "../../config/axios/axiosInstance";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../store/slices/auth/authSlice";

export default function Home() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const fetchUser = async () => {
    try {
      const response = await axiosInstance.post('/auth/me');
      console.log(response.data);
      dispatch(setUser(response.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log('USE EFFEFCT user', user);
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