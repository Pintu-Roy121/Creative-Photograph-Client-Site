import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../assets/Image1.jpg';
import birdimg from '../../assets/kingfisher.jpg';

const Choose = () => {
    return (
        <div className='w-full mx-auto py-14 px-10'>
            <h1 className='text-4xl mb-10 text-center font-bold underline'>About Us</h1>
            <div className="hero">
                <div className="hero-content p-0 flex-col gap-16 lg:flex-row-reverse">
                    <div className='w-full mx-auto lg:w-1/2 relative'>
                        <img src={image} className="rounded-lg shadow-2xl w-full lg:w-11/12" alt='' />
                        <img src={birdimg} className="rounded-lg shadow-2xl w-9/12 h-60 lg:h-fit lg:w-1/2 absolute left-20 -bottom-32 lg:-left-12 lg:-bottom-14 border-8 border-white" alt='' />
                    </div>
                    <div className='w-full px-5 mt-24 lg:mt-0  lg:px-0 lg:w-1/2'>
                        <h1 className="text-4xl text-center lg:text-left font-bold  mt-2">
                            Why You Choose Me..........
                        </h1>
                        <p className="py-6 text-lg text-justify">Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
                        <Link to='/services'>
                            <button className="btn btn-outline btn-primary mt-4">See All Services <FaArrowRight className='text-lg font-bold ml-4' /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Choose;