import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { title, image_url, price, rating, description, id } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><PhotoView src={image_url}><img className='h-60 w-full cursor-pointer' src={image_url} alt="service" /></PhotoView></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-base text-justify'>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                <div className='text-xl font-semibold flex justify-between'>
                    <p>Rating: {rating}</p>
                    <p className='text-right'>Price:$ {price}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-primary">View Details <FaArrowRight className='text-lg font-bold ml-4' /></button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default SingleService;