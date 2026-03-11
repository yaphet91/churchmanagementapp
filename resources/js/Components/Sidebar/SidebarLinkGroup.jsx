import { useState } from 'react';

const SidebarLinkGroup = ({ children, activeCondition }) => {
    const [open, setOpen] = useState(activeCondition);

    const handleClick = () => {
        setOpen(!open);
    };

    return <ul>{children(handleClick, open)}</ul>;
};

export default SidebarLinkGroup;