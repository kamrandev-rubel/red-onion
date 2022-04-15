import React from 'react';

const FoodGellary = ({food}) => {
    const { id, picture, name, description, price } = food;
    return (
        <div className='w-[380px] h-412px text-center hover:shadow-2xl hover:rounded-xl p-5 text-gray-700'>
            <img src={picture} alt="" className='w-full mx-auto' />
            <h2 className='capitalize text-xl text-gray-900 my-2'>{name}</h2>
            <p>{description}</p>
            <p className='font-semibold text-2xl text-gray-900 mt-3'>{price}</p>
        </div>
    );
};

export default FoodGellary;