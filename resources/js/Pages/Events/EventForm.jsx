import React, { useEffect, useRef, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Modal from '@/Components/Modals/Modal';
import TextInput from '@/Components/Forms/TextInput';
import InputLabel from '@/Components/Forms/InputLabel';
import { useTranslation } from 'react-i18next';
import { GrAddCircle } from 'react-icons/gr';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AutoComplete from '@/Components/Forms/AutoComplete/AutoComplete';
import InputError from '@/Components/Forms/InputError';
import MultiSelect2 from '@/Components/Forms/MultiSelect2';
import Switcher from '@/Components/UI/Switcher';
import CheckboxTwo from '@/Components/Checkboxes/CheckboxTwo';
import BirthdayEntry from '@/Components/Forms/BirthdayEntry';
import Profile2 from '@/Components/Forms/SimpleImageUpload/Profile2';
import '../../../css/CustomQuill.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetEvent } from '@/features/event/eventSlice';
import DatePickerOne from '@/Components/Forms/DatePicker/DatePickerOne';

const attendanceOptions = [
    { value: 'all', label: 'All' },
    { value: 'groups', label: 'Groups' },
    { value: 'none', label: 'None' },
]

const visibilityOptions = [
    { value: 'public', label: 'Public' },
    { value: 'members', label: 'Members' },
    { value: 'groups', label: 'Groups' },
]

const repeatOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
]

const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

const EventForm = ({ isOpen, onClose, onEventCreated }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const days = ['Sunday', 'Monday', 'Tueday', 'Wedensday', 'Thusday', 'Friday', 'Saturday'];
    const daysOfTheMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const quillRef = useRef(null);
    const [groupOptions, setGroupOptions] = useState([]);

    const [errors, setErrors] = useState({});

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');
    const imageUrlData = useSelector((state) => state.event.value.imageUrl);

    const [visibility, setVisibility] = useState('');

    const [groupIds, setGroupIds] = useState([]);
    const [attendeesType, setAttendeesType] = useState('');
    const [selectedGroups, setSelectedGroups] = useState([]);

    const [dayOfTheWeek, setDayOfTheWeek] = useState('');
    const [dayOfTheMonth, setDayOfTheMonth] = useState('');
    const [dateOfTheYear, setDateOfTheYear] = useState('');

    const [isRepeatOn, setIsRepeatOn] = useState(false);
    const [isLocationOn, setIsLocationOn] = useState(false);
    const [isManagerOn, setIsManagerOn] = useState(false);

    const [repeat, setRepeat] = useState('');
    const [location, setLocation] = useState('');
    const [manager, setManager] = useState('');

    const handleDayOfTheMonthChange = (e) => {
        setDayOfTheMonth(e.target.value);
    }

    // Function to convert datetime-local value to SQL datetime format
  
    const fetchGroups = async () => {
        try {
            const response = await axios.get('/admin/api/groups');
            setGroupOptions(response.data.map((group) => ({
                id: group.id,
                title: group.title,
            })));
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };
    useEffect(() => {
        fetchGroups()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();


        const editor = quillRef.current.getEditor();
        const plainText = editor.getText(); // Get plain text


        const data = {
            title,
            description: plainText,
            image_url: imageUrlData,
            date,
            start_time: startTime,
            end_time: endTime,
            selected_groups: selectedGroups,
            attendees_type: attendeesType,
            visibility,
            location,
            repeat,
            manager,
            day_of_the_week: dayOfTheWeek,
            day_of_the_month: dayOfTheMonth,
            date_of_the_year: dateOfTheYear,
        };

        // Inertia.post('/events/create', data);
        try {
            await axios.post('/admin/api/events', data);
            alert('Event created successfully');
            onEventCreated();
            onClose();
            dispatch(resetEvent())
        } catch (error) {
            console.log(error);
        }
    };

    const handleGroupSelection = (value) => {
        setGroupIds(value);
        setSelectedGroups(value);
    }

    return (
        <Modal show={isOpen} onClose={onClose} maxWidth='4xl' maxHeight='200px'>
            <h1 className='px-5 py-3 text-3xl font-bold'>Event</h1>
            <form onSubmit={handleSubmit}
                className='py-4 px-6 overflow-y-auto max-h-[500px] scrollbar-hide'
            >
                {/* Basics of Event */}
                <div className='flex items-start justify-start gap-4'>
                    {/* title */}
                    <div className='flex flex-col w-1/2'>
                        {!errors?.title
                            ? <InputLabel htmlFor="title" value={t("Title")} />
                            : <InputError message={errors?.title} className='mb-2 text-red-700' />
                        }
                        <TextInput
                            id="title"
                            className='w-full dark:text-white'
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title" required
                        />
                    </div>
                    {/* Date and Time */}
                    <div className=''>
                        {!errors?.date
                            ? <InputLabel htmlFor="date" value={t("Date")} />
                            : <InputError message={errors?.date} className='mb-2 text-red-700' />
                        }
                        <DatePickerOne
                            id="date"
                            initialDate={date}
                            updateFormState={(value) => setDate(value)}
                            onChange={(value) => setDate(value) && console.log(value)}

                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="from" value={t("From *")} />
                        <TextInput
                            id="from"
                            className='dark:text-white'
                            type="time"
                            value={startTime} onChange={(e) => setStartTime(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="to" value={t("To *")} />
                        <TextInput
                            id="to"
                            className='dark:text-white'
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Image upload */}
                <div className='h-[230px] rounded-md w-full flex items-center mt-5 justify-center border border-dashed border-gray-400'>

                    <Profile2 uploadUrl="/admin/api/upload-avatar" />
                </div>
                {/* Description text editor */}
                <div className='w-full mt-6 h-[275px]'>
                    <InputLabel htmlFor="description" value={t("Description")} />
                    <div className='quill-wrapper'>
                        <ReactQuill
                            ref={quillRef}
                            theme="snow"
                            value={description}
                            onChange={setDescription}
                            modules={modules}
                            formats={formats}
                            className='custom-quill-editor'
                        />
                    </div>
                </div>
                {/* Attendance */}
                <div className={`mt-16  ${attendeesType === 'groups' ? ' grid grid-cols-3' : 'flex flex-row space-x-6 items-start justify-start'} gap-0 items-start`}>
                    <div className='w-[250px]'>
                        {!errors?.attendance
                            ? <InputLabel htmlFor="attendance" value={t("Attendance")} />
                            : <InputError message={errors?.attendance} className='mb-2 text-red-700' />
                        }
                        <AutoComplete
                            options={attendanceOptions}
                            // label={'Attendance *'}
                            value={attendeesType}
                            // onChange={(value) => setAttendance(value)}
                            onChange={(value) => setAttendeesType(value)}
                        />
                    </div>

                    {attendeesType === 'groups' && (
                        <div className='col-span-2'>
                            {!errors?.selectedGroups
                                ? <InputLabel htmlFor="selectedGroups" value={t("Select Attending Groups")} />
                                : <InputError message={errors?.selectedGroups} />
                            }
                            <MultiSelect2
                                id={'selectedGroups'}
                                options={groupOptions}
                                // label="Which Sacraments have you recieved"
                                optionsPrefix=""
                                maxSelections={20}
                                selected={selectedGroups}
                                setSelected={setSelectedGroups}
                                // onSelectionChange={(value) => setSelectedGroups(value)}
                                onSelectionChange={(value) => handleGroupSelection(value)}

                            />
                        </div>)}


                    <div className='w-[250px]'>
                        {!errors?.visibility
                            ? <InputLabel htmlFor="visibility" value={t("Visibility")} />
                            : <InputError message={errors?.visibility} className='mb-2 text-red-700' />
                        }
                        <AutoComplete
                            options={visibilityOptions}
                            // label={'Visibility *'}
                            value={visibility}
                            // onChange={(value) => setVisibility(value)}
                            onChange={(value) => setVisibility(value)}
                        />
                    </div>

                </div>

                {/* Repeat */}
                <div className='mt-10 flex flex-col items-start justify-start'>
                    <div className='flex flex-row items-start justify-start space-x-2'>
                        <Switcher id='repeat' enabled={isRepeatOn} onChange={() => setIsRepeatOn(!isRepeatOn)} />
                        <h2 className='text-xl'>Repeats</h2>
                    </div>
                    {isRepeatOn && (
                        <div className='py-2 px-2 flex flex-row items-start justify-start space-x-2'>
                            <div className='w-[250px]'>
                                {!errors?.repeat
                                    ? <InputLabel htmlFor="repeat" value={t("Repeat")} />
                                    : <InputError message={errors?.repeat} className='mb-2 text-red-700' />
                                }
                                <AutoComplete
                                    options={repeatOptions}
                                    // label={'Repeat *'}
                                    value={repeat}
                                    // onChange={(value) => setRepeat(value)}
                                    onChange={(value) => setRepeat(value)}
                                />
                            </div>

                            {repeat === 'weekly' && (
                                <div className='grid grid-cols-4 gap-3 py-6 px-4'>
                                    {days.map((day) => (
                                        <CheckboxTwo
                                            key={day}  // Add key prop
                                            id={day}
                                            label={day}
                                            onChange={() => setDayOfTheWeek(day)}
                                            checked={dayOfTheWeek === day}  // Correctly set checked prop
                                            name={day}
                                        />
                                    ))}
                                </div>
                            )}
                            {
                                repeat === 'monthly' && (
                                    <div className=''>
                                        <InputLabel htmlFor="dayOfTheMonth" value={t("Date of the month")} />
                                        <select
                                            id="dayOfTheMonth" value={dayOfTheMonth} onChange={handleDayOfTheMonthChange}
                                            className='dark:border-gray-500 dark:bg-form-input focus:border-indigo-500
                                             focus:ring-indigo-500 rounded-md shadow-sm mt-3 h-[48px]'>
                                            <option value="">Day Of The Month</option>
                                            {daysOfTheMonth.map(d => (
                                                <option key={d} value={d}>{d}</option>
                                            ))}
                                        </select>
                                    </div>
                                )
                            }
                            {
                                repeat === 'yearly' && (
                                    <div className=''>
                                        <InputLabel htmlFor="yearlyDate" value={t("Date of the year")} />
                                        <BirthdayEntry birthdayValue={dateOfTheYear} onDateChange={setDateOfTheYear} />
                                    </div>
                                )
                            }

                        </div>
                    )}
                </div>
                {/* Location */}
                <div className='mt-5 flex flex-col items-start justify-start'>
                    <div className='flex flex-row items-start justify-start space-x-2'>
                        <Switcher id='location' enabled={isLocationOn} onChange={() => setIsLocationOn(!isLocationOn)} />
                        <h2 className='text-xl'>Location</h2>
                    </div>
                    {isLocationOn && (
                        <div className='py-6 px-2 w-full'>
                            <div className='w-full'>

                                <InputLabel htmlFor="location" value={t("Location")} />
                                <TextInput
                                    id="location"
                                    className='dark:text-white flex-1 w-full'
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Location"
                                />

                            </div>
                        </div>
                    )}
                </div>
                {/* manager */}
                <div className='mt-5 flex flex-col items-start justify-start'>
                    <div className='flex flex-row items-start justify-start space-x-2'>
                        <Switcher id='manager' enabled={isManagerOn} onChange={() => setIsManagerOn(!isManagerOn)} />
                        <h2 className='text-xl'>Manager</h2>
                    </div>
                    {isManagerOn && (
                        <div className='py-6 px-2 w-full'>
                            <div className='w-full'>

                                <InputLabel htmlFor="manager" value={t("Add Manager")} />
                                <TextInput
                                    id="manager"
                                    className='dark:text-white flex-1 w-full mt-2'
                                    type="text"
                                    value={manager}
                                    onChange={(e) => setManager(e.target.value)}
                                    placeholder="Manager"
                                />

                            </div>
                        </div>
                    )}
                </div>
                {/* Submit */}
                <div className='w-full flex items-end justify-end space-x-3'>
                    <button
                        onClick={() => onClose()}
                        type="button"
                        className='bg-gray-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600'
                    >Cancel
                    </button>

                    <button
                        type="submit"
                        className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600'
                    >Create Event
                    </button>

                </div>
            </form>
        </Modal>
    );
};

export default EventForm;
