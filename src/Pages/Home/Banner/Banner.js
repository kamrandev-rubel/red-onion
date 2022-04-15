import React from 'react';
import bannerImg from '../../../images/bannerbackground.png'

const Banner = () => {
    return (
        <div
            style={{ backgroundImage: `url('${bannerImg}')` }}
            className='h-[600px] bg-no-repeat bg-[length:100%_600px] flex justify-center items-center flex-col ' >
            <h1 className='text-6xl'>Best food waiting for your belly</h1>
            <div className='mt-[35px]'>
                <input type="text" name="" id="" className='outline-none border-0 w-[500px] h-[55px] rounded-full px-5 text-lg' placeholder='Search food items' />
                <button type="button" class="text-white bg-red-500 rounded-full h-[55px] w-32 relative left-[-80px]">Search</button>
            </div>
        </div>
    );
};

export default Banner;