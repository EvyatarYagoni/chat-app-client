import './Login.css';
import Paper from "@mui/material/Paper";
import {AccountCircle} from "@mui/icons-material";
import {
    Box,
    Button,
    createTheme,
    TextField,
    ThemeProvider
} from "@mui/material";
import {useState} from "react";
const theme = createTheme({
    palette: {
        ochre: {
            main: '#25D366',
            contrastText: '#fff',
        },
    },
});

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        console.log('loginHandler');
        console.log(email);
        console.log(password)
    }

    return (
      <ThemeProvider theme={theme}>
        <div className='login-container'>
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
                            value={email}
                            type={'email'}
                            color='ochre'
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
                            value={password}
                            color='ochre'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                    <Button sx={{ mt: '40px' }} variant="contained" onClick={loginHandler} color='ochre'>Sign in</Button>
                </div>
            </Paper>
        </div>
      </ThemeProvider>
    )
}