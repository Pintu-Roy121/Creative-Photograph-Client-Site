import React from 'react';
import { FaStar } from 'react-icons/fa';
import 'react-photo-view/dist/react-photo-view.css';
import user from '../../assets/user.jpg'

const Review = ({ review }) => {
    const { image, name, description, rating, title } = review;

    return (
        <div className='flex flex-row'>
            <div className="card card-side ">
                <figure>
                    <img className='rounded-full h-20 w-20 md:h-24 md:w-24 lg:h-40 lg:w-40' src={image ? image : user} alt="Movie" />
                </figure>
            </div>
            <div className="card-body w-full">
                <h2 className="text-xl md:text-3xl font-bold">{name}</h2>
                <h4 className="text-lg md:text-2xl font-semibold">{title}</h4>
                <p className='md:text-base text-justify pr-20'>{description}</p>
                <div className='flex gap-3 items-center'>
                    <div>
                        <p className='text-lg font-bold'>Rating: {rating}</p>
                    </div>
                    <div className='flex gap-1'>
                        <FaStar className='text-lg text-amber-500' />
                        <FaStar className='text-lg text-amber-500' />
                        <FaStar className='text-lg text-amber-500' />
                        <FaStar className='text-lg text-amber-500' />
                        <FaStar className='text-lg text-amber-500' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;