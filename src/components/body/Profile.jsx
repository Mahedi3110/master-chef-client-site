import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)
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
        <div className='h-screen flex justify-center items-center'>
            <div className='grid grid-cols-2'>
                <div className='flex justify-end mr-10'>
                    {
                        user.photoURL.length > 12 ?
                            <img className='w-56 h-56 border-2 border-gray-400' src={user.photoURL} alt='User' />
                            :
                            <img className='w-56 h-56 border-2 border-gray-400' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='User' />
                    }
                </div>
                <div>
                    <h1 className='text-3xl font-bold mb-2'>{user.displayName}</h1>
                    <p><span className='text-lg font-bold'>Email: </span> {user.email}</p>
                    <p><span className='text-lg font-bold'>Create account: </span> {user.metadata.creationTime.slice(0, 16)}</p>
                    <p><span className='text-lg font-bold'>Last login time: </span> {user.metadata.lastSignInTime.slice(0, 16)}</p>
                    <p><span className='text-lg font-bold'>Phone number: </span> {user.phoneNumber ? phoneNumber : 'N/A'}</p>
                    <button onClick={handleLogOut} className='btn bg-teal-700 hover:bg-teal-950 text-white normal-case mt-3 px-12'>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;