import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Breakfast from './Pages/Home/Breakfast/Breakfast';
import Dinner from './Pages/Home/Dinner/Dinner';
import Lunch from './Pages/Home/Lunch/Lunch';
import { createContext, useState } from 'react';
import useFoodData from './Hooks/useFoodData';


export const AllDataContext = createContext('')
function App() {
  const [allFoods, setAllFoods] = useFoodData()
  return (
    <AllDataContext.Provider value={allFoods}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='dinner' element={<Dinner />} />
          <Route path='lunch' element={<Lunch />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer/>
    </AllDataContext.Provider>
  );
}

export default App;
