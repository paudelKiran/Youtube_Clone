import React from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Header.css'

export const Header = () => {
    return (
        <div className='header'>
            <div className="header_left">
                <MenuSharpIcon fontSize='medium' />
                <img className='header_yt_logo' src='./ytLogo.png' alt="" />
            </div>

            <div className="header_middle">
                <div className="header_inputSearch">
                    <input type="text" placeholder='Search' />
                    <SearchIcon />
                </div>
                <MicIcon />
            </div>

            <div className="header_right">
                <VideoCallOutlinedIcon />
                <NotificationIcon />
                <AccountCircleIcon />
            </div>

        </div>
    )
}
