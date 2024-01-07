import './Header.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';


export default function Header() {
    return (
        <div className="sidebar-header-container">
          <h1 className="sidebar-header-title">Chats</h1>
          <div className="sidebar-header-icons">
            <MessageRoundedIcon style={{ color: '#202020' }}/>
            <MoreVertIcon style={{ color: '#202020' }}/>
          </div>
        </div>
    )
}