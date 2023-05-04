import React, { useEffect, useState } from 'react';

const HireChef = () => {
    const [chefData, setChefData] = useState([])
    useEffect(() => {
        const fetchFunction = async () => {
            const res = await fetch(`https://chef-server-rouge.vercel.app/allChef`);
            const data = await res.json();
            setChefData(data);
        }
        fetchFunction();
    }, [])
    return (
        <div className='mt-36 mx-32'>
            <h1 className='text-3xl font-bold text-center'>Choose ans hire chef from here</h1>
            <p className='text-gray-500 text-center mt-4'>If you interested to hire our chef's for your any programme or any ocations then please contect with us. <br />
                We will ensure you the best quality at the best price.</p>
            <div className='mt-16 mb-28'>
                {
                    chefData.map(data =>
                        <div key={data._id} className='mb-16 border-2 rounded-lg p-5 bg-teal-50'>
                            <div className='grid grid-cols-12'>
                                <img className='rounded-lg col-span-4 w-auto' src={data._photo} alt="" />
                                <div className='col-span-8 flex flex-col justify-between ml-7'>
                                    <div>
                                        <div className='flex justify-between items-start'>
                                            <div>
                                                <h1 className='text-3xl font-bold'><span className='text-teal-600'>Name: </span>{data._name}</h1>
                                                <p className='text-lg font-semibold mt-2'><span className='text-teal-600 font-bold'>Likes: </span>{data._likes}<i class="fa-solid fa-thumbs-up text-2xl ml-1"></i></p>
                                                <p className='text-lg font-semibold mt-1'><span className='text-teal-600 font-bold'>Experience: </span>{data._experience} years.</p>
                                                <p className='text-lg font-semibold mt-1'><span className='text-teal-600 font-bold'>Special recipes: </span>{data._bestFood.length} items.</p>
                                            </div>
                                            <button className='btn shadow-lg shadow-gray-300 bg-teal-600 hover:bg-teal-800 mt-2 px-5 border-0 normal-case'>Hire {data._name}<i class="fa-solid fa-arrow-right-long text-lg ml-2 font-bold"></i></button>
                                        </div>
                                        <p className='text-lg font-semibold mt-1'><span className='text-teal-600 font-bold'>About: </span>{data._description}</p>
                                    </div>
                                    <p className='text-lg font-semibold mt-1'>Here are some best recipes from {data._name}</p>
                                    <div className='grid grid-cols-3 gap-5'>
                                        {
                                            data._bestFood.map(food =>
                                                <div className="relative overflow-hidden rounded-lg hover:shadow-lg shadow-black">
                                                    <img className="object-cover w-full" src={food.photo} alt={food.name} />
                                                    <div className="absolute bottom-0 left-0 w-full h-12 bg-teal-800 opacity-80">
                                                        <h4 className="font-bold tracking-tight text-center text-white mt-2">Name: {food.name}</h4>
                                                    </div>
                                                </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default HireChef;