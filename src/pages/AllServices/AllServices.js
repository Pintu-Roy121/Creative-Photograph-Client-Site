import React, { useContext, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import SingleService from '../../SingleService/SingleService';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);
    useTitle('Services');


    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    if (loading) {
        return <div className='h-32 my-24 relative'>
            <div className='absolute left-1/2'>
                <Oval
                    height={40}
                    width={40}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={6}
                    strokeWidthSecondary={6}

                />
            </div>
        </div>
    }



    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl text-center font-bold my-10 '>All of our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default AllServices;