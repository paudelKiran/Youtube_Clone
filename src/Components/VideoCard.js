import { Avatar } from '@mui/material';
import React from 'react'
import './VideoCard.css'

const videoCard = (props) => {
    const { videoDetail } = props;
    return (
        <div className="videoCard">
            <div className="videoCard_thumbnail">
                <img src={videoDetail.thumbnail} alt="Video Thumbnail" />
            </div>
            <div className="videoCard_detail">
                <Avatar
                    className='channelLogo'
                    alt='Channel logo'
                    src={videoDetail.logo}
                />
                <div className="videoCard_info">
                    <h4>{videoDetail.title}</h4>
                    <p>{videoDetail.channel}</p>
                    <p>{videoDetail.views} ☯ {videoDetail.timeStamp}</p>
                </div>
            </div>

        </div>
    )
}

export default videoCard