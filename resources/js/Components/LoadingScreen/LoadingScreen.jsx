import React from 'react'
import './LoadingScreen.css';  // Import the CSS for styling

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading, please wait...</p>
        </div>
    );
}

export default LoadingScreen
