import React, { useState, useEffect, useRef } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const AutoComplete3 = ({ id, name, value, onChange, label, options, disabled }) => {
    // State to manage the dropdown direction
    const [dropdownDirection, setDropdownDirection] = useState('below');
    const buttonRef = useRef(null); // Ref for the Listbox.Button

    useEffect(() => {
        const checkDropdownDirection = () => {
            if (buttonRef.current) {
                const rect = buttonRef.current.getBoundingClientRect();
                const spaceBelow = window.innerHeight - rect.bottom;
                const spaceAbove = rect.top;
                const maxHeight = 200; // Adjust based on the max height of your Listbox.Options

                if (spaceBelow >= maxHeight || spaceBelow >= spaceAbove) {
                    setDropdownDirection('below');
                } else {
                    setDropdownDirection('above');
                }
            }
        };

        // Check the dropdown direction initially and on window resize
        checkDropdownDirection();
        window.addEventListener('resize', checkDropdownDirection);

        return () => window.removeEventListener('resize', checkDropdownDirection);
    }, []);

    return (
        <div className="space-y-3 w-full" id={id} name={name}>
            <Listbox value={value} onChange={onChange} disabled={disabled}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-medium text-gray-200 ">{label}</Listbox.Label>
                        <div className="relative">
                            <Listbox.Button ref={buttonRef} 
                                className={`disabled:cursor-not-allowed disabled:opacity-50 relative w-full h-12 cursor-default
                                 rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none
                                 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border
                                 ${disabled ? 'bg-gray-100 text-gray-500' : ''}`}>
                                {value}
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                            <Listbox.Options className={`absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${dropdownDirection === 'above' ? 'bottom-full mb-1' : 'mt-1'}`}>
                                {options.map((option, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none hover:bg-gray-300 py-2 pl-10 pr-4 ${active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={option.value}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{option.label}</span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    );
};

export default AutoComplete3;
