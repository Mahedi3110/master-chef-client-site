import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const notifySuccess = () => toast.success('You select the recipes as a favoruite');
const notifyError = () => toast.error('Already selected');

const ChefRecipes = () => {
    const [dish, setDish] = useState([])
    const [sele, setSele] = useState(false)
    const data = useLoaderData();
    const handleModal1 = (props) => {
        setDish(props)
    }
    const handleModal2 = (props) => {
        setDish(props)
    }
    const choose = () => {
        if (sele) {
            notifyError()
        }
        else {
            notifySuccess()
            setSele(true)
        }
    }
    return (
        <div className='mt-36 mb-28 mx-32'>
            <h1 className='text-3xl font-bold text-center text-teal-700'>Welcome to {data._name}'s recipes</h1>
            <p className='text-center text-gray-500 mt-4'>Here you can see the details of {data._name}. Check out the world famous recipes of {data._name}. <br /> You can also select any recipes of this chef as your favorite recipe.</p>
            <div className='mt-12 grid grid-cols-12'>
                <img className='rounded-lg col-span-4 w-auto' src={data._photo} alt="" />
                <div className='col-span-8 ml-7 flex flex-col justify-center'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-3xl font-bold'><span className='text-teal-600'>Name: </span>{data._name}</h1>
                            <p className='text-lg font-semibold mt-2'><span className='text-teal-600 font-bold'>Likes: </span>{data._likes}<i className="fa-solid fa-thumbs-up text-2xl ml-1"></i></p>
                            <p className='text-lg font-semibold mt-1'><span className='text-teal-600 font-bold'>Experience: </span>{data._experience} years.</p>
                            <p className='text-lg font-semibold mt-1'><span className='text-teal-600 font-bold'>Special recipes: </span>{data._bestFood.length} items.</p>
                        </div>
                        <Link to='/hireChef' className='btn shadow-lg shadow-gray-300 bg-teal-600 hover:bg-teal-800 mt-2 px-10 border-0 normal-case text-lg mr-1'>Hire Chef</Link>
                    </div>
                    <p className='text-lg font-semibold mt-1'><span className='text-teal-600 font-bold'>Bio: </span>{data._description}</p>
                    <p className='text-lg text-justify mt-3'><span className='text-teal-600 font-bold'>About: </span>{data._name} is not just a master of cooking, but also a visionary who constantly innovates and creates new culinary experiences for their diners. They possess an innate talent for blending flavors, textures, and aromas in unique and unexpected ways, always pushing the boundaries of what is possible.</p>

                    <p className='text-justify mt-3'>These chefs are driven by a passion for food and an insatiable curiosity to explore new ingredients, techniques, and cultures. They have a deep understanding of the science behind cooking, as well as an intuitive sense of artistry that allows them to create dishes that are both delicious and beautiful. They must also have a keen business sense, as running a successful restaurant requires not only culinary skills but also managerial and financial expertise.</p>

                    <p className='text-justify mt-3'>In the end, {data._name} is not just a cook, but a true artist who uses food as their medium to express their creativity and passion.</p>
                </div>
            </div>
            <p className='text-2xl text-center font-bold mt-28'>Here are some best recipes from {data._name}</p>
            <div className='grid grid-cols-3 gap-7 mt-10'>
                {
                    data._bestFood.map(food =>
                        <div key={food.id} className="overflow-hidden rounded-xl hover:shadow-lg shadow-black border-2 p-4">
                            <img className="object-cover rounded-lg w-full" src={food.photo} alt={food.name} />
                            <div className="pt-5 pb-1">
                                <h4 className="font-bold text-center text-xl">{food.name}</h4>
                                <label htmlFor="my-modal-3" onMouseEnter={() => handleModal1(food)} onClick={() => handleModal2(food)} className='btn bg-teal-600 hover:bg-teal-800 border-0 w-full mt-5'>Watch this recipe</label>
                            </div>
                        </div>)
                }
            </div>






            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  w-11/12 max-w-6xl">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-teal-600 hover:bg-teal-800 border-0">✕</label>
                    <div className='grid grid-cols-2'>
                        <div>
                            <img className='rounded-xl' src={dish.photo} alt={dish.name} />
                            <div className='mr-16 text-center'>
                                <h1 className='text-2xl font-bold'><span className='text-teal-600'>Recipes name: </span>{dish.name}</h1>
                                <p className='text-lg mt-1 text-center'>{dish.description}</p>
                            </div>
                        </div>
                        <div className='-ml-3 flex flex-col justify-between mr-5'>
                            <p className='text-lg text-teal-600 font-semibold'>Ingredients: </p>
                            <div className='flex flex-wrap'>
                                {
                                    dish?.ingredients?.map(ing => <p className='mx-2'>{ing}</p>)
                                }
                            </div>
                            <p className='text-lg mt-1'><span className='text-teal-600 font-semibold'>Recipe: </span> {dish.recipe}</p>
                            <p className='text-lg mt-1'><span className='text-teal-600 font-semibold'>Rating: </span> {dish.ratings} out of 5</p>
                            <div className='flex justify-end'>
                                {
                                    sele ?
                                        <button onClick={choose} className='btn bg-teal-600 hover:bg-teal-800 border-0 px-10' disabled>Selected</button>
                                        :
                                        <button onClick={choose} className='btn bg-teal-600 hover:bg-teal-800 border-0 px-10'>Favourite</button>
                                }
                            </div>
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;