import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiChat } from "react-icons/hi";

const Contact = () => {
    return (
        <div className='my-16'>
            <h1 className='text-4xl mb-10 text-center font-bold underline'>Contact Us</h1>
            <div className=' bg-[#151515] text-white rounded-xl py-14 w-11/12 mx-auto px-10 gap-10 lg:gap-0 grid grid-col-1 lg:grid-cols-3'>
                <div className='flex items-center gap-4 relative'>
                    <FaCalendarAlt className='text-4xl' />
                    <FaClock className='text-[#FF3811] text-xl absolute bg-black rounded-full bottom-1 left-5' />
                    <div>
                        <p>This one is Way to Perfect</p>
                        <h3 className='text-2xl font-semibold'>7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className='flex items-center gap-4 relative'>
                    <HiChat className=' text-3xl text-[#FF3811] absolute rounded-full bottom-7 left-4' />
                    <FaPhoneAlt className='text-4xl' />
                    <div>
                        <p>Have a question?</p>
                        <h3 className='text-2xl font-semibold'>+8801837-346129</h3>
                    </div>
                </div>
                <div className='flex items-center gap-4 '>

                    <FaMapMarkerAlt className='text-5xl text-[#FF3811]' />
                    <div>
                        <p>Do You Want to Hire? address</p>
                        <h3 className='text-2xl font-semibold'>Dahar Moubhog, Fakirhat</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;