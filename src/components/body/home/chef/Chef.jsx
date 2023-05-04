import React from 'react';
import './Chef.css'
import { Link } from 'react-router-dom';
const Chef = ({ data }) => {
    console.log(data);
    return (
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img className="object-cover w-full" src={data._photo} alt={data._name} />

            <div className="absolute bottom-0 left-0 px-6 py-4 w-full h-56 flex flex-col justify-between items-start"
                style={{ backgroundColor: 'rgba(0,80,80,0.7)' }}
            >
                <h4 className="text-xl font-bold tracking-tight text-white">Name: {data._name}</h4>
                <p className="text-gray-200"><span className='font-bold text-lg'>Experience:</span> {data._experience} years</p>
                <p className="text-gray-200"><span className='font-bold text-lg'>Likes:</span> {data._likes}<i class="fa-solid fa-thumbs-up text-xl ml-1"></i></p>
                <p className='text-gray-200'><span className='font-bold text-lg'>Special recipes: </span>{data._bestFood.length}</p>
                <Link to={`/chefRecipes/${data._id}`} className="btn w-full boxShadow mt-4 mb-3 bg-white hover:bg-gray-200 normal-case border-0 font-bold rounded-lg px-10 mr-3 md:mr-0 text-lg text-teal-700">View Recipes</Link>
            </div>
        </div>
    );
};

export default Chef;