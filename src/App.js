import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import axios from 'axios'
import Burger from './component.js/Burger';
import Pizza from './component.js/Pizza';
import Home from './component.js/Home';
import Cart from './component.js/Cart';
import Header from './component.js/Header';

const url='https://fod-app.herokuapp.com/food'
export const FoodContext=React.createContext();
function App() {
  let [data,setData]=useState([])
  let [cart,setCart]=useState([])
  let [cartValue,setCartValue]=useState(cart.length)
  useEffect(()=>{
    getData()
  },[])
let getData=async()=>{
  let res=await axios.get(url);
  console.log(res.data)
  setData(res.data)
}
  return <>
  <BrowserRouter>
  <FoodContext.Provider value={{data,cart,setCart,setCartValue,cartValue}}> 
    <Header/>
    <Routes>
      <Route path='/pizza' element={<Pizza/>}/>
      <Route path='/burger' element={<Burger/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </FoodContext.Provider>
  </BrowserRouter>
  </>
    
  
}

export default App;
