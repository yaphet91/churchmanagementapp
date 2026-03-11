import React, { useState, useEffect } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { motion } from 'framer-motion';
import { images } from '@/Constants';
// Ensure you have these wrapper components correctly set up for Inertia and Tailwind CSS
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    // const [abouts, setAbouts] = useState([]);

    const abouts = [
        {
            title: "History of our Church",
            description: "Graduated with honors from XYZ University, focusing on software development and machine learning.",
            imgUrl: images.about01, // Replace with your actual image URL
            links: "http://www.universitywebsite.com" // Replace with actual link to your university or program details
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
        {
            title: "Our Services",
            description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
            imgUrl: images.about04, // Replace with your actual image URL
            links: "http://www.gradschoolwebsite.com" // Replace with actual link to your graduate school or thesis
        },
        // Add more objects for each academic background item you wish to display
        {
            title: "History of our Church",
            description: "Graduated with honors from XYZ University, focusing on software development and machine learning.",
            imgUrl: images.about01, // Replace with your actual image URL
            links: "http://www.universitywebsite.com" // Replace with actual link to your university or program details
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
        {
            title: "Our Services",
            description: "Completed my MSc specializing in artificial intelligence, working on cutting-edge AI research.",
            imgUrl: images.about04, // Replace with your actual image URL
            links: "http://www.gradschoolwebsite.com" // Replace with actual link to your graduate school or thesis
        },
        // Add more objects for each academic background item you wish to display
    ];


    return (
        <section className='my-24 md:px-14 px-4 max-w-screen-2xl max-auto' id='services'>
            <h2 className="text-4xl font-bold mb-8 text-center">Our <span className="text-blue-600">Services</span></h2>
            <p className='text-xl font-semibold mb-8 px-6 py-2'>Anastasisa Tewahdo is an online portal of your local church, and all services available through this partal
                are directly connected to your church's office administration. For technical assistance please contact your local church by visiting the <span id='services' className=''>contacts page</span>.</p>
            <div className="grid grid-cols-4 gap-6 ">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2, type: 'tween' }}
                        className="w-full p-6 "
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


        </section>
    );
};

export default Services;

// export default AppWrap(
//     MotionWrap(About, 'app__about'),
//     'about',
//     'bg-white',
// );
