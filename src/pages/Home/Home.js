import Grid from "@mui/material/Grid";
import SideBar from "../../components/SideBar/SideBar";
import ChatWindow from "../../components/ChatWindow/ChatWindow";

export default function Home() {
    return (
        <Grid container style={{height: '100%'}}>
            <Grid item xs={4}>
                <SideBar/>
            </Grid>
            <Grid item xs={8}>
                <ChatWindow/>
            </Grid>
        </Grid>
    )
}