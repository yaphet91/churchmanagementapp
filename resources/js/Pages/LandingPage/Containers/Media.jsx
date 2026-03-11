import React, { useState, useEffect } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { motion } from 'framer-motion';
import { images } from '@/Constants';
// Ensure you have these wrapper components correctly set up for Inertia and Tailwind CSS
import { useTranslation } from 'react-i18next';
import { Youtube } from 'lucide-react';
import VideoEmbed from '@/Components/VideoEmbed/VideoEmbed';

const videos = [
    'HulAsQxA1U8',
    'U9iWCoKBQ30',
    'c0f59PSumB8',
    '42as_mUbsCA',
    '4-qXPFB1UVk',

]
const Media = () => {
    const { t } = useTranslation();

    // const [abouts, setAbouts] = useState([]);

    const abouts = [
        {
            title: "Anastasia Youtube",
            description: "Graduated with honors from XYZ University, focusing on software development and machine learning.",
            imgUrl: images.about01, // Replace with your actual image URL
            links: "http://www.universitywebsite.com" // Replace with actual link to your university or program details
        },
        {
            title: "Anstasia Facebook",
            description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
            imgUrl: images.about02, // Replace with your actual image URL
            links: "http://www.gradschoolwebsite.com" // Replace with actual link to your graduate school or thesis
        },
        {
            title: "Anastasia Instagram",
            description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
            imgUrl: images.about03, // Replace with your actual image URL
            links: "http://www.gradschoolwebsite.com" // Replace with actual link to your graduate school or thesis
        },
        {
            title: "Anastasia Tiktok",
            description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
            imgUrl: images.about04, // Replace with your actual image URL
            links: "http://www.gradschoolwebsite.com" // Replace with actual link to your graduate school or thesis
        },
        // Add more objects for each academic background item you wish to display
    ];


    return (
        <section className='my-24 md:px-14 px-4 max-w-screen-2xl max-auto' id='media'>
            <h2 className="text-4xl font-bold mb-12 text-center">Anastasia <span className="text-blue-600">Media</span></h2>

            <div className="flex justify-center items-start flex-wrap mt-8">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2, type: 'tween' }}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6"
                        key={about.title + index}
                    >
                        <InertiaLink href={about.links} target="_blank" rel="noreferrer">
                            <img src={about.imgUrl} alt={about.title} className="w-full h-64 object-cover rounded-lg" />
                        </InertiaLink>
                        <h2 className="text-xl font-bold mt-5">{about.title}</h2>
                        <p className="mt-2 text-base">{about.description}</p>
                    </motion.div>
                ))}
            </div>
            <div className='mt-24'>
                <h1 className="text-4xl font-bold mb-12 text-center">Our <span className="text-blue-600">YouTube media</span> Team priotize unity</h1>
            </div>
            <div className='mt-10 flex items-start justify-start space-x-2'>
                <VideoEmbed
                    videoId="p4PGx9Xei6I"
                    width={854}
                    height={480}
                />
                <div className='h-[480px] overflow-y-auto space-y-4'>
                    {videos.map((video, index) => (
                        <div key={video + index} className="flex items-center gap-4">
                            <VideoEmbed
                                videoId={video}
                                width={426}
                                height={240} />
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default Media;

// export default AppWrap(
//     MotionWrap(About, 'app__about'),
//     'about',
//     'bg-white',
// );
