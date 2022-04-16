import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div className='bg-black py-[80px] mt-14'>
            <div className=' grid grid-cols-2 w-[90%] mx-auto'>
                <div>
                    <img src={logo} alt="" className='w-52' />
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-center text-gray-100 text-lg'>
                        <div className='flex flex-col'>
                            <Link className='mb-2' to='/'>About online food</Link>
                            <Link className='mb-2' to='/'>Read our blog</Link>
                            <Link className='mb-2' to='/'>Sign up to deliver</Link>
                            <Link className='mb-2' to='/'>Add your restaurant</Link>
                        </div>
                    </div>
                    <div className='flex flex-col items-center text-gray-100 text-lg'>
                        <div className='flex flex-col'>
                            <Link className='mb-2' to='/'>Get help </Link>
                            <Link className='mb-2' to='/'>Read FAQs</Link>
                            <Link className='mb-2' to='/'>View all cities</Link>
                            <Link className='mb-2' to='/'>Restaurant near me</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] mx-auto flex justify-between'>
                <div className='mt-[100px]'>
                    <p className='text-gray-400'><small>Copyright &copy; {new Date().getFullYear()} online food</small></p>
                </div>
                <div className='text-gray-100 text-lg flex mt-[80px]'>
                    <p className='ml-24'>Privacy policy.</p>
                    <p className='ml-24'>Terms of Use</p>
                    <p className='ml-24 mr-14'>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;