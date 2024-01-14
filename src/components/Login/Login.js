import './Login.scss';
import Paper from "@mui/material/Paper";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import axiosInstance  from "../../config/axios/axiosInstance";


import {
    Box,
    Button,
    createTheme,
    TextField,
    ThemeProvider
} from "@mui/material";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {setAccessToken, setUser} from "../../store/slices/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";

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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);
    const accessToken = useSelector(state => state.auth.accessToken);

    const loginHandler = async (event) => {
        try {
            event.preventDefault();
            const response = await axiosInstance.post('/auth/login', {
                email: email,
                password: password
            });

            const accessToken = response.data.accessToken;

            dispatch(setAccessToken(accessToken));
            dispatch(setUser({name: "evyatar"}));

            return redirectToHomePage();
        }  catch (err) {
            console.log(err);
        }
    }

    const redirectToHomePage = () => {
        console.log('redirecting');
        navigate('/');
    }

    useEffect(() => {
        if (user && accessToken) {
            redirectToHomePage();
        }
    }, [user, accessToken]);

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
                        <EmailIcon sx={{ color: '#9B9B9B', mr: 0.5, my: 0.2 }}/>
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
                        <LockIcon sx={{ color: '#9B9B9B', mr: 0.5, my: 0.2 }} />
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
                    <p className='sign-up-text'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                </div>
            </Paper>
        </div>
      </ThemeProvider>
    )
}