import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center mb-20'>
                <h1 className='text-5xl font-bold mb-5'>Sorry</h1>
                <h1 className='text-5xl font-semibold mb-5'>Page not found</h1>
                <h1 className='text-8xl font-bold animate-bounce h-32 mt-5'>404</h1>
                <p>Go to the <Link className='text-blue-600 underline font-semibold' to="/">Home Page</Link></p>
            </div>
        </div>
    );
};

export default NotFound;