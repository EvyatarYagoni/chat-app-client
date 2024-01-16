import {Box, Input, InputAdornment, Menu, MenuItem, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
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
export default function NewConversationMenu({ showMenu, setShowMenu, anchorElement }) {

  const style = {
    width: "25%",
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
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={closeMenu}>
            {option}
          </MenuItem>
        ))}
      </Box>
    </Menu>
    )
}