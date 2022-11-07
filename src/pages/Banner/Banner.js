import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen mb-8" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-11/12">
                    <h1 className="mb-5 text-6xl w-full font-bold text-white">Welcome To Creative Photograph Zone</h1>
                    <h2 className='text-3xl font-semibold text-blue-400 italic underline'>Our services</h2>
                    <p className='text-2xl font-semibold mt-5'>
                        <span className=' cursor-pointer hover:text-blue-300 duration-500'>Wedding | </span>
                        <span className=' cursor-pointer hover:text-blue-300 duration-500'>Birthday | </span>
                        <span className=' cursor-pointer hover:text-blue-300 duration-500'>Product | </span>
                        <span className=' cursor-pointer hover:text-blue-300 duration-500'>Travel</span>
                        <br />
                        <span className=' cursor-pointer hover:text-blue-300 duration-500'>Advertising | </span>
                        <span className=' cursor-pointer hover:text-blue-300 duration-500'>Family | </span>
                        <span className=' cursor-pointer hover:text-blue-300 duration-500'> Sports</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;