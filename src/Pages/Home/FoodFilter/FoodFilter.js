import React, { useEffect, useState } from 'react';
import FoodGellary from '../FoodGellary/FoodGellary';

const FoodFilter = () => {
    const [allFoods, setAllFoods] = useState([]);
    const [folterFoods, setFilterFoods] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllFoods(data))
    }, [])
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
                    folterFoods.map(food => <FoodGellary key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default FoodFilter;