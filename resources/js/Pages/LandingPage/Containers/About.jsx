import React, { useState, useEffect } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { motion } from 'framer-motion';
import { images } from '@/Constants';
// Ensure you have these wrapper components correctly set up for Inertia and Tailwind CSS
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    // const [abouts, setAbouts] = useState([]);

    const abouts = [
        {
            title: "History of our Church",
            description: "Graduated with honors from XYZ University, focusing on software development and machine learning.",
            imgUrl: images.about01 , // Replace with your actual image URL
            links: "http://www.google.com" // Replace with actual link to your university or program details
        },
        {
            title: "About Anstasia tewahdo",
            description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
            imgUrl: images.about02, // Replace with your actual image URL
            links: "http://www.gradschoolwebsite.com" // Replace with actual link to your graduate school or thesis
        },
        {
            title: "Our Services",
            description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
            imgUrl: images.about03, // Replace with your actual image URL
            links: "http://www.gradschoolwebsite.com" // Replace with actual link to your graduate school or thesis
        },
        // {
        //     title: "Our Services",
        //     description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
        //     imgUrl: images.about04, // Replace with your actual image URL
        //     links: "http://www.gradschoolwebsite.com" // Replace with actual link to your graduate school or thesis
        // },
        // Add more objects for each academic background item you wish to display
    ];


    return (
        <section className='my-24 md:px-14 px-4 max-w-screen-2xl max-auto' id='about'>
            <h2 className="text-4xl font-bold mb-12 text-center">About <span className="text-blue-600">Anastasia</span></h2>

            <div className="flex justify-center items-start flex-wrap mt-8">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2, type: 'tween' }}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6"
                        key={about.title + index}
                    >
                        <InertiaLink
                            href={about.links}
                            target="_blank"
                            rel="noreferrer"
                            onError={(error) => console.error("Failed to load link:", error)}
                        >
                            <img src={about.imgUrl} alt={about.title} className="w-full h-64 object-cover rounded-lg" />
                        </InertiaLink>

                        <h2 className="text-xl font-bold mt-5">{about.title}</h2>
                        <p className="mt-2 text-base">{about.description}</p>
                    </motion.div>
                ))}
            </div>

          
        </section>
    );
};

export default About;

// export default AppWrap(
//     MotionWrap(About, 'app__about'),
//     'about',
//     'bg-white',
// );
