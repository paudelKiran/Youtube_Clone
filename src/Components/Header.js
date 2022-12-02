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
                <MenuSharpIcon fontSize='medium' fontWeight="5px" />
                <img className='header_yt_logo' src='./ytLogo.png' alt="" />
            </div>

            <div className="header_middle">
                <div className="header_inputSearch">
                    <input type="text" placeholder='Search' />
                    <div className="searchIconContainer">
                        <SearchIcon className='searchIcon' />
                    </div>

                </div>
                <MicIcon className='micIcon icons' />
            </div>

            <div className="header_right">
                <VideoCallOutlinedIcon className='right_icons icons' />
                <NotificationIcon className='right_icons icons' />
                <AccountCircleIcon className='right_icons profile' />
            </div>

        </div>
    )
}
