import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput3({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-0 border-b bg-inherit focus:border-indigo-500 focus:ring-indigo-500 rounded-lg' +
                className
            }
            ref={input}
        />
    );
});
