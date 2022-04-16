import React, { useState } from 'react';
import useFoodData from '../../../Hooks/useFoodData';
import FoodGellary from '../FoodGellary/FoodGellary';

const FoodFilter = () => {
    const [allFoods, setAllFoods] = useFoodData()
    const [filterFoods, setFilterFoods] = useState([]);

    const handleBreakfastFilter = () => {
        const breakfastFood = allFoods.filter(food => food.category === 'breakfast')
        setFilterFoods(breakfastFood);
    }
    const handleDinnerFilter = () => {
        const dinnerFood = allFoods.filter(food => food.category === 'dinner')
        setFilterFoods(dinnerFood);
    }
    const handleLunchFilter = () => {
        const lunchFood = allFoods.filter(food => food.category === 'lunch')
        setFilterFoods(lunchFood);
    }

    return (
        <div>
            <div className='flex justify-center items-center my-[95px]'>
                <button onClick={handleBreakfastFilter} className='mr-16 text-xl font-[550] hover:text-red-500 hover:border-b-4 hover:border-red-500' >Breakfast</button>
                <button onClick={handleDinnerFilter} className='mr-16 text-xl font-[550] hover:text-red-500 hover:border-b-4 hover:border-red-500' >Lunch</button>
                <button onClick={handleLunchFilter} className='mr-16 text-xl font-[550] hover:text-red-500 hover:border-b-4 hover:border-red-500' >Dinner</button>
            </div>
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto  '>
                {
                    filterFoods.map(food => <FoodGellary key={food.id} food={food} />)
                }
            </div>
            <div>
                <button className='bg-gray-400 text-white text-2xl px-10 py-3 my-[77px] rounded-lg block mx-auto hover:bg-red-500'>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default FoodFilter;


//*************************************************** */
import React from 'react';

const FoodGellary = ({ food }) => {
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