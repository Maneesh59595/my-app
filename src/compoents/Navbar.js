import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import foodImage from '../assests/logo512.png';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
 

const Navbar = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className='flex flex-row justify-between items-center m-1 px-3 shadow-sm  '>
            <div className="sm:hidden block">
                <FaBars className="text-2xl" onClick={toggleSidebar} />
            </div>
            <div className='flex justify-center  h-14 w-20'>

                <img src={foodImage} alt='su' />
            </div>
            <div className='hidden sm:flex'>
                <ul className='flex flex-row gap-4  '>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li>Stores</li>
                    <li>Franchise</li>

                </ul>
            </div>
            <div className=' flex flex-row justify-center items-center font-medium gap-3 h-16 w-16 mr-5'>
                <MdAccountCircle />
                <MdDeleteSweep />

            </div>
        </div>
    )
}

export default Navbar;


