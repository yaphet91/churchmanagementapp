import React from 'react';

const GivingsIcon = ({ className = '', width = '18', height = '18', fill = 'currentColor' }) => {
    return (
        <svg
            className={`fill-current ${className}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 18.75l-1.45-1.32C4.4 13.77 1.25 11.02 1.25 7.5c0-2.62 2.13-4.75 4.75-4.75 1.66 0 3.12 0.83 3.99 2.1 0.87-1.27 2.33-2.1 3.99-2.1 2.62 0 4.75 2.13 4.75 4.75 0 3.52-3.15 6.27-7.3 10.93L10 18.75z"
                fill="currentColor"
            />
        </svg>
    );
};

export default GivingsIcon;




