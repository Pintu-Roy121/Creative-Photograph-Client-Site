import React, { useContext, useEffect, useState } from 'react';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext);
    const { title, image_url, price, rating, description, _id } = useLoaderData();

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
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
                    <p>Rating: {rating}</p>
                    <p className='text-right'>Price:$ {price}</p>
                </div>
                <hr className='border border-t-2 mt-24 mb-10 border-sky-400' />
                <div className='relative'>
                    <h1 className='text-xl md:text-2xl text-center font-bold underline mb-14'>All Reviews</h1>
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
                    <div>
                        {
                            reviews.map(review => <Reviews
                                key={_id}
                                review={review}
                            ></Reviews>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;