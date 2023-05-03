import React from 'react';
import './AllChef.css'
import { NavLink } from 'react-router-dom';
const AllChef = ({ data }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img className="object-cover w-full" src={data._photo} alt={data._name} />

            <div className="absolute bottom-0 left-0 px-6 py-4 h-56 flex flex-col justify-between"
                style={{ backgroundColor: 'rgba(0,80,80,0.7)' }}
            >
                <h4 className="mb-3 text-xl font-bold tracking-tight text-white">Name: {data._name}</h4>
                <p className="leading-normal text-white">{data._description} And he has {data._experience} years of experience</p>
                <NavLink to="/join" className="btn boxShadow mt-4 mb-3 bg-white hover:bg-gray-200 normal-case border-0 font-bold rounded-lg px-10 mr-3 md:mr-0 text-lg text-teal-700">Join</NavLink>
            </div>
        </div>
    );
};

export default AllChef;