import React from 'react'
import './SideIconsBar.css'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';


const SideIconsBar = () => {
    return (
        <div className="sideIconsBar">
            <div className="iconContainer">
                <HomeIcon className='icon'></HomeIcon>
                <span>Home</span>
            </div>
            <div className="iconContainer">
                <AudiotrackIcon className='icon'></AudiotrackIcon>
                <span>Shorts</span>
            </div>
            <div className="iconContainer">
                <SubscriptionsIcon className='icon'></SubscriptionsIcon>
                <span>Subscriptions</span>
            </div>
            <div className="iconContainer">
                <VideoLibraryIcon className='icon'></VideoLibraryIcon>
                <span>Library</span>
            </div>
        </div>
    )
}

export default SideIconsBar