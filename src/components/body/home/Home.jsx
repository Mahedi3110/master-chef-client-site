import React, { useEffect, useState } from 'react';
import './Home.css'
import ALLChef from './ALLChef';

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
            <div className='grid grid-cols-12'>
                <div className='bgColor col-span-7'>

                </div>
                <div className='overflow-hidden col-span-5'>
                    <img className='md:h-screen w-full' src="https://www.linkpicture.com/q/chef3.jpg" alt="" />
                </div>
            </div>

            <div className='mt-36 mx-28 flex flex-col items-center'>
                <h1 className='text-teal-700 font-bold text-4xl'>Meet Our Best Chef's</h1>
                <p className='text-center mt-3 text-gray-500'>Check our best chef's here. You can also check there best recipies <br /> by clicking the check recipies button.</p>
                <div className='grid grid-cols-3 gap-10 mt-16'>
                    {
                        chef.map(datas =>
                            <ALLChef
                                key={datas._id}
                                data={datas}
                            ></ALLChef>)
                    }
                </div>
            </div>

            <div className='mt-20'>
                <div className='bgImg h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center text-center'>
                    <h1 className='text-white text-6xl font-bold'>asdfasdfd</h1>
                    <p className='text-white mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae ea <br /> eligendi voluptatem unde nisi. Debitis velit ea minima vero dolores sapiente, eveniet nulla, nihil quasi facilis adipisci ut vitae! <br /> Blanditiis nostrum id amet repudiandae ducimus deleniti beatae mollitia quo?</p>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-8'></div>
                    <div className='col-span-4 bgColor'>
                        <img className='max-h-screen -ml-16' src="https://i.ibb.co/tqM0M8t/ace-min.png" alt="" />
                    </div>
                </div>
                <div className='bgImg2 h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center text-center'>

                </div>
            </div>

            <div className='mt-28 mx-20 flex flex-col items-center'>
                <h1 className='text-teal-700 font-bold text-4xl'>Hire Chef</h1>
                <p className='text-center mt-3 text-gray-500'>If you interested to hire our chef's for your any programme or any ocations then please contect with us. <br /> We will ensure you the best quality at the best price.</p>
                <div className='grid grid-cols-3 mx-28 gap-10 text-justify mt-10'>
                    <div className='flex flex-col items-center'>
                        <div className='border w-40 h-40 rounded-full overflow-hidden flex justify-center items-center bg-green-50'>
                            <img className='w-20' src="https://www.pngitem.com/pimgs/m/201-2018181_birthday-cake-birthday-cake-icon-png-transparent-png.png" alt="" />
                        </div>
                        <h1 className='text-xl font-bold mb-3 mt-5'>Birthdays</h1>
                        <p className='text-gray-500'>Book a table for two with the best Italian dishes served for the anniversary. Or reserve a bigger one for a huge family to get together one sunny day. Gather your friends together</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='border w-40 h-40 rounded-full overflow-hidden flex justify-center items-center bg-green-50'>
                            <img className='w-20' src="https://www.pngitem.com/pimgs/m/109-1092755_party-icone-champagne-white-hd-png-download.png" alt="" />
                        </div>
                        <h1 className='text-xl font-bold mb-3 mt-5'>Party</h1>
                        <p className='text-gray-500'>You can also impress your boss by choosing the best place for corporate party with your co-workers. Reserve a spacious room, set the menu, choose the drinks and invite guests.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='border w-40 h-40 rounded-full overflow-hidden flex justify-center items-center bg-green-50'>
                            <img className='w-20' src="https://www.pngitem.com/pimgs/m/6-60886_transparent-free-wedding-clipart-wedding-icon-png-free.png" alt="" />
                        </div>
                        <h1 className='text-xl font-bold mb-3 mt-5'>Weddings</h1>
                        <p className='text-gray-500'>75 seats for 75 guests are all at your disposal. Organize a party for a huge company and have fun in the restaurant. Show your friends the real world of European cuisine and especially Italian vibes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;