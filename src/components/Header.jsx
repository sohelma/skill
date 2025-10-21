import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-4'>
            <img src={logo} alt="" />
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-gray-400 '>{format(new Date(),'EEEE, MMMM dd, yyyy')}</p>
        </div>
        
    );
};

export default Header;