import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const ALLChef = ({ data }) => {
    return (
        // <div className="card image-full">
        //     <figure><img src={data._photo} alt={data._name} /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{data._name}</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <NavLink to="/join" className="btn bg-white hover:bg-gray-200 normal-case border-0 font-bold rounded-lg px-10 text-center mr-3 md:mr-0 text-md">Join</NavLink>
        //     </div>
        // </div>
        <div class="relative overflow-hidden rounded-3xl shadow-lg">
            <img class="object-cover w-full" src={data._photo} alt={data._name} />

            <div class="absolute bottom-0 left-0 px-6 py-4 h-56 bg-black opacity-70 flex flex-col justify-between">
                <h4 class="mb-3 text-xl font-bold tracking-tight text-white">Name: {data._name}</h4>
                <p class="leading-normal text-white">{data._description} And he has {data._experience} years of experience</p>
                <NavLink to="/join" className="btn mt-4 mb-3 bg-white hover:bg-gray-200 normal-case border-0 font-bold rounded-lg px-10 mr-3 md:mr-0 text-lg text-teal-700">Join</NavLink>
            </div>
        </div>
    );
};

export default ALLChef;