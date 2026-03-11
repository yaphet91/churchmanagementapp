import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export const AutoCompleteTwo = ({ options, value, onChange, errors }) => {
    const [query, setQuery] = useState('');

    const filteredOptions = query === '' ? options : options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Listbox value={value} onChange={onChange}>
            {({ open }) => (
                <>
                    <div className="relative w-full ">
                        <Listbox.Button className="relative w-full cursor-default rounded-l-lg bg-white dark:bg-form-input py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none border border-gray-400 dark:border-gray-600">
                            <span className="block truncate">{value || 'Select a country'}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 w-[150%] bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                <div className="px-3 pt-2">
                                    <input
                                        type="text"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                        placeholder="Search..."
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                </div>
                                {filteredOptions.map((option, optionIdx) => (
                                    <Listbox.Option
                                        key={optionIdx}
                                        className={({ active }) => `${active ? 'text-white bg-indigo-600' : 'text-gray-900'} cursor-default select-none relative py-2 pl-3 pr-9`}
                                        value={option.phone}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <img src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} alt="" className="w-8 h-5 flex-shrink-0 mr-2" />
                                                    <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>
                                                        {option.label} ({option.phone})
                                                    </span>
                                                </div>
                                                {selected && (
                                                    <span className={`${active ? 'text-white' : 'text-indigo-600'} absolute inset-y-0 right-0 flex items-center pr-4`}>
                                                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};
