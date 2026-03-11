// PostDailyReadings.jsx

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';
import CustomCalendar from '@/Components/Calendar/CustomCalendar';

const PostDailyReadings = () => {
    const [date, setDate] = useState(new Date());
    const [ethiopianDate, setEthiopianDate] = useState('');

    useEffect(() => {
        // Convert the Gregorian date to Ethiopian date
        const convertToEthiopian = (gregorianDate) => {
            // Example conversion logic
            const year = gregorianDate.getFullYear() - 8;
            const month = (gregorianDate.getMonth() + 1 + 4) % 12;
            const day = gregorianDate.getDate();

            return `${year}-${month + 1}-${day}`;
        };

        const ethiopianDate = convertToEthiopian(date);
        setEthiopianDate(ethiopianDate);
    }, [date]);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    return (
        <div className="shadow-md rounded-md">
          <CustomCalendar />
        </div>
    );
};

export default PostDailyReadings;
