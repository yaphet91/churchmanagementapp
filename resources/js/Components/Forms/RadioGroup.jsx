import React from 'react';
import InputLabel from './InputLabel';

const RadioGroup = ({ options, name, selectedValue, onChange }) => {
    return (
        <div>
            {/* <InputLabel htmlFor={name} value={name} /> */}
            <div className="flex flex-row space-x-8 p-6 mt-3 border border-gray-400 dark:border-gray-500 bg-gray-200  dark:bg-form-input 
            rounded-lg md:h-[138px]">
                {options.map((option) => (
                    <label key={option.label} className="inline-flex items-center text-2xl ">
                        {/* Use a unique ID for each radio input combining the name and option value */}
                        <input
                            type="radio"
                            id={`${name}-${option.value}`}
                            name={name}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={onChange}
                            className="w-5 h-5 text-blue-600 dark:text-blue-500 border-gray-800  focus:ring-blue-500
                             dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 
                             "
                        />
                        {/* Use htmlFor attribute in label to match the input id */}
                        <span className="ml-2 text-lg text-gray-800 dark:text-gray-300" htmlFor={`${name}-${option.value}`}>{option.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};


export default RadioGroup;
