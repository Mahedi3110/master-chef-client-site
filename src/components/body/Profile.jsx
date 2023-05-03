import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)
    const pic = user?.photoURL?.length;
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
        <div className='h-screen grid grid-cols-12 mt-16'>
            <div className='flex justify-center items-center col-span-8'>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-end mr-10'>
                        {
                            pic > 12 ?
                                <img className='w-56 rounded-xl h-56 border-2 border-gray-400' src={user.photoURL} alt='User' />
                                :
                                <img className='w-56 rounded-xl h-56 border-2 border-gray-400' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='User' />
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
            <div className=' col-span-4' style={{ backgroundColor: '#004443' }}>
                <img className='max-h-screen -ml-16' src="https://i.ibb.co/nfdJNS0/a.png" alt="" />
            </div>
        </div>
    );
};

export default Profile;