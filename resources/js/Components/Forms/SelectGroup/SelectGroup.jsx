import React, { useState } from 'react';

const SelectGroup = ({ options, label }) => {
    const [selectedOption, setSelectedOption] = useState('Dr');
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };

    return (
        <div className="flex-1 w-full">
            <label className="mb-1 block text-gray-200 dark:text-white"> {label} </label>
            <div className="bg-transparent dark:bg-form-input">
                <select
                    value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value);
                        changeTextColor();
                    }}
                    className={`relative w-full appearance-none rounded border border-stroke
                     bg-gray-200 py-3 px-5 outline-none transition focus:border-primary active:border-primary
                     dark:border-form-strokedark dark:bg-gray-200 dark:focus:border-primary
                     ${isOptionSelected ? 'text-white dark:text-black' : ''
                        }`}
                >
                    <option value="" disabled className="text-gray-400 dark:text-gray-500">
                        Select your {label.toLowerCase()}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="text-gray-900 bg-white dark:text-gray-300 dark:bg-gray-700">
                            {option.label}
                        </option>
                    ))}
                </select>
               
            </div>
        </div>
    );
};

export default SelectGroup;
