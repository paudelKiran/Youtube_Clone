import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard';

const RecommendedVideos = () => {
    const videoDetails = [
        {
            title: "GTA 5 gameplay",
            description: "Just enjoy the full gameplay. It's just awesome. I am sure that you would love watching.",
            channel: "Dazz Gaming",
            logo: "./channel_logo.jfif",
            thumbnail: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
            views: "6.2M",
            timeStamp: "2 days ago"
        },
        {
            title: "GTA 5 gameplay",
            description: "Just enjoy the full gameplay. It's just awesome. I am sure that you would love watching.",
            channel: "Dazz Gaming",
            logo: "./channel_logo.jfif",
            thumbnail: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
            views: "6.2M",
            timeStamp: "2 days ago"
        },
        {
            title: "GTA 5 gameplay",
            description: "Just enjoy the full gameplay. It's just awesome. I am sure that you would love watching.",
            channel: "Dazz Gaming",
            logo: "./channel_logo.jfif",
            thumbnail: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
            views: "6.2M",
            timeStamp: "2 days ago"
        },
        {
            title: "GTA 5 gameplay",
            description: "Just enjoy the full gameplay. It's just awesome. I am sure that you would love watching.",
            channel: "Dazz Gaming",
            logo: "./channel_logo.jfif",
            thumbnail: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
            views: "6.2M",
            timeStamp: "2 days ago"
        },
        {
            title: "GTA 5 gameplay",
            description: "Just enjoy the full gameplay. It's just awesome. I am sure that you would love watching.",
            channel: "Dazz Gaming",
            logo: "./channel_logo.jfif",
            thumbnail: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
            views: "6.2M",
            timeStamp: "2 days ago"
        },
        {
            title: "GTA 5 gameplay",
            description: "Just enjoy the full gameplay. It's just awesome. I am sure that you would love watching.",
            channel: "Dazz Gaming",
            logo: "./channel_logo.jfif",
            thumbnail: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
            views: "6.2M",
            timeStamp: "2 days ago"
        }
    ]
    return (
        <div className="recommendedVideos">
            {
                videoDetails.map((videoDetail) => {
                    return <VideoCard videoDetail={videoDetail} key={videoDetail.channel} />
                })
            }

        </div>

    )
}

export default RecommendedVideos