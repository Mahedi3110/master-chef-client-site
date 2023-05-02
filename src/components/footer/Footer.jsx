import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='md:px-28 px-5 bg-black text-white mt-20 py-16'>
            <div className='grid md:grid-cols-6 grid-cols-3 gap-10 mx-4 mb-5'>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-bold mb-2'>Job Hunter</h1>
                    <p className="text-gray-400 mb-4">Job Hunter provides a convenient and efficient way for job seekers and employers to connect and find the
                        right fit for their needs.</p>
                    <img src="../../public/Icons/Group 9969.png" alt="" />
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Company</h1>
                    <p className="text-gray-400 mb-2">About Us</p>
                    <p className="text-gray-400 mb-2">Work</p>
                    <p className="text-gray-400 mb-2">Latest News</p>
                    <p className="text-gray-400 mb-2">Careers</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Product</h1>
                    <p className="text-gray-400 mb-2">Product</p>
                    <p className="text-gray-400 mb-2">Plans & Pricing</p>
                    <p className="text-gray-400 mb-2">Customers</p>
                    <p className="text-gray-400 mb-2">Integrations</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Integrations</h1>
                    <p className="text-gray-400 mb-2">Help Desk</p>
                    <p className="text-gray-400 mb-2">Sales</p>
                    <p className="text-gray-400 mb-2">Become a Partner</p>
                    <p className="text-gray-400 mb-2">Developers</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Contact</h1>
                    <p className="text-gray-400 mb-2">798 Dampara, Chittagong</p>
                    <p className="text-gray-400 mb-2">+1777-978-5570</p>
                </div>
            </div>
            <hr className='hr-style' />
            <div className='flex justify-between mt-5 mx-4'>
                <p className="text-gray-400">@2023 Job Hunter. All Rights Reserved</p>
                <p className="text-gray-400">Powered by Job Hunter</p>
            </div>
        </div>
    );
};

export default Footer;