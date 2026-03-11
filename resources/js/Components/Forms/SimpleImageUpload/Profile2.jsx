import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "@/Components/UI/LoadingSpinner";
import ImageTemp from '@/assets/images/logos/anastasia_logo.png';
import { useDispatch, useSelector } from "react-redux";
import { addEventImage } from "@/features/event/eventSlice";

const Profile2 = ({ isChild }) => {
    const [loadSpinner, setLoadSpinner] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const imageUrlData = useSelector((state) => state.event.value.imageUrl);
    const dispatch = useDispatch();

    const updateAvatar = (file) => {
        const objectURL = URL.createObjectURL(file);
        setAvatar({ file: file, url: objectURL });
    };

    useEffect(() => { 
        if (avatar) {
            uploadAvatar();
        }

    }, [avatar])

    const uploadAvatar = () => {
        setLoadSpinner(true);
        if (avatar && avatar.file) {
            const formData = new FormData();
            formData.append('image', avatar.file);

            axios.post('/upload-avatar', formData, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Accept': 'application/json',
                },
            })
                .then(({ data }) => {
                    // console.log(data);
                    // setAvatar(data);
                    dispatch(addEventImage(data));

                    URL.revokeObjectURL(avatar.url);
                    setLoadSpinner(false);
                })
                .catch((error) => {
                    console.error('Upload error:', error);
                    setLoadSpinner(false);
                });
        }
    };

    const removeAvatar = () => {
        setAvatar(null);
        dispatch(addEventImage(''));
        setDropdownOpen(false);
    };

    return (
        <div className="relative flex flex-col items-center w-full">
            {avatar &&
                <button
                    type="button"
                    className="absolute top-2 right-2 btnPrimary"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <FontAwesomeIcon icon={faPen} />
                </button>
            }
            {dropdownOpen && (
                <div className="absolute top-10 right-2 text-black bg-white border border-gray-300 rounded-lg shadow-lg">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                            <label htmlFor="fileInput" className="cursor-pointer">
                                Edit
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                id="fileInput"
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    if (file) {
                                        setDropdownOpen(false);
                                        updateAvatar(file);
                                    }
                                }}

                                className="sr-only w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4 file:rounded-md file:border-0 file:text-xs dark:file:bg-indigo-950 file:bg-gray-700 file:text-sky-400 dark:file:text-sky-200 hover:file:bg-gray-600"
                            />
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer" onClick={removeAvatar}>
                            Remove
                        </li>
                    </ul>
                </div>
            )}
            <div className="flex space-x-3 justify-center items-center">
                {avatar ? (
                    <div className="">
                        <img
                            src={imageUrlData ? imageUrlData : avatar.url}
                            alt="Avatar"
                            className="max-h-[200px] rounded-lg border-2 border-gray-400 object-cover"
                        />
                    </div>
                ) : (
                    <input
                        type="file"
                        accept="image/*"
                        id="fileInput"
                        onChange={(event) => {
                            const file = event.target.files[0];
                            if (file) {
                                updateAvatar(file);
                            }
                        }}
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4 file:rounded-md file:border-0 file:text-xs dark:file:bg-indigo-950 file:bg-gray-700 file:text-sky-400 dark:file:text-sky-200 hover:file:bg-gray-600"
                    // style={{ display: 'none' }} // Hide the file input
                    />
                )}
            </div>
            {loadSpinner && <LoadingSpinner />}
        </div>
    );
};

export default Profile2;
