import React from 'react';

const AddReview = () => {
    return (
        <div className='my-14'>
            <form className='bg-gray-300 w-4/5 mx-auto p-24 rounded-lg text-center'>
                <h1 className='text-3xl font-bold'>Add Your Review for This service</h1>
                <div className='flex flex-col gap-5 my-10'>
                    <input className="input input-bordered input-info w-full" type="text" name='title' placeholder='Your Name' />
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