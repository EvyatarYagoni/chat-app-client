import './Header.scss';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  return (
    <div className='chat-header-container'>
      <div className='content-container'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div className='text'>
          <h4>chat name</h4>
          <p className='online-status'>online</p>
        </div>
      </div>
      <div className='icons'>
        <SearchIcon />
        <MoreVertIcon />
      </div>
    </div>
  )
}