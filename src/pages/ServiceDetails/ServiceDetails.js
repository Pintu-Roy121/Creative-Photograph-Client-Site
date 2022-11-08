import React, { useContext } from 'react';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { title, image_url, price, rating, description } = useLoaderData();


    return (
        <div className="card w-3/4 mx-auto pb-14 my-10 card-compact bg-base-100 shadow-xl">
            <figure><PhotoView src={image_url}><img className='w-full' src={image_url} alt="service" /></PhotoView></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-base text-justify'>{description}</p>
                <div className='text-xl font-semibold flex px-16'>
                    <p>Rating: {rating}</p>
                    <p className='text-right'>Price:$ {price}</p>
                </div>
                <hr className='border border-t-2 mt-24 border-sky-400' />
                <div className='relative'>
                    <h1 className='text-2xl text-center font-bold underline mb-20'>All Reviews</h1>
                    <div className='absolute top-0 right-5'>
                        {
                            user?.uid ?
                                <Link to='/addreview'>
                                    <button className="btn btn-sm btn-outline btn-info">Add a Review</button>
                                </Link>
                                :
                                <Link to='/login'>
                                    <button className="btn btn-sm btn-outline btn-info">Please Login to Add Review</button>
                                </Link>
                        }
                    </div>
                    <Reviews></Reviews>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;