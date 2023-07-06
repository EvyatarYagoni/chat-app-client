import './Login.css';
import Paper from "@mui/material/Paper";
import {AccountCircle} from "@mui/icons-material";
import {Box, FilledInput, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login-container'>
            <img src={process.env.PUBLIC_URL + '/favicon.png'}  alt="logo" className='logo-icon'/>
            <Paper elevation={3} className='login-box'>
                <h1 className="login-title">Login</h1>
                <div className='login-action-buttons'>
                    <p className="login-subtitle">
                        <span>Remember to get up & stretch once</span>
                        <span>in a while - your friends at chat.</span>
                    </p>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '30px' }}>
                        <AccountCircle sx={{ color: '#9B9B9B', mr: 0.5, my: 0.2 }}/>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="standard"
                            color="warning"
                            value={email}
                            type={'email'}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: '#9B9B9B', mr: 0.5, my: 0.2 }} />
                        <TextField
                            fullWidth
                            label="Password"
                            variant="standard"
                            type="password"
                            color="warning"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                </div>
            </Paper>
        </div>
    )
}