import './Login.css';
import Paper from "@mui/material/Paper";
import {AccountCircle} from "@mui/icons-material";
import {Box, FilledInput, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";

export default function Login() {
    return (
        <div className='login-container'>
            <img src={process.env.PUBLIC_URL + '/favicon.png'}  alt="logo" className='logo-icon'/>
            <Paper elevation={3} class='login-box'>
                <h1 className="login-title">Login</h1>
                <div className='login-action-buttons'>
                    <p className="login-subtitle">
                        <span>Remember to get up & stretch once</span>
                        <span>in a while - your friends at chat.</span>
                    </p>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '30px' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 0.5, my: 0.2 }} />
                        <TextField fullWidth id="standard-basic" label="Email" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 0.5, my: 0.2 }} />
                        <TextField fullWidth id="standard-basic" label="Password" variant="standard" type="password" />
                    </Box>
                </div>
            </Paper>
        </div>
    )
}