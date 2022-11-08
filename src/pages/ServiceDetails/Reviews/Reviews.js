import React from 'react';

const Reviews = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex w-4/5 items-center'>
                <div className="card card-side ml-20 ">
                    <figure><img className='rounded-full h-40 w-40' src={'https://i.ibb.co/bQ809Bx/PRD-0113-Edit.jpg'} alt="Movie" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">Pintu roy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab dolor labore beatae consectetur blanditiis laboriosam harum neque minima omnis?</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;