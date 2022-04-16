import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
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
                <Link to='breakfast' onClick={handleBreakfastFilter} className='mr-16 text-xl font-[550] hover:text-red-500 hover:border-b-4 hover:border-red-500' >Breakfast</Link>
                <Link to='lunch' onClick={handleDinnerFilter} className='mr-16 text-xl font-[550] hover:text-red-500 hover:border-b-4 hover:border-red-500' >Lunch</Link>
                <Link to='dinner' onClick={handleLunchFilter} className='mr-16 text-xl font-[550] hover:text-red-500 hover:border-b-4 hover:border-red-500' >Dinner</Link>
            </div>
            <div>
                <button className='bg-gray-400 text-white text-2xl px-10 py-3 my-[77px] rounded-lg block mx-auto hover:bg-red-500'>Checkout Your Food</button>
            </div>
            <Outlet/>
        </div>
    );
};

export default FoodFilter;
