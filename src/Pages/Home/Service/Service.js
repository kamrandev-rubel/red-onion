import React from 'react';
import { MdDirectionsBus } from 'react-icons/md'
import { AiOutlineArrowRight } from 'react-icons/ai'
import serviceImg1 from '../../../images/adult-blur-blurred-background-687824.png'
import serviceImg2 from '../../../images/chef-cook-food-33614.png'
import serviceImg3 from '../../../images/architecture-building-city-2047397.png'
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className='w-6/12 px-2'>
                <h1 className='text-4xl mb-6'>Why you choose us</h1>
                <p className='text-lg mb-12'>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dishwoods at .Boy prosperous increasing surrounded.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='hover:shadow-2xl hover:rounded-3xl h-fit'>
                    <img src={serviceImg1} alt="" />
                    <div className='px-3 pb-3'>
                        <div className='flex items-center mt-[30px] mb-2'>
                            <MdDirectionsBus className='mr-2 text-white bg-red-500 w-12 h-12 p-2.5 rounded-full ' />
                            <h2 className='text-xl '> Fast Delivary</h2>
                        </div>
                        <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about out future. <Link to='/' className='text-blue-700 text-xl  my-3  flex items-center'>See more <AiOutlineArrowRight className='bg-green-400 text-white ml-4 w-9 h-9 p-2.5 rounded-full' /> </Link> </p>
                    </div>
                </div>
                <div className='hover:shadow-2xl hover:rounded-3xl h-fit'>
                    <img src={serviceImg2} alt="" />
                    <div className='px-3 pb-3'>
                        <div className='flex items-center mt-[30px] mb-2'>
                            <MdDirectionsBus className='mr-2 text-white bg-red-500 w-12 h-12 p-2.5 rounded-full ' />
                            <h2 className='text-xl '> Fast Delivary</h2>
                        </div>
                        <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about out future. <Link to='/' className='text-blue-700 text-xl  my-3  flex items-center'>See more <AiOutlineArrowRight className='bg-green-400 text-white ml-4 w-9 h-9 p-2.5 rounded-full' /> </Link> </p>
                    </div>
                </div>
                <div className='hover:shadow-2xl hover:rounded-3xl h-fit'>
                    <img src={serviceImg3} alt="" />
                    <div className='px-3 pb-3'>
                        <div className='flex items-center mt-[30px] mb-2'>
                            <MdDirectionsBus className='mr-2 text-white bg-red-500 w-12 h-12 p-2.5 rounded-full ' />
                            <h2 className='text-xl '> Fast Delivary</h2>
                        </div>
                        <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about out future. <Link to='/' className='text-blue-700 text-xl  my-3  flex items-center'>See more <AiOutlineArrowRight className='bg-green-400 text-white ml-4 w-9 h-9 p-2.5 rounded-full' /> </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;