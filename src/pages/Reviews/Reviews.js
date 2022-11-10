import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profile from '../../assets/user.jpg';

const Reviews = ({ review, handleDelete }) => {

    const { _id, image, name, description, rating, title } = review;


    return (
        <div className='flex flex-row bg-gray-100 px-10 rounded-xl shadow-stone-600 shadow-lg'>
            <div className="card card-side ">
                <figure>
                    <img className='rounded-full h-20 w-20 md:h-24 md:w-24 lg:h-40 lg:w-40' src={image ? image : profile} alt="Movie" />

                </figure>
            </div>
            <div className="card-body w-full">
                <h2 className="text-xl md:text-3xl font-bold">{name}</h2>
                <h4 className="text-lg md:text-2xl font-semibold">{title}</h4>
                <p className='md:text-base'>{description}</p>
                <div className='flex gap-3 justify-between items-center'>
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
                    <div className='flex pr-5'>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-outline btn-error mr-4">Delete Review</button>
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-sm btn-outline btn-success">Edit Review</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;