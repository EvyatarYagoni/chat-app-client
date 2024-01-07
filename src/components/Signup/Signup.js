import './Signup.scss';
import Paper from "@mui/material/Paper";
import {AccountCircle} from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

import {
  Box,
  Button,
  createTheme,
  TextField,
  ThemeProvider
} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

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

  const loginHandler = async () => {
    try {
      return await axios.post(`${process.env.REACT_APP_SERVER_API_URL}/auth/login`, {
        email: email,
        password: password
      });
    }  catch (err) {
      console.log(err);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='login-container'>
        <Paper elevation={3} className='login-box'>
          <p className="signup-title">
            <span>Create a free account now</span>
          </p>
          <div className='login-action-buttons'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '30px' }}>
              <AccountCircle sx={{ color: '#9B9B9B', mr: 0.5, my: 0.2 }}/>
              <TextField
                fullWidth
                label="username"
                variant="standard"
                value={email}
                type={'username'}
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
            <Button sx={{ mt: '40px' }} variant="contained" onClick={loginHandler} color='ochre'>Sign in</Button>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  )
}