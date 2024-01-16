import {Box, Input, InputAdornment, Menu, MenuItem, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import Avatar from '@mui/material/Avatar';
import './menu.scss';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];
const users = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Foo Bar',
  },
  {
    id: 3,
    name: 'Baz Qux'
  },
  {
    id: 4,
    name: 'Lorem Ipsum'
  },
  {
    id: 5,
    name: 'Dolor Sit'
  },
  {
    id: 6,
    name: 'Amet Consectetur'
  },
  {
    id: 7,
    name: 'Adipiscing Elit'
  }

];
export default function NewConversationMenu({ showMenu, setShowMenu, anchorElement }) {

  const style = {
    width: "20%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const closeMenu = () => {
    setShowMenu(false);
  }

  return (
    <Menu
      id="new-chat-menu"
      className="new-chat-menu"
      MenuListProps={{
        'aria-labelledby': 'long-button',
      }}
      anchorEl={anchorElement}
      open={showMenu}
      onClose={closeMenu}
      PaperProps={{
        style: style
      }}
    >
      <Box p={2}>
        <h4 className="new-chat-title">New Chat</h4>
        <Input
          id="input-with-icon-adornment"
          placeholder="Search"
          fullWidth
          classes={{root: 'new-chat-input'}}
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        {users.map((user) => (
          <MenuItem key={user.id} onClick={closeMenu}>
            <div className="new-chat-item">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="new-chat-item-avatar" />
              <span className="new-chat-user-name">{user.name}</span>
            </div>
          </MenuItem>
        ))}
      </Box>
    </Menu>
    )
}