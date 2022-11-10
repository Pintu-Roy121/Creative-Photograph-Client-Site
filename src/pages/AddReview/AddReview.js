import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, image_url } = useLoaderData();
    const navigate = useNavigate();
    useTitle('Add-Review')


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
            title,
            name,
            image,
            rating,
            email: user.email,
            service_id: _id,
            time,
            description
        }

        // post a Review for to the  Mongodb...................................
        fetch('https://creative-photograph-server.vercel.app/reviews', {
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
                    toast.success('Review add successful');
                    navigate('/services')
                }
            })


    }

    return (
        <div className='my-14'>
            <form onSubmit={handleSubmit} className='bg-gray-300 w-4/5 mx-auto p-24 rounded-lg text-center'>
                <img className='w-full mx-autor rounded-xl' src={image_url} alt="" />
                <h1 className='text-3xl font-semibold mt-4 underline'>Add Review For: <span className='text-orange-600 font-bold'>{title}</span></h1>
                <div className='flex flex-col gap-5 my-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="text" name='name' placeholder='Your Name' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your Photo Url:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="text" name='image' placeholder='Add your image URL' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Rating:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="number" name='rating' placeholder='Give you rating out of 5' />
                    </div>
                </div>
                <textarea className="textarea textarea-info w-full h-40" name='comment' placeholder="Comment Here"></textarea>
                <button className="btn btn-info my-8">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;