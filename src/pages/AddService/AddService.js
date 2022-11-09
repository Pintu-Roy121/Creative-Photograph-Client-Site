import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    const navigate = useNavigate();
    useTitle('Add-Service');

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const image_url = form.image.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;

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

        const service = {
            title,
            image_url,
            rating,
            price,
            description,
            time
        }

        fetch('https://creative-photograph-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                    toast.success('Service added succssful');
                    navigate('/services')
                }
            });


        console.log(service);


    }

    return (
        <div className='my-14'>
            <form onSubmit={handleSubmit} className='bg-gray-300 w-4/5 mx-auto p-24 rounded-lg text-center'>
                <h1 className='text-3xl font-bold'>Add New Service for your Profession</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5 my-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Service Title:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="text" name='title' placeholder='Add you service name' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Image-URL:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="text" name='image' placeholder='Add your image URL' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Rating:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="number" name='rating' placeholder='Give you rating out of 5' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Price:</span>
                        </label>
                        <input className="input input-bordered input-info w-full" type="number" name='price' placeholder='Price $' required />
                    </div>
                </div>
                <textarea className="textarea textarea-info w-full h-40" name='description' placeholder="Add Your Descriptiom" required></textarea>
                <button className="btn btn-info my-8">Submit Your service</button>
            </form>
        </div>
    );
};

export default AddService;