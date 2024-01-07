import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './ChatWindow.css';
import Header from './_parts/components/Header/Header';
import ChatBox from './_parts/components/ChatBox/ChatBox';

export default function ChatWindow() {
    return (
        <div className='chat-window-container'>
            <Header/>
            <ChatBox/>

        </div>
    )
}