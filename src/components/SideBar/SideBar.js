import './SideBar.css';
import ChatList from "./_parts/components/ChatList/ChatList";
import Header from "./_parts/components/Header/Header";
import SearchBar from "./_parts/components/SearchBar/SearchBar";

export default function Chat() {
    return (
        <div className='sidebar-container'>
            <Header/>
            <SearchBar/>
            <ChatList/>

        </div>
    )
}