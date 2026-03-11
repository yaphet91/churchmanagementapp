import React, { useState } from 'react';
import { images } from '@/Constants';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        // const contact = {
        //     _type: 'contact',
        //     name: formData.username,
        //     email: formData.email,
        //     message: formData.message,
        // };

        // client.create(contact)
        //     .then(() => {
        //         setLoading(false);
        //         setIsFormSubmitted(true);
        //     })
        //     .catch((err) => console.log(err));
    };

    return (
        <section className='flex flex-col items-center justify-center my-24 md:px-14 px-4 max-w-screen-lg mx-auto ' id='contact'>
            <h2 className="text-4xl font-bold mb-8">Contact us</h2>

            <div className="w-3/5 flex flex-wrap justify-evenly items-center mx-auto my-8 md:w-full">
                <div className="flex flex-row justify-start items-center min-w-[290px] m-4 p-4 rounded-lg cursor-pointer bg-pink-100 transition-all duration-300 ease-in-out hover:shadow-[0_0_25px] hover:shadow-pink-100">
                    <img src={images.email} alt="email" className="w-10 h-10 mr-2.5" />
                    <a href="mailto:nahomnyu@gmail.com" className="font-medium no-underline">st.selasie@gmail.com</a>
                </div>
                <div className="flex flex-row justify-start items-center min-w-[290px] m-4 p-4 rounded-lg cursor-pointer bg-pink-100 transition-all duration-300 ease-in-out hover:shadow-[0_0_25px] hover:shadow-pink-100">
                    <img src={images.mobile} alt="phone" className="w-10 h-10 mr-2.5" />
                    <a href="tel:+97142553505" className="font-medium no-underline">+97142553505</a>
                </div>
            </div>

            {!isFormSubmitted ? (
                <div className="w-3/5 flex flex-col mx-auto my-4 md:w-full">
                    <div className="flex flex-col mb-4">
                        <input className="w-full p-3 mb-4 rounded-lg bg-gray-300 text-black outline-none border border-gray-400" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <input className="w-full p-3 mb-4 rounded-lg bg-gray-300 text-black outline-none border border-gray-400" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <textarea
                            className="w-full p-3 h-[170px] rounded-lg bg-gray-300 text-black outline-none border border-gray-400"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type="button" className="py-3 px-8 rounded-lg bg-black text-white font-medium outline-none mt-8 transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-900" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            ) : (
                <div>
                    <h3 className="text-4xl font-bold mt-8">Thank you for getting in touch!</h3>
                </div>
            )}
        </section>
    );
};

export default Contact;
