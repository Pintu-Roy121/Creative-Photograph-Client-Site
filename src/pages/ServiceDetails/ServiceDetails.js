import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext);
    useTitle('Details')

    const { title, image_url, price, rating, description, _id } = useLoaderData();

    // get specific service details................
    useEffect(() => {
        fetch(`https://creative-photograph-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [_id])



    return (
        <div className="card w-3/4 mx-auto pb-14 my-10 card-compact bg-base-100 shadow-xl">
            <figure><PhotoView src={image_url}><img className='w-full' src={image_url} alt="service" /></PhotoView></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-base text-justify'>{description}</p>
                <div className='text-xl font-semibold flex px-16'>
                    <div className='flex flex-col gap-3'>
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
                    <p className='text-right'>Price:$ {price}</p>
                </div>
                <hr className='border border-t-2 mt-24 mb-10 border-sky-400' />
                <div className='relative'>
                    <h1 className='text-xl md:text-2xl ml-12 font-bold underline mb-14'>Reviews</h1>
                    <div className='absolute top-0 right-5'>
                        {
                            user?.uid ?
                                <Link to={`/addreview/${_id}`}>
                                    <button className="btn btn-sm btn-outline btn-info">Add a Review</button>
                                </Link>
                                :
                                <Link to={`/addreview/${_id}`}>
                                    <button className="btn btn-sm btn-outline btn-info">Please Login to Add Review</button>
                                </Link>
                        }
                    </div>
                    <div className='flex flex-col gap-8 mx-5'>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;