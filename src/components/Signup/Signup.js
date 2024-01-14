import './Signup.scss';
import Paper from "@mui/material/Paper";
import {AccountCircle} from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import {useNavigate} from "react-router-dom";
import axiosInstance  from "../../config/axios/axiosInstance";


import {
  Box,
  Button,
  createTheme,
  TextField,
  ThemeProvider
} from "@mui/material";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const theme = createTheme({
  palette: {
    ochre: {
      main: '#25D366',
      contrastText: '#fff',
    },
  },
});

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const accessToken = useSelector(state => state.auth.accessToken);


  const signupHandler = async () => {
    try {

      await axiosInstance.post('/auth/signup', {
        username: username,
        email: email,
        password: password
      });

      return redirectToHomePage();

    }  catch (err) {
      console.log(err);
    }
  }

  const redirectToHomePage = () => {
    navigate('/');
  }

  useEffect(() => {
    if (user && accessToken) {
      redirectToHomePage();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='signup-container'>
        <Paper elevation={3} className='signup-box'>
          <p className="signup-title">
            <span>Create a free account now</span>
          </p>
          <div className='signup-action-buttons'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '30px' }}>
              <AccountCircle sx={{ color: '#9B9B9B', mr: 0.5, my: 0.2 }}/>
              <TextField
                fullWidth
                label="username"
                variant="standard"
                value={username}
                type='text'
                color='ochre'
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
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
            <Button sx={{ mt: '40px' }} variant="contained" onClick={signupHandler} color='ochre'>Sign Up</Button>
            <p className='sign-up-text'>Already have an account? <Link to='/login'>Sign in</Link></p>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  )
}