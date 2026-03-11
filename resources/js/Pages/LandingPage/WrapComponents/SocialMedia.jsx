import React from 'react';
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
    <div className="hidden sm:flex flex-col items-center justify-center">
        <a href='https://www.youtube.com/@anastasia6137/videos'
            target="_blank" rel="noreferrer" className="m-1">
            <BsYoutube />
        </a>
        <a href='https://www.facebook.com/profile.php?id=100011225322457'
            target="_blank" rel="noreferrer" className="m-1">
            <BsFacebook />
        </a>
        <a href='https://www.instagram.com/anastasia.connect/'
            target="_blank" rel="noreferrer" className="m-1">
            <BsInstagram />
        </a>
    </div>
);

export default SocialMedia;
