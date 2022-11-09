import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')



    return (
        <div className='w-11/12 mx-auto px-10 my-10'>
            <div className='my-10 mx-8'>
                <h1 className='text-3xl font-bold'>Q1: Difference between SQL and NoSQL</h1>
                <p className='mt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore ipsam aliquid nesciunt laboriosam dolor reprehenderit molestias repellat ratione! Harum, accusamus voluptatum ducimus distinctio ut id. Sed delectus impedit consequuntur!</p>
            </div>
            <div className='my-10 mx-8'>
                <h1 className='text-3xl font-bold'>Q2: What is JWT, and how does it work?</h1>
                <p className='mt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore ipsam aliquid nesciunt laboriosam dolor reprehenderit molestias repellat ratione! Harum, accusamus voluptatum ducimus distinctio ut id. Sed delectus impedit consequuntur!</p>
            </div>
            <div className='my-10 mx-8'>
                <h1 className='text-3xl font-bold'>Q3: What is the difference between javascript and NodeJS?</h1>
                <p className='mt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore ipsam aliquid nesciunt laboriosam dolor reprehenderit molestias repellat ratione! Harum, accusamus voluptatum ducimus distinctio ut id. Sed delectus impedit consequuntur!</p>
            </div>
            <div className='my-10 mx-8'>
                <h1 className='text-3xl font-bold'>Q4: How does NodeJS handle multiple requests at the same time?</h1>
                <p className='mt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore ipsam aliquid nesciunt laboriosam dolor reprehenderit molestias repellat ratione! Harum, accusamus voluptatum ducimus distinctio ut id. Sed delectus impedit consequuntur!</p>
            </div>
        </div>
    );
};

export default Blog;