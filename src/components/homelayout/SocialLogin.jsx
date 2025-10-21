import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold'>Login With</h1>
            <div className='space-y-3 mt-5'>
                <button className='btn btn-outline w-full hover:text-blue-500'><FcGoogle size={22} />Login with Google</button>
                <button className='btn btn-outline w-full hover:text-blue-500'><FaGithub size={22} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;