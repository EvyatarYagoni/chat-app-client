import './NewConversation.scss';
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import {IconButton} from "@mui/material";
import {useState} from "react";
import NewConversationModal from "./_parts/Menu/menu";
import {If, Then} from "react-if";
import NewConversationMenu from "./_parts/Menu/menu";



export default function NewConversation() {
  const [showMenu, setShowMenu] = useState(true);
  const [newConversationElement, setNewConversationElement] = useState(null);
  function showNewConversationModal(event) {
    setShowMenu(true);
    console.log('showNewConversationModal');
    setNewConversationElement(event.currentTarget);
  }

  return (
        <div className='new-conversation-container'>
          <IconButton aria-label="" onClick={showNewConversationModal}>
            <MessageRoundedIcon
              style={{ color: '#202020' }}
              className='new-conversation-icon'
            />
          </IconButton>
          <If condition={showMenu}>
            <Then>
              <NewConversationMenu showMenu={showMenu} setShowMenu={setShowMenu} anchorElement={newConversationElement}/>
            </Then>
          </If>
        </div>
    )
}