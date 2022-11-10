import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SingleService from '../SingleService/SingleService';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://creative-photograph-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-6xl text-center font-bold underline'>Our Services</h1>
            <p className='w-1/2 mx-auto text-center text-lg my-8'>"A Great photograph is one that fully expresses what one feels, in the deepest sense, about what is being photographed."</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'>
                    <button className='btn btn-outline btn-primary my-10'>view All Services<FaArrowRight className='text-lg font-bold ml-4' /></button>
                </Link>
            </div>
        </div>
    );
};

export default Services;