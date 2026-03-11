import React from 'react';
import PropTypes from 'prop-types';

const colors = [
    "#1abc9c", "#3498db", "#9b59b6", "#e67e22", "#e74c3c",
    "#f1c40f", "#2ecc71", "#34495e", "#95a5a6", "#16a085"
];

const DrawerAvatar = ({ name }) => {
    if (!name) {
        return null; // Or return a default avatar if needed
    }

    const firstLetter = name[0].toUpperCase();

    // Simple hash function to determine color based on the first letter
    const colorIndex = (firstLetter.charCodeAt(0) - 65) % colors.length; // 65 is the char code for 'A'
    const avatarStyle = {
        backgroundColor: colors[colorIndex],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1em', // Adjust size as needed
        width: '50px', // Avatar width
        height: '50px', // Avatar height
        borderRadius: '50%',
    };

    return (
        <div style={avatarStyle}>
            {firstLetter}
        </div>
    );
};

// Define prop types for the component
DrawerAvatar.propTypes = {
    name: PropTypes.string,
};

// Define default props in case the prop is not provided
DrawerAvatar.defaultProps = {
    name: 'A', // Default to 'A' or any other default letter
};

export default DrawerAvatar;
