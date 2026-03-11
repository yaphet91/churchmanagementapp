import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YouTubeVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('/youtube-videos')
            .then(response => {
                setVideos(response.data.items);
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
            });
    }, []);

    return (
        <div>
            <h1>My YouTube Channel Videos</h1>
            <div className="video-list">
                {videos.map(video => (
                    <div key={video.id.videoId} className="video-item">
                        <h3>{video.snippet.title}</h3>
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                        <p>{video.snippet.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YouTubeVideos;
