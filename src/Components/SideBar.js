import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

import SidebarRow from './SidebarRow';

const SideBar = () => {

    return (
        <div className="sidebar">
            <SidebarRow title="Home" Icon={HomeIcon} />
            <SidebarRow title="Shorts" Icon={AudiotrackIcon} />
            <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
            <hr />
            <SidebarRow title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title="History" Icon={RestoreIcon} />
            <SidebarRow title="Your Videos" Icon={SmartDisplayIcon} />
            <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
            <SidebarRow title="Liked Videos" Icon={ThumbUpAltIcon} />
            <SidebarRow title="Show More" Icon={KeyboardArrowDownIcon} />
            <hr />
        </div>
    )
}

export default SideBar