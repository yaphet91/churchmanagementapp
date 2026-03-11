import React, { useRef, useState } from 'react';
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
import { useSelector } from 'react-redux';

const visibilityOptions = [
    { value: 'public', label: 'Public' },
    { value: 'private', label: 'Private' },
];
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

const GroupForm = ({ isOpen, onClose, onGroupCreated }) => {
    const { t } = useTranslation();
    const [errors, setErrors] = useState({});
    const quillRef = useRef(null);

    const [title, setTitle] = useState('');
   
    const [description, setDescription] = useState('');
    const imageUrlData = useSelector((state) => state.event.value.imageUrl);
    const [visibility, setVisibility] = useState('');


    // const [admins, setAdmins] = useState(listOfGroups.filter(option => option.admins).map(option => option.value));

    const handleDayOfTheMonthChange = (e) => {
        setDayOfTheMonth(e.target.value);
    }

 
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('title', title);
        console.log('description', description);
        console.log('image', imageUrlData);
        console.log('visibility', visibility);
        // console.log('admins', admins);

        const editor = quillRef.current.getEditor();
        const plainText = editor.getText(); // Get plain text

        const data = {
            title,
            description: plainText,
            avatar: imageUrlData,
            visibility,
        };

        try {
            const response = await axios.post('/groups/create', data);
            console.log(response.data);
            // alert('Group created successfully');
            toast.success('Group created successfully!');

            onGroupCreated()
            onClose();
        }
        catch (error) {
            console.log(error);
        }

        // Inertia.post('/groups/create', data);
    };


    const handleAvatarUpdate = (newAvatar) => {
        console.log('this is the new Avatar', newAvatar)
        setImage(newAvatar);
    };

    if (!isOpen) return null;

    return (
        <Modal show={isOpen} onClose={onClose} maxWidth='4xl' maxHeight='200px'>
            <h1 className='px-5 py-3 text-3xl font-bold'>Group</h1>
            <form onSubmit={handleSubmit}
                className='py-4 px-6 overflow-y-auto max-h-[500px] scrollbar-hide'
            >
                {/* Basics of Event */}
                <div className='flex items-start justify-start gap-4'>
                    {/* title */}
                    <div className='flex flex-col w-full'>
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
                  
                </div>

                {/* Image upload */}
                <div className='h-[230px] rounded-md w-full flex items-center mt-5 justify-center border border-dashed border-gray-400'>

                    <Profile2 onAvatarUpdate={handleAvatarUpdate} />
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
                <div className='mt-14 flex flex-col items-start justify-start'>                    
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
                    >Create Group
                    </button>

                </div>
            </form>
        </Modal>
    );
};

export default GroupForm;
