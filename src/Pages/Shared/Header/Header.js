import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi'
import logo from '../../../images/logo2.png'

const Header = () => {
    return (

        <nav className="bg-white h-[110px] border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
                </Link>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row items-center">
                        <li>
                            <Link to="/" className="block py-2 pr-6 text-2xl">
                                <FiShoppingCart className='' />
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="block py-2 p-5 mx-1 text-gray-700 text-xl font-semibold hover:bg-red-500 rounded-3xl hover:text-white  ">Loin</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="block py-2 p-5 ml-1 text-gray-700 text-xl font-semibold hover:bg-red-500 rounded-3xl hover:text-white ">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;