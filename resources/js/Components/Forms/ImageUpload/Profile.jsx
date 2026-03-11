import { useEffect, useRef, useState } from "react";
import ImageModal from "./ImageModal";
import { useSelector, useDispatch } from "react-redux";
import { addUserImage } from '@/features/form/userImageSlice';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faUpload } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "@/Components/UI/LoadingSpinner";
import { addChildDetails } from "@/features/form/childMemberSlice";
import { PenIcon } from "lucide-react";
import LoadingModal from "@/Components/Modals/LoadingModal";
import defaultAvatar from '@/assets/images/users/default-avatar-profile-icon.jpg';

const Profile = ({ isChild }) => {
    const dispatch = useDispatch();
    const profileImage = useSelector((store) => store.profileImage.value);
    const childImage = useSelector((store) => store.child.value);

    const [modalOpen, setModalOpen] = useState(false);
    const [loadSpinner, setLoadSpinner] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const updateAvatar = (blob, fileSize) => {
        const objectURL = URL.createObjectURL(blob);
        setAvatar({ blob: blob, url: objectURL, size: blob.size });
    };

    const uploadAvatar = () => {
        setLoadSpinner(true);
        if (avatar && avatar.blob) {
            const formData = new FormData();
            formData.append('image', avatar.blob);

            axios.post('/upload-avatar', formData, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Accept': 'application/json',
                },
            })
                .then(({ data }) => {
                    if (isChild) {
                        dispatch(addChildDetails({ ...childImage, imageUrl: data, imageSize: avatar.size }));
                    } else {
                        dispatch(addUserImage({ ...profileImage, imageUrl: data, imageSize: avatar.size }));
                    }

                    setAvatar(null);
                    URL.revokeObjectURL(avatar.url);
                    setTimeout(() => {
                        setLoadSpinner(false);
                    }, 3000);
                })
                .catch((error) => {
                    console.error('Upload error:', error);
                });
        } else {
            setModalOpen(true);
        }
    };

    const currentImageUrl = isChild ? childImage.imageUrl : profileImage.imageUrl;
    const avatarSrc = currentImageUrl ? currentImageUrl : avatar?.url || defaultAvatar;

    return (
        <div className="flex flex-col items-center">
            <div className="flex space-x-3 justify-center items-center">
                <img
                    key={avatarSrc}
                    src={avatarSrc}
                    alt="Avatar"
                    className="w-[150px] h-[180px] rounded-lg border-2 border-gray-400"
                    onClick={() => setModalOpen(true)}
                />

                <button
                    type="button"
                    className="btnPrimary md:hidden lg:flex"
                    onClick={avatar ? uploadAvatar : () => setModalOpen(true)}
                >
                    {avatar ? 'upload' : <PenIcon size={24} />}
                </button>
            </div>

            {modalOpen && (
                <ImageModal
                    updateAvatar={updateAvatar}
                    closeModal={() => setModalOpen(false)}
                />
            )}
            {loadSpinner && <LoadingModal />}
        </div>
    );
};

export default Profile;
