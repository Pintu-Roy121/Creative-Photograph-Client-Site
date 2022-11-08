import React from 'react';

const Reviews = () => {
    return (
        <div >
            <div className='flex w-4/5 mx-auto items-center'>
                <div className="card card-side ">
                    <figure><img className='rounded-full h-20 w-20 md:h-24 md:w-24 lg:h-40 lg:w-40' src={'https://i.ibb.co/bQ809Bx/PRD-0113-Edit.jpg'} alt="Movie" /></figure>
                </div>
                <div className="card-body w-full">
                    <h2 className="text-xl md:text-3xl font-bold">Pintu roy</h2>
                    <p className='md:text-base text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab dolor labore beatae consectetur blanditiis laboriosam harum neque minima omnis?</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;