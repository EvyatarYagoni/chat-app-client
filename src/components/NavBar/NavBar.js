import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './NavBar.css';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function NavBar() {
    return (
        <div className='navbar-container'>
            <h1 style={{backgroundColor: 'red'}}>1</h1>
            <h1 style={{backgroundColor: 'blue'}}>1</h1>
            <h1 style={{backgroundColor: 'yellow'}}>1</h1>
        </div>
    )
}