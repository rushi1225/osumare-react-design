import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };

    return (

        <nav className="bg-white">
            <div className="max-w-[1320px] mx-auto px-4 py-3 flex justify-between sm:justify-evenly items-center">
                <div className="flex items-center">
                    <div className='sm:w-20 sm:h-50 w-8 h-5 justify-start items-start align-start'>

                        <a href="#"><img src="/logo.png" alt="Do List Logo" className="h-[100%]" /></a>
                    </div>
                    {/* <span className="text-xl font-semibold ml-2">do List</span> */}
                </div>

                <div className="hidden sm:flex gap-11 font-semibold ml-20">
                    <a href="#" className="hover:text-red-500 ">About Us</a>
                    <a href="#" className="hover:text-red-500">Features</a>
                    <a href="#" className="hover:text-red-500">More Option</a>
                    <a href="#" className="hover:text-red-500">Contact</a>
                </div>

                <div className="md:hidden items-end">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex gap-5">
                    
                        <button className="sm:w-[120px] bg-white text-red-500 px-4 py-2 rounded-md hover:text-white hover:bg-red-600 duration-700 border-2 border-red-500">Log In</button>
                    <button className="sm:w-[120px] bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 duration-700">Sign Up</button>
                </div>
            </div>

            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white p-4 duration-1000">
                    <a href="#" className="block text-gray-800 py-2 hover:text-red-500">About Us</a>
                    <a href="#" className="block text-gray-800 py-2 hover:text-red-500">Features</a>
                    <a href="#" className="block text-gray-800 py-2 hover:text-red-500">More Option</a>
                    <a href="#" className="block text-gray-800 py-2 hover:text-red-500">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
