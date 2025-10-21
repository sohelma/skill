import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';
import logo from '../assets/logo.png';




const Navbar = () => {
    return (
       <div className='flex justify-between items-center'>
         <div className=''>
           <img src={logo}className='w-15 h-15 object-container' alt="" />
         </div>
          <div className='flex gap-4 text-gray-700 font-semibold'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>My Profile</NavLink>
         </div>
        
         <div className='flex gap-3'>
             <img src={user} alt="" />
            <button className='btn bg-[#403F3F] text-white'>Login</button></div>
       </div>
    );
};

export default Navbar;