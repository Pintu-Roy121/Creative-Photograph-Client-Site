import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import Reviews from '../Reviews/Reviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        fetch(`https://creative-photograph-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, refresh])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://creative-photograph-server-pintu-roy121.vercel.app/reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Delete Successful');
                    setRefresh(!refresh)
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className='w-4/5 mx-auto my-12'>
            <p className='text-2xl font-bold text-center underline my-10'>Total Review :{reviews.length}</p>
            <div className='flex flex-col gap-5 w-4/5 mx-auto items-center'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default MyReviews;