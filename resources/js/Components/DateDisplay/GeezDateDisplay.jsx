import React from 'react';
import { toEthiopian } from 'ethiopian-date';

const GeezDateDisplay = () => {
    // Get the current Gregorian date
    const today = new Date();

    if (isNaN(today)) {
        console.error('Invalid Date:', today);
        return <div>Error: Invalid Date</div>;
    }

    // Extract year, month, and day from the current date
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // JavaScript months are 0-based
    const day = today.getDate();

    // Convert the Gregorian date to Ethiopian date
    let ethiopianDate;
    try {
        ethiopianDate = toEthiopian(year, month, day);
    } catch (error) {
        console.error('Conversion Error:', error);
        return <div>Error converting date: {error.message}</div>;
    }

    // Extract the day, month, and year from the Ethiopian date
    const [etYear, etMonth, etDay] = ethiopianDate;

    // Ethiopian month names
    const ethiopianMonths = [
        'መስከረም', 'ጥቅምቲ', 'ሕዳር', 'ታሕሳስ', 'ጥሪ', 'የካቲት',
        'መጋቢት', 'ምያዝያ', 'ግንቦት', 'ሰነ', 'ሓምለ', 'ነሓሰ', 'ግንቦት'
    ];

    return (
            <p>
                {ethiopianMonths[etMonth - 1]} {etDay}, {etYear}
            </p>
    );
};

export default GeezDateDisplay;
