// CustomCalendar.jsx

import React, { useState } from 'react';
import dayjs from 'dayjs';

const CustomCalendar = ({ onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [events, setEvents] = useState({});

    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const startOfWeek = startOfMonth.startOf('week');
    const endOfWeek = endOfMonth.endOf('week');

    const handlePrevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
    };

    const handleDateClick = (day) => {
        // Call the parent callback with the selected date
        if (onDateSelect) {
            onDateSelect(day.toDate());
        }
    };

    const renderDays = () => {
        const days = [];
        let day = startOfWeek;

        while (day.isBefore(endOfWeek)) {
            const formattedDate = dayjs(day).format('YYYY-MM-DD');
            days.push(
                <div
                    key={day.toString()}
                    onClick={() => handleDateClick(day)}
                    className={`flex justify-center items-center border border-gray-300 hover:bg-blue-300 hover:text-black rounded ${day.month() === currentDate.month() ? 'bg-white text-black' : 'bg-gray-100 text-gray-400'
                        } ${day.isSame(dayjs(), 'day') ? 'bg-blue-400' : ''}`}
                    style={{ width: '70%', height: '3rem', cursor: 'pointer' }}
                >
                    <span>
                        {day.date()}
                        {events[formattedDate] && (
                            <span className="block mt-1 text-xs text-green-500">●</span>
                        )}
                    </span>
                </div>
            );
            day = day.add(1, 'day');
        }
        return days;
    };

    return (
        <div className="max-w-4xl mx-auto my-2 p-4 bg-white shadow-md rounded-md">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrevMonth}
                    className="text-blue-500 hover:text-blue-700"
                >
                    &lt; Previous
                </button>
                <h2 className="text-lg font-bold">
                    {currentDate.format('MMMM YYYY')}
                </h2>
                <button
                    onClick={handleNextMonth}
                    className="text-blue-500 hover:text-blue-700"
                >
                    Next &gt;
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                    <div
                        key={day}
                        className="text-center font-semibold text-gray-700"
                        style={{ width: '14.28%' }}
                    >
                        {day}
                    </div>
                ))}
                {renderDays()}
            </div>
        </div>
    );
};

export default CustomCalendar;
