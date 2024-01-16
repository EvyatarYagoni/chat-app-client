import './Header.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NewConversation from "./_parts/NewConversation/NewConversation";
import {IconButton} from "@mui/material";


export default function Header() {
    return (
        <div className="sidebar-header-container">
          <h1 className="sidebar-header-title">Chats</h1>
          <div className="sidebar-header-icons">
            <NewConversation/>
            <IconButton aria-label="">
              <MoreVertIcon style={{ color: '#202020' }}/>
            </IconButton>
          </div>
        </div>
    )
}