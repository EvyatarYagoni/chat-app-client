import './ChatCard.scss';
import Avatar from "@mui/material/Avatar";


export default function ChatCard() {
    return (
        <div className='sidebar-chat-card-container'>
            <div className='chat-card-img-and-text'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className='chat-card-text'>
                    <h4>John Doe</h4>
                    <p className='chat-card-last-message'>last message</p>
                </div>
            </div>
            <div className='chat-card-time'>
                <p>26:12</p>
            </div>
        </div>
    )
}