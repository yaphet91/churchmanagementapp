import React from 'react';

const VideoEmbed = ({ videoId, width, height }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-responsive">
            <iframe
                width={width}
                height={height}
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
            ></iframe>
        </div>
    );
};

export default VideoEmbed;
