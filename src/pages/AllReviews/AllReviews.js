import React, { useEffect, useState } from 'react';

const AllReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)
            })
    }, [])


    return (
        <div className='w-4/5 mx-auto my-12'>
            Total reviews: {reviews.length}
            <div className='flex flex-col w-4/5 mx-auto items-center'>
                {
                    reviews.map(review => {
                        const { image, name, description } = review;
                        return (
                            <div className='flex flex-row'>
                                <div className="card card-side ">
                                    <figure><img className='rounded-full h-20 w-20 md:h-24 md:w-24 lg:h-40 lg:w-40' src={image} alt="Movie" /></figure>
                                </div>
                                <div className="card-body w-full">
                                    <h2 className="text-xl md:text-3xl font-bold">{name}</h2>
                                    <p className='md:text-base text-justify'>{description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllReviews;