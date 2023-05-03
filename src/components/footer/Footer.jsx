import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='md:px-28 px-10 bgtheme text-white mt-20 py-16'>
            <div className='grid md:grid-cols-6 grid-cols-3 gap-10 mx-4 mb-5'>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-bold mb-2'>Master Chef</h1>
                    <p className="text-gray-400 mb-4">Job Hunter provides a convenient and efficient way for job seekers and employers to connect and find the
                        right fit for their needs.</p>
                    <img src="../../public/Icons/Group 9969.png" alt="" />
                </div>
                <div className='md:ml-5 ml-0'>
                    <h1 className='text-lg font-bold mb-4'>About Us</h1>
                    <p className="text-gray-400 mb-2">Chef</p>
                    <p className="text-gray-400 mb-2">Work</p>
                    <p className="text-gray-400 mb-2">Avialablity</p>
                    <p className="text-gray-400 mb-2">Careers</p>
                </div>
                <div className='ml-5'>
                    <h1 className='text-lg font-bold mb-4'>Offers</h1>
                    <p className="text-gray-400 mb-2">Packages</p>
                    <p className="text-gray-400 mb-2">Plans</p>
                    <p className="text-gray-400 mb-2">Order</p>
                    <p className="text-gray-400 mb-2">Pricing</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Hire chef for</h1>
                    <p className="text-gray-400 mb-2">Marriage</p>
                    <p className="text-gray-400 mb-2">Birthday</p>
                    <p className="text-gray-400 mb-2">Meeting</p>
                    <p className="text-gray-400 mb-2">Party programme</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Contact</h1>
                    <p className="text-gray-400 mb-2">798 Dampara, Chittagong</p>
                    <p className="text-gray-400 mb-2">+1777-978-5570</p>
                </div>
            </div>
            <hr className='hr-style' />
            <div className='flex justify-between mt-5 mx-4'>
                <p className="text-gray-400">@2023 Master Chef. All Rights Reserved</p>
                <p className="text-gray-400">Powered by Master Chef</p>
            </div>
        </div>
    );
};

export default Footer;