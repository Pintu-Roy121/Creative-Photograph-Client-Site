import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';

const MyReviews = () => {
    const { user, Logout } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate()
    useTitle('My-Reviews')

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('User-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    Logout()
                        .then(result => {
                            navigate('/login')
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, refresh, Logout, navigate])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
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
            <span>
                {
                    reviews ?
                        <p className='text-2xl font-bold text-center underline my-10'>Total Review :{reviews.length}</p>
                        :
                        <p className='text-2xl font-bold text-center my-10'>No Review Were Added</p>
                }
            </span>
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