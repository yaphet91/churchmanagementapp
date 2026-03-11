// Tooltip.js
import React, { useState } from 'react';

const Tooltip2 = ({ text, maxLength, className }) => {
    const [show, setShow] = useState(false);

    if (text?.length <= maxLength) return <span className='italic'>{text}</span>;

    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={`relative cursor-pointer ${className}`}>
            {text.substr(0, maxLength)}...
            {show && (
                <div className={` absolute text-black left-0 top-100% z-10 w-auto p-2 bg-white border rounded shadow-lg`}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip2;
