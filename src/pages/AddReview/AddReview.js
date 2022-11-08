import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const { _id, title } = useLoaderData();


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const description = form.comment.value;

        // set exact time of review..............
        let time_ob = new Date();
        let hours = time_ob.getHours();
        let minutes = time_ob.getMinutes();
        let seconds = time_ob.getSeconds();
        const time = {
            hours,
            minutes,
            seconds
        }

        const review = {
            name,
            image,
            rating,
            email: user.email,
            service_id: _id,
            time,
            description
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                    toast.success('Review add successful')
                }
            })


    }

    return (
        <div className='my-14'>
            <form onSubmit={handleSubmit} className='bg-gray-300 w-4/5 mx-auto p-24 rounded-lg text-center'>
                <h1 className='text-3xl font-semibold'>Add Review: <span className='text-orange-600 font-bold'>{title}</span></h1>
                <div className='flex flex-col gap-5 my-10'>
                    <input className="input input-bordered input-info w-full" type="text" name='name' placeholder='Your Name' />
                    <input className="input input-bordered input-info w-full" type="text" name='image' placeholder='Add your image URL' />
                    <input className="input input-bordered input-info w-full" type="number" name='rating' placeholder='Give you rating out of 5' />
                </div>
                <textarea className="textarea textarea-info w-full h-40" name='comment' placeholder="Comment Here"></textarea>
                <button className="btn btn-info my-8">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;