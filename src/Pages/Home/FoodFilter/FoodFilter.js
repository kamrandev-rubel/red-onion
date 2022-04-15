import React from 'react';

const FoodFilter = () => {
    return (
        <div>
            <div className='flex justify-center items-center my-[95px]'>
                <button className='mr-16 text-xl font-[550] hover:text-red-500 hover:border-b-4 hover:border-red-500' >Breakfast</button>
                <button className='mr-16 text-xl font-[550] hover:text-red-500 hover:border-b-4 hover:border-red-500' >Lunch</button>
                <button className='mr-16 text-xl font-[550] hover:text-red-500 hover:border-b-4 hover:border-red-500' >Dinner</button>
            </div>
            <div>
                <h2>food items</h2>
            </div>
        </div>
    );
};

export default FoodFilter;