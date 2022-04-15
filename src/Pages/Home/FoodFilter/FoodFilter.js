import React, { useEffect, useState } from 'react';

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
            <div>
                <h2>food items Lorem ipsum dolor sit amet.</h2>
                {
                    folterFoods.map(food => {
                        const { id, picture, name, description } = food;
                        return (
                            <div key={food.id}>
                                <img src={picture} alt="" className='w-10' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FoodFilter;