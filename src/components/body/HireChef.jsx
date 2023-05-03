import React from 'react';
import { Link } from 'react-router-dom';

const HireChef = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <h1 className='text-4xl font-bold'>This is the hire chef page</h1>
            <p className='mt-5 text-gray-500'>Sorry!! This page is under construction.</p>
            <p>Back to the<Link to='/' className='text-teal-600 btn btn-link -ml-3'>home page</Link></p>
        </div>
    );
};

export default HireChef;