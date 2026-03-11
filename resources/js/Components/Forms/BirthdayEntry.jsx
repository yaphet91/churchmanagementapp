import React, { useEffect, useState } from 'react';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];


const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);


const BirthdayEntry = ({ birthdayValue, onDateChange }) => {
    const parseDate = (date) => {
        if (!date) return { day: '', month: '', year: '' };
        const [month, day, year] = date.split(' ');
        return { day: parseInt(day, 10), month, year };
    };

    const { day: initialDay, month: initialMonth, year: initialYear } = parseDate(birthdayValue);

    const [day, setDay] = useState(initialDay || '');
    const [month, setMonth] = useState(initialMonth || '');
    const [year, setYear] = useState(initialYear || '');

    const birthday = day && month && year ? `${month} ${day}, ${year}` : '';

    useEffect(() => {
        onDateChange(birthday);
    }, [birthday]);



    const handleDayChange = (e) => {
        setDay(e.target.value);
    };

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        const inputYear = e.target.value;
        setYear(inputYear);

        const currentYear = new Date().getFullYear();

        if (inputYear && (inputYear < 1900 || inputYear > currentYear)) {
            setYearError(`Year must be between 1900 and ${currentYear}.`);
        } else {
            setYearError('');
        }
    };

    return (
        <div className="mt-2 border-gray-300 dark:border-gray-500 dark:bg-form-input focus:border-indigo-500
         focus:ring-indigo-500 rounded-md shadow-sm flex flex-row space-x-2 p-2 min-w-[340px]">
            <div className='flex flex-col min-w-[77px]'>
                {/* <label htmlFor="day">Day:</label> */}
                <select id="day" value={day} onChange={handleDayChange} className='dark:border-gray-500 dark:bg-form-input focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                    <option value="">Day</option>
                    {days.map(d => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>
            </div>
            <div className='flex flex-col'>
                {/* <label htmlFor="month">Month:</label> */}
                <select id="month" value={month} onChange={handleMonthChange} className='dark:border-gray-500 dark:bg-form-input focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                    <option value="">Month</option>
                    {months.map((m, index) => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>
            </div>
            <div className='flex flex-col min-w-[100px] w-[200px]'>
                {/* <label htmlFor="year">Year:</label> */}
                <select id="year" value={year} onChange={handleYearChange} className='dark:border-gray-500 dark:bg-form-input focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full'>
                    <option value="">Year</option>
                    {years.map(y => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default BirthdayEntry;
