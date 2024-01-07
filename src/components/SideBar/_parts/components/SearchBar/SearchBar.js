import './SearchBar.scss';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <div className='sidebar-searchbar-container'>
            <div className='sidebar-searchbar-input-container'>
              <SearchIcon className='search-icon'/>
              <input className='searchbar-input' placeholder="Search"/>
            </div>
        </div>
    )
}