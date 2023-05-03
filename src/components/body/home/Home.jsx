import React, { useEffect, useState } from 'react';
import { FaBirthdayCake, FaThumbsUp } from "react-icons/fa";
import AllChef from './allChef/AllChef'
import { GiRingBox, GiGlassCelebration, GiCook, GiHotMeal } from "react-icons/gi";
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [chef, setChef] = useState([])
    useEffect(() => {
        const fetchFunction = async () => {
            const res = await fetch(`https://chef-server-rouge.vercel.app/allChef`);
            const data = await res.json();
            setChef(data);
        }
        fetchFunction();
    }, [])
    return (
        <div className='mt-20'>
            <div className='grid md:grid-cols-12'>
                <div className='bgColor md:order-1 order-2 col-span-7 flex justify-center items-center'>
                    <div className='md:ml-28 md:mr-0 mx-16 text-center md:text-left'>
                        <h1 className='text-white font-bold text-6xl mt-10 md:mt-0'>We have the <br /> best and experienced <br />chef's in the world</h1>
                        <p className='text-gray-300 mt-8'>Our Master chef website is the ultimate destination for food lovers and cooking enthusiasts alike. Our expert team of culinary professionals provides step-by-step instructions for each recipe, ensuring that even novice chefs can create restaurant-quality meals in their own homes. Whether you're looking to impress your dinner guests or simply want to improve your cooking skills, our great chef website has everything you need to become a master in the kitchen.</p>
                        <Link to='/hireChef' className='btn bg-white hover:bg-gray-200 text-teal-600 normal-case px-16 border-0 text-lg font-bold shadow-2xl mt-10 mb-16 md:mb-0'>Hire Chef</Link>
                    </div>
                </div>
                <div className='overflow-hidden md:order-2 order-1 md:col-span-5 col-span-12 h-screen'>
                    <img className='h-screen w-full' src="https://www.linkpicture.com/q/chef3.jpg" alt="" />
                </div>
            </div>

            <div className='text-center md:mt-36 mt-24 md:mx-28 mx-16 flex flex-col items-center'>
                <h1 className='text-teal-700 font-bold text-4xl'>Meet Our Best Chef's</h1>
                <p className='mt-3 text-gray-500'>Discover the world's top chefs and their signature dishes, from Massimo Bottura's contemporary Italian cuisine to <br /> Dominique Crenn's inventive French fare. Prepare to be amazed and delighted.</p>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-16'>
                    {
                        chef.map(datas =>
                            <AllChef
                                key={datas._id}
                                data={datas}
                            ></AllChef>)
                    }
                </div>
            </div>

            <div className='bgImg h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center text-center mt-20 px-10'>
                <h1 className='text-white text-6xl font-bold'>Want to know more about us?</h1>
                <p className='text-white mt-10 text-lg'>Our Master Chef's is an online platform dedicated to all things culinary. <br /> It boasts a vast collection of recipes, cooking tips, and culinary content, including an extensive library of video recipes <br /> from renowned chef's. Whether you are a home cook or a professional chef, Great Chefs offers a comprehensive <br /> resource for expanding your culinary horizons and exploring the world of cooking.</p>
                <Link to='/about' className='btn bg-white hover:bg-gray-200 text-teal-600 normal-case px-16 border-0 text-lg font-bold shadow-2xl mt-16'>Contact Us</Link>
            </div>
            <div className='mt-20 md:mx-20 mx-10 flex flex-col items-center mb-32 text-center'>
                <h1 className='text-teal-600 text-4xl font-bold mt-10'>What we are offering?</h1>
                <p className='text-center mt-5 text-gray-500'>We pride ourselves on offering the best chef's and exceptional food service to satisfy your cravings. <br /> Enjoy our delicious cuisine and let us take care of your taste buds.</p>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-16 md:mx-24 mt-10'>
                    <div className='flex flex-col items-center'>
                        <GiHotMeal className='text-teal-600 text-8xl' />
                        <p className='text-xl font-bold mb-3 mt-6'>The best food</p>
                        <p className='text-justify text-gray-500'>Our chef's take pride in offering the best food to our customers. From fresh, locally-sourced ingredients to expertly crafted dishes, we are dedicated to providing an exceptional dining experience that will leave you satisfied and wanting more.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaThumbsUp className='text-teal-600 text-8xl' />
                        <p className='text-xl font-bold mb-3 mt-6'>The best quality</p>
                        <p className='text-justify text-gray-500'>Our chef's are committed to providing the best quality chef for our customers. Our highly skilled and experienced chefs use only the finest ingredients to create delicious and innovative dishes that will tantalize your taste buds and exceed your expectations.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiCook className='text-teal-600 text-8xl' />
                        <p className='text-xl font-bold mb-3 mt-6'>The best service</p>
                        <p className='text-justify text-gray-500'>We offer the best chef service. Our attentive staff are dedicated to ensuring that you have a great dining experience, from the moment you walk in the door to the final bite of your delicious meal. If you want to know more about us please go to the about page.</p>
                    </div>
                </div>
            </div>

            <div className='bgImg2 h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center text-center px-10'>
                <h1 className='text-white text-6xl font-bold'>Want to hire Chef?</h1>
                <p className='text-white mt-10 text-lg'>Our Master Chef's is a go-to website for all things culinary, providing access to a vast array of recipes, <br /> cooking tips, and culinary content. With an extensive library of video recipes from world-renowned chefs, <br /> Master Chef's is the ultimate resource for home cook's and food enthusiasts alike. From classic comfort foods to exotic international dishes, <br /> explore the world of cooking with Master Chef's.</p>
                <Link to='/hireChef' className='btn bg-white hover:bg-gray-200 text-teal-600 normal-case px-16 border-0 text-lg font-bold shadow-2xl mt-16'>Hire Chef</Link>
            </div>

            <div className='mt-28 md:mx-20 mx-10 flex flex-col items-center mb-36'>
                <h1 className='text-teal-700 font-bold text-4xl'>Hire Chef</h1>
                <p className='text-center mt-5 text-gray-500'>If you interested to hire our chef's for your any programme or any ocations then please contect with us. <br /> We will ensure you the best quality at the best price.</p>
                <div className='grid md:grid-cols-3 grid-cols-1 md:mx-24 gap-16 text-justify mt-12'>
                    <div className='flex flex-col items-center'>
                        <FaBirthdayCake className='text-teal-600 text-8xl' />
                        <h1 className='text-xl font-bold mb-3 mt-5'>Birthdays</h1>
                        <p className='text-gray-500'>From our website, you can hire a chef for your birthday party and enjoy a great culinary experience. Customized menus, impeccable service, and professional chefs, all at your fingertips.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiGlassCelebration className='text-teal-600 text-9xl -mt-5' />
                        <h1 className='text-xl font-bold mb-3 mt-2'>Party</h1>
                        <p className='text-gray-500'>We are offering hassle-free way to hire a chef for your party. Enjoy customized menus, impeccable service, and a unique culinary experience, all in the comfort of your own home.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiRingBox className='text-teal-600 text-8xl' />
                        <h1 className='text-xl font-bold mb-3 mt-5'>Weddings</h1>
                        <p className='text-gray-500'>On Master Chef's website, you can easily hire a chef for your wedding party. Enjoy delicious, restaurant-quality food and impeccable service, all tailored to your preferences and budget.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;