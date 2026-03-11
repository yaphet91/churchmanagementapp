import React from 'react';

const NavigationDots = ({ active }) => (
    <div className="flex justify-center items-center flex-col p-4">
        {['home', 'about', 'work', 'research', 'honors', 'skills', 'contact'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className={`w-2 h-2 md:w-4 md:h-4 rounded-full bg-gray-300 m-2 
                transition-colors duration-200 ease-in-out hover:bg-[var(--secondary-color)]
                ${active === item ? 'bg-[#313BAC]' : ''}`}
                style={active === item ? { backgroundColor: '#313BAC' } : {}}
            />
        ))}
    </div>
);

export default NavigationDots;
