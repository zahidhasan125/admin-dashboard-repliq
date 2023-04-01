import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="hero py-10">
            <div className="card w-96 bg-gray-900 shadow-xl">
                <figure className="px-10 pt-8 p-4">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='' src={ user?.photoURL ? user?.photoURL : "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"} />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-start text-center">
                    <h2 className="card-title">Name: {user?.displayName ? user?.displayName : 'No Name'}</h2>
                    <p>Email: {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;