import React, { useEffect, useState } from 'react';
import { FaBirthdayCake, FaThumbsUp } from "react-icons/fa";
import AllChef from './allChef/AllChef'
import { GiRingBox, GiGlassCelebration, GiCook, GiHotMeal } from "react-icons/gi";
import './Home.css'

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
                        <p className='text-gray-300 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem labore cumque autem, eligendi reiciendis molestiae laborum dignissimos dolor dolore atque? Molestias saepe voluptate error. Veritatis perferendis similique velit natus maxime?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo mollitia eos neque aut impedit, fugit magni quo corporis quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, labore?</p>
                        <button className='btn bg-white hover:bg-gray-200 text-teal-600 normal-case px-16 border-0 text-lg font-bold shadow-2xl mt-10 mb-16 md:mb-0'>Hire Chef</button>
                    </div>
                </div>
                <div className='overflow-hidden md:order-2 order-1 md:col-span-5 col-span-12 h-screen'>
                    <img className='h-screen w-full' src="https://www.linkpicture.com/q/chef3.jpg" alt="" />
                </div>
            </div>

            <div className='text-center md:mt-36 mt-24 md:mx-28 mx-16 flex flex-col items-center'>
                <h1 className='text-teal-700 font-bold text-4xl'>Meet Our Best Chef's</h1>
                <p className='mt-3 text-gray-500'>Check our best chef's here. You can also check there best recipies <br /> by clicking the check recipies button.</p>
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
                <h1 className='text-white text-6xl font-bold'>asdfasdfd</h1>
                <p className='text-white mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae ea <br /> eligendi voluptatem unde nisi. Debitis velit ea minima vero dolores sapiente, eveniet nulla, nihil quasi facilis adipisci ut vitae! <br /> Blanditiis nostrum id amet repudiandae ducimus deleniti beatae mollitia quo?</p>
                <button className='btn bg-white hover:bg-gray-200 text-teal-600 normal-case px-16 border-0 text-lg font-bold shadow-2xl mt-10'>Contact Us</button>
            </div>
            <div className='mt-20 md:mx-20 mx-10 flex flex-col items-center mb-32 text-center'>
                <h1 className='text-teal-600 text-4xl font-bold mt-10'>What we are offering?</h1>
                <p className='text-center mt-5 text-gray-500'>we are mainly offering this three things. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad iure impedit deleniti a excepturi hic exercitationem quod soluta, libero tempore.</p>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-16 md:mx-24 mt-10'>
                    <div className='flex flex-col items-center'>
                        <GiHotMeal className='text-teal-600 text-8xl' />
                        <p className='text-xl font-bold mb-3 mt-6'>The best food</p>
                        <p className='text-justify text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ratione maxime, aut accusamus inventore aperiam ullam sequi dolorem quia suscipit voluptatem iure soluta laudantium voluptates distinctio ea libero nihil saepe? asdf asdf asdf werttwuy this is the end</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaThumbsUp className='text-teal-600 text-8xl' />
                        <p className='text-xl font-bold mb-3 mt-6'>The best quality</p>
                        <p className='text-justify text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ratione maxime, aut accusamus inventore aperiam ullam sequi dolorem quia suscipit voluptatem iure soluta laudantium voluptates distinctio ea libero nihil saepe? asdf asdf asdf werttwuy this is the end</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiCook className='text-teal-600 text-8xl' />
                        <p className='text-xl font-bold mb-3 mt-6'>The best service</p>
                        <p className='text-justify text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ratione maxime, aut accusamus inventore aperiam ullam sequi dolorem quia suscipit voluptatem iure soluta laudantium voluptates distinctio ea libero nihil saepe? asdf asdf asdf werttwuy this is the end</p>
                    </div>
                </div>
            </div>

            <div className='bgImg2 h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center text-center px-10'>
                <h1 className='text-white text-6xl font-bold'>asdfasdfd</h1>
                <p className='text-white mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae ea <br /> eligendi voluptatem unde nisi. Debitis velit ea minima vero dolores sapiente, eveniet nulla, nihil quasi facilis adipisci ut vitae! <br /> Blanditiis nostrum id amet repudiandae ducimus deleniti beatae mollitia quo?</p>
                <button className='btn bg-white hover:bg-gray-200 text-teal-600 normal-case px-16 border-0 text-lg font-bold shadow-2xl mt-10'>Hire Chef</button>
            </div>

            <div className='mt-28 md:mx-20 mx-10 flex flex-col items-center mb-36'>
                <h1 className='text-teal-700 font-bold text-4xl'>Hire Chef</h1>
                <p className='text-center mt-5 text-gray-500'>If you interested to hire our chef's for your any programme or any ocations then please contect with us. <br /> We will ensure you the best quality at the best price.</p>
                <div className='grid md:grid-cols-3 grid-cols-1 md:mx-24 gap-16 text-justify mt-12'>
                    <div className='flex flex-col items-center'>
                        <FaBirthdayCake className='text-teal-600 text-8xl' />
                        <h1 className='text-xl font-bold mb-3 mt-5'>Birthdays</h1>
                        <p className='text-gray-500'>Book a table for two with the best Italian dishes served for the anniversary. Or reserve a bigger one for a huge family to get together one sunny day. Gather your friends together</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiGlassCelebration className='text-teal-600 text-9xl -mt-5' />
                        <h1 className='text-xl font-bold mb-3 mt-2'>Party</h1>
                        <p className='text-gray-500'>You can also impress your boss by choosing the best place for corporate party with your co-workers. Reserve a spacious room, set the menu, choose the drinks and invite guests.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiRingBox className='text-teal-600 text-8xl' />
                        <h1 className='text-xl font-bold mb-3 mt-5'>Weddings</h1>
                        <p className='text-gray-500'>75 seats for 75 guests are all at your disposal. Organize a party for a huge company and have fun in the restaurant. Show your friends the real world of European cuisine and especially Italian vibes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;