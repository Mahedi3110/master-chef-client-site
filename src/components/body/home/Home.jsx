import React, { useEffect, useState } from 'react';
import AllChef from '../ALLChef'
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
        <div className='mt-16'>
            <div>
                <img className='w-full' src="https://www.linkpicture.com/q/chef.jpeg" alt="" />
            </div>
            <div className='grid grid-cols-3 mx-20 gap-10 mt-20'>
                {
                    chef.map(datas =>
                        <AllChef
                            key={datas._id}
                            data={datas}
                        ></AllChef>)
                }
            </div>
        </div>
    );
};

export default Home;