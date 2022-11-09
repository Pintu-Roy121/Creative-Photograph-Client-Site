import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    const review = useLoaderData()
    const navigate = useNavigate();
    useTitle('Update-Review')

    const { _id, name, title, image, description, email, rating } = review;

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const rating = form.rating.value;
        const description = form.comment.value;

        // set exact time of review..............
        // let time_ob = new Date();
        // let hours = time_ob.getHours();
        // let minutes = time_ob.getMinutes();
        // let seconds = time_ob.getSeconds();
        // const time = {
        //     hours,
        //     minutes,
        //     seconds
        // }

        const review = {
            image,
            rating,
            description
        }

        console.log(_id, review);

        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Review update successfully');
                    navigate('/myreviews')
                }
            })


    }

    return (
        <div className='my-14'>
            <form onSubmit={handleSubmit} className='bg-gray-300 w-4/5 mx-auto p-24 rounded-lg text-center'>
                <h1 className='text-3xl font-semibold'>Update Review: <span className='text-orange-600 font-bold'>{title ? title : 'No title'}</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Name:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="text" defaultValue={name} name='name' placeholder='Your Name' required readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Email:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="text" defaultValue={email} name='email' placeholder='Your Email' required readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Image_Url:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="text" defaultValue={image} name='image' placeholder='Add your image URL' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Rating:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="number" defaultValue={rating} name='rating' placeholder='Give you rating out of 5' />
                    </div>

                </div>
                <textarea className="textarea textarea-info w-full h-40" name='comment' defaultValue={description} placeholder="Comment Here"></textarea>
                <button className="btn btn-info my-8">Submit Review</button>
            </form>
        </div>
    );
};

export default UpdateReview;