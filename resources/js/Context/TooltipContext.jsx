import React, { createContext, useContext, useState } from 'react';

const TooltipContext = createContext();

export const useTooltip = () => useContext(TooltipContext);

export const TooltipProvider = ({ children }) => {
    const [tooltip, setTooltip] = useState({ visible: false, content: null, position: { x: 0, y: 0 } });

    const showTooltip = (content, position) => {
        setTooltip({ visible: true, content, position });
    };

    const hideTooltip = () => {
        setTooltip({ visible: false, content: null, position: { x: 0, y: 0 } });
    };

    return (
        <TooltipContext.Provider value={{ tooltip, showTooltip, hideTooltip }}>
            {children}
        </TooltipContext.Provider>
    );
};
