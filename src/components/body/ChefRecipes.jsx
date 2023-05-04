import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const data = useLoaderData();
    return (
        <div className='mt-32 mx-32'>
            <div>
                <img className='h-screen rounded-2xl' src={data._photo} alt="" />
                <h1></h1>
            </div>
        </div>
    );
};

export default ChefRecipes;