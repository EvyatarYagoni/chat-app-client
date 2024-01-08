import './ChatWindow.css';
import Header from './_parts/components/Header/Header';
import ChatBox from './_parts/components/ChatBox/ChatBox';
import MessageBar from './_parts/components/MessageBar/MessageBar';

export default function ChatWindow() {
    return (
        <div className='chat-window-container'>
            <Header/>
            <ChatBox/>
            <MessageBar/>
        </div>
    )
}