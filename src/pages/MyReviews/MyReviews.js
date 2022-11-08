import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Review from '../Review/Review';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.email])


    return (
        <div className='w-4/5 mx-auto my-12'>
            <p className='text-2xl font-bold text-center underline my-10'>Total Review :{reviews.length}</p>
            <div className='flex flex-col gap-5 w-4/5 mx-auto items-center'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default MyReviews;