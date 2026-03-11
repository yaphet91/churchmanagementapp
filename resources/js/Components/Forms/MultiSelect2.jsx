import React, { useState, useEffect, useRef } from 'react';

const MultiSelect2 = ({ options: initialOptions, label, optionsPrefix = '', maxSelections, onSelectionChange, selected, setSelected, disabled }) => {
    const [show, setShow] = useState(false);
    const dropdownRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState("");

    const toggleDropdown = (event) => {
        event.stopPropagation();
        if (!disabled) {
            setShow(prevShow => !prevShow);
        }
    };

    const select = (optionValue) => {
        setSelected(prevSelected => {
            const isAlreadySelected = prevSelected.includes(optionValue);
            const canSelectMore = prevSelected.length < maxSelections || isAlreadySelected;

            if (isAlreadySelected) {
                const newSelection = prevSelected.filter(value => value !== optionValue);
                onSelectionChange(newSelection); // Notify parent component about the change
                setSelected(newSelection);
                return newSelection;
            } else if (canSelectMore) {
                const newSelection = [...prevSelected, optionValue];
                onSelectionChange(newSelection); // Notify parent component about the change
                setSelected(newSelection);
                return newSelection;
            } else {
                // Optionally, trigger user feedback here (e.g., setErrorMessage)
                console.log(`Selection limit of ${maxSelections} reached.`);
                return prevSelected; // Keep the current selection unchanged
            }
        });
    };

    const remove = (optionValue, event) => {
        event.stopPropagation(); // Prevent the click from bubbling up
        setSelected(prevSelected => {
            const updatedSelection = prevSelected.filter(value => value !== optionValue);
            onSelectionChange(updatedSelection); // Invoke the callback with the new selection
            setSelected(updatedSelection);
            return updatedSelection;
        });
    };

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (dropdownRef.current && !dropdownRef.current.contains(target)) {
                setShow(false);
            }
        };

        if (show) {
            const timer = setTimeout(() => {
                document.addEventListener('click', clickHandler);
            }, 10);

            return () => {
                clearTimeout(timer);
                document.removeEventListener('click', clickHandler);
            };
        }
    }, [show]);

    const getSelectedText = () => {
        return initialOptions.filter(option => selected.includes(option.id)).map(option => option.title);
    };

    return (
        <div className="relative">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                {label}
            </label>

            <div className="flex flex-col items-center">
                <div className={`relative z-10 inline-block w-full  ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`} aria-disabled={disabled}>
                    <div className="mb-2 flex rounded border border-gray-500 py-2 bg-gray-200 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input disabled:cursor-not-allowed" onClick={toggleDropdown}>
                        <div className="flex flex-auto flex-wrap gap-3">
                            {Array.isArray(selected) && selected.map((id) => (
                                <div key={id} className="my-1.5 flex items-center justify-center rounded border-[.5px] border-gray-300 bg-gray py-.5 px-2.5 text-sm font-medium text-gray-600 dark:text-gray-200 dark:border-strokedark dark:bg-white/30">
                                    <div className="max-w-full flex-initial">
                                        {initialOptions.find(option => option.id === id)?.title}
                                    </div>
                                    <div onClick={(event) => remove(id, event)} className="cursor-pointer pl-2 hover:text-danger">
                                        <svg className="fill-current" role="button" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            ))}
                            {selected.length === 0 && <div className="flex-1 text-gray-600">Select an option</div>}
                        </div>
                        <div className="flex w-8 items-center py-1 pl-1 pr-1 text-gray-800">
                            <button type="button" onClick={toggleDropdown} className="h-6 w-6 cursor-pointer outline-none focus:outline-none">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#637381"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {show && (
                        <div className={`absolute top-full left-0 z-10 w-full overflow-y-auto border dark:border-gray-600 rounded bg-white shadow dark:bg-form-input ${show ? '' : 'hidden'}`} ref={dropdownRef}>
                            <div className="flex w-full flex-col">
                                {initialOptions.map((option) => {
                                    const isDisabled = maxSelections && selected.length >= maxSelections && !selected.includes(option.id);

                                    return (
                                        <div key={option.id}
                                            className={`w-full cursor-pointer text-graydark dark:text-white rounded-t border-b border-gray-300 
                                             hover:bg-gray-300 dark:border-form-strokedark 
                                     ${isDisabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'} `}
                                            onClick={() => !isDisabled && select(option.id)}
                                        >
                                            <div className={`relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 
                                        ${selected.includes(option.id) ? 'border-primary' : ''}
                                        ${isDisabled ? 'bg-gray-200 text-gray-500' : ''} `}
                                            >
                                                <div className="flex w-full items-center dark:hover:text-black">
                                                    <div className="mx-2 leading-6">{optionsPrefix}{option.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MultiSelect2;
