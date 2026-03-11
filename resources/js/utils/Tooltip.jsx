import ReactDOM from 'react-dom';
import { useTooltip } from '@/Context/TooltipContext';

const Tooltip = () => {
    const { tooltip } = useTooltip();

    if (!tooltip.visible) {
        return null;
    }

    const style = {
        position: 'fixed',
        top: `${tooltip.position.y}px`,
        left: `${tooltip.position.x}px`,
        // Add more styling as needed
        color: 'white',

    };

    return ReactDOM.createPortal(
        <div class="tooltip bg-gray-700 bg-opacity-4 flex w-24 text-white text-sm rounded-md py-2 absolute z-50 items-center justify-center" style={style}>
            {tooltip.content}
        </div>,
        document.body
    );
};

export default Tooltip;
