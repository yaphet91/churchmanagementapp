export const fadeIn = (direction, delay) => {
    // Determine the starting position based on the direction
    const startPos = {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    };

    // If the direction is 'center', we want the element to fade in without moving.
    // So, we can simply start with opacity 0 and transition to opacity 1 without changing x or y.
    if (direction === 'center') {
        return {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    type: 'tween',
                    duration: 1.2,
                    delay: delay,
                    ease: [0.25, 0.25, 0.25, 0.75]
                }
            }
        };
    }

    // For other directions, proceed as before
    return {
        hidden: { ...startPos, opacity: 0 },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    };
};
