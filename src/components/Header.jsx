import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <nav className="bg-teal-50 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-xl shadow-gray">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-10 md:py-2 py-4">
                    <Link to="/" className="flex items-center md:p-2">
                        <img src="https://www.linkpicture.com/q/favpng_masterchef-logo-television-show-wordmark.png" className="h-8 mr-1" alt="Job Hunter Logo" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-teal-700 dark:text-white">Master Chef</span>
                    </Link>
                    <div className="flex md:order-2 md:p-2">

                        {loading ? <p className='mx-3 my-3'>Loading...</p> :
                            user ? <div className='flex items-center'>
                                <NavLink className={({ isActive }) => isActive ? 'text-blue-700 mx-5' : 'mx-5 hover:text-blue-500'} to="/profile">
                                    <div className='w-10 h-10 rounded-full border-2 boder-black overflow-hidden'>
                                        {
                                            user.photoURL ? <img className='w-10 rounded-full' src={user.photoURL} alt='' /> : <img className='w-10 rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                                        }
                                    </div>
                                </NavLink>
                                <i onClick={handleLogOut} className="fa-solid fa-right-from-bracket text-3xl cursor-pointer"></i>
                            </div> :
                                <NavLink to="/join" className="btn bg-teal-700 hover:bg-teal-950 normal-case border-0 font-bold rounded-lg px-10 text-center mr-3 md:mr-0 text-md">Join</NavLink>
                        }

                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:p-2" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'text-teal-600 mx-5 font-bold border-b-2 border-teal-600' : 'mx-5 hover:text-teal-600 hover:border-b-2 hover:border-teal-600'} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'text-teal-600 mx-5 font-bold border-b-2 border-teal-600' : 'mx-5 hover:text-teal-600 hover:border-b-2 hover:border-teal-600'} to="/statistics">Statistics</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'text-teal-600 mx-5 font-bold border-b-2 border-teal-600' : 'mx-5 hover:text-teal-600 hover:border-b-2 hover:border-teal-600'} to="/applied_jobs">Applied Jobs</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'text-teal-600 mx-5 font-bold border-b-2 border-teal-600' : 'mx-5 hover:text-teal-600 hover:border-b-2 hover:border-teal-600'} to="/blog">Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;