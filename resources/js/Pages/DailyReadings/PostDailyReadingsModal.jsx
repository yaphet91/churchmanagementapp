import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import axios from 'axios';

import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import { useTranslation } from 'react-i18next';
import AutoComplete from '@/Components/Forms/AutoComplete/AutoComplete';
import { getLiturgies } from '@/data/formData';
import Modal from '@/Components/Modals/Modal';

const PostDailyReadings = ({ isOpen, onClose, data }) => {
    const { t } = useTranslation();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [readings, setReadings] = useState([]);

    const liturgies = getLiturgies();

    const [errors, setErrors] = React.useState({});
    const [epistlesOfPaul, setEpistlesOfPaul] = React.useState('');
    const [otherEpistle, setOtherEpistle] = React.useState('');
    const [acts, setActs] = React.useState('');
    const [psalm, setPsalm] = React.useState('');
    const [gospel, setGospel] = React.useState('');
    const [holyLiturgy, setHolyLiturgy] = React.useState('');

    useEffect(() => {
        // Fetch existing readings on component mount
        axios.get('/daily-readings').then(response => {
            setReadings(response.data);
        });
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = dayjs(date).format('YYYY-MM-DD');

        // Fetch reading for the selected date
        axios.get(`/daily-readings/${formattedDate}`)
            .then(response => {
                const { reading, verse } = response.data;
                setReading(reading);
                setVerse(verse);
            })
            .catch(() => {
                setReading('');
                setVerse('');
            });
    };
    const fetchReadings = () => {
        axios.get('/daily-readings').then(response => {
            setReadings(response.data);
        });
    };

    const tileClassName = ({ date, view }) => {
        const formattedDate = dayjs(date).format('YYYY-MM-DD');
        if (view === 'month' && readings.some(reading => reading.date === formattedDate)) {
            return 'bg-green-500'; // Highlight dates with readings
        }
    };

    const handleSubmit = () => {
        const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
        const data = { date: formattedDate, reading, verse };

        if (reading && verse) {
            // Update or create entry
            axios.put(`/daily-readings/${formattedDate}`, data)
                .then(() => {
                    alert('Reading saved successfully!');
                    fetchReadings();
                })
                .catch(error => {
                    console.error('Error saving reading:', error);
                });
        }
    };


    const handleInputChange = (field, value) => {
        switch (field) {
            case 'epistlesOfPaul':
                setEpistlesOfPaul(value);
                break;
            case 'otherEpistle':
                setOtherEpistle(value);
                break;
            case 'acts':
                setActs(value);
                break;
            case 'psalm':
                setPsalm(value);
                break;
            case 'gospel':
                setGospel(value);
                break;
            case 'holyLiturgy':
                setHolyLiturgy(value);
                break;
            default:
                break;
        }
    }

    return (
        <Modal show={isOpen} onClose={onClose} maxWidth='5xl' maxHeight='h-[90vh]'>
            <div className='mb-4'>
                <h1 className='text-2xl  font-semibold text-gray-600'>ናይ ዕለቱ ንባባት</h1>
            </div>

            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileClassName={tileClassName}
            />
            <div className='space-y-4'>

                <div className='flex-1 mt-6 md:mt-0'>
                    {!errors?.saints
                        ? <InputLabel htmlFor="saints" value={t("Saints")} />
                        : <InputError message={errors?.saints} />
                    }
                    <textarea
                        id="saints"
                        name="saints"
                        className="w-full p-2 border border-gray-400 rounded-md shadow-sm focus:ring   focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 dark:text-white dark:focus:ring-gray-400 transition duration-150 ease-in-out"
                    >

                    </textarea>
                </div>
                <div className='flex-1 mt-6 md:mt-0'>
                    {!errors?.epistlesOfPaul
                        ? <InputLabel htmlFor="epistlesOfPaul" value={t("Epistle Of Paul")} />
                        : <InputError message={errors?.epistlesOfPaul} />
                    }
                    <TextInput
                        id="epistlesOfPaul"
                        type="text"
                        name="epistlesOfPaul"
                        value={epistlesOfPaul}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => handleInputChange('epistlesOfPaul', e.target.value)}
                    />

                </div>

                <div className='flex-1 mt-6 md:mt-0'>
                    {!errors?.otherEpistle
                        ? <InputLabel htmlFor="otherEpistle" value={t("Other Epistle")} />
                        : <InputError message={errors?.otherEpistle} />
                    }
                    <TextInput
                        id="otherEpistle"
                        type="text"
                        name="otherEpistle"
                        value={otherEpistle}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => handleInputChange('otherEpistle', e.target.value)}
                    />

                </div>

                <div className='flex-1 mt-6 md:mt-0'>
                    {!errors?.acts
                        ? <InputLabel htmlFor="acts" value={t("Acts")} />
                        : <InputError message={errors?.acts} />
                    }
                    <TextInput
                        id="acts"
                        type="text"
                        name="acts"
                        value={acts}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => handleInputChange('acts', e.target.value)}
                    />
                </div>

                <div className='flex-1 mt-6 md:mt-0'>
                    {!errors?.psalm
                        ? <InputLabel htmlFor="psalm" value={t("Psalm")} />
                        : <InputError message={errors?.psalm} />
                    }
                    <TextInput
                        id="psalm"
                        type="text"
                        name="psalm"
                        value={psalm}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => handleInputChange('psalm', e.target.value)}
                    />
                </div>

                <div className='flex-1 mt-6 md:mt-0'>
                    {!errors?.gospel
                        ? <InputLabel htmlFor="gospel" value={t("Gospel")} />
                        : <InputError message={errors?.gospel} />
                    }
                    <TextInput
                        id="gospel"
                        type="text"
                        name="gospel"
                        value={gospel}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => handleInputChange('gospel', e.target.value)}
                    />
                </div>

                <div className="flex-1 mt-4 md:mt-0">
                    {!errors?.holyLiturgy
                        ? <InputLabel htmlFor="holyLiturgy" value={t('Liturgy of the day')} />
                        : <InputError message={errors?.holyLiturgy} />
                    }
                    <AutoComplete
                        value={holyLiturgy}
                        // onChange={(value) => setHolyLiturgy(value)}
                        onChange={(value) => handleInputChange('holyLiturgy', value)}
                        // label={t('Level of Education')}
                        options={liturgies}
                    />
                </div>

                <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Post Readings
                </button>

            </div>

        </Modal>
    )
}

export default PostDailyReadings
