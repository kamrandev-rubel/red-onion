import React from 'react';
import Banner from '../Banner/Banner';
import FoodFilter from '../FoodFilter/FoodFilter';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner />
            <FoodFilter />
            <Service/>
        </div>
    );
};

export default Home;