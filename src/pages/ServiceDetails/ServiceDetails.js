import React from 'react';
import { PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, image_url, price, rating, description } = useLoaderData();


    return (
        <div className="card w-3/4 mx-auto my-10 card-compact bg-base-100 shadow-xl">
            <figure><PhotoView src={image_url}><img className='w-full' src={image_url} alt="service" /></PhotoView></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-base text-justify'>{description}</p>
                <div className='text-xl font-semibold flex justify-between'>
                    <p>Rating: {rating}</p>
                    <p className='text-right'>Price:$ {price}</p>
                </div>
                <div className="text-center">
                    <h1 className='text-2xl font-bold underline'>All Reviews</h1>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;