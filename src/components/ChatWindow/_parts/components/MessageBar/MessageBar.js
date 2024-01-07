import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './MessageBar.css';

export default function MessageBar() {
  return (
    <div className='chat-message-bar-container'>
      <input className='input' placeholder='Type a message'/>

    </div>
  )
}