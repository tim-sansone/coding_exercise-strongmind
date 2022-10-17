import './App.css'
import Login from './components/Login';
import Header from './components/Header';
import Pizzas from './components/Pizzas';
import Toppings from './components/Toppings';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

const initialToppings = ['cheese', 'pepperoni', 'sausage', 'olives', 'onions', 'green peppers', 'mushrooms']
const initialPizzas = [
  {
    name: 'Classic',
    toppings: ['cheese', 'pepperoni', 'mushrooms', 'onions', 'green peppers']
  }
]

function App() {
  const [toppings, setToppings] = useState(initialToppings);
  const [pizzas, setPizzas] = useState(initialPizzas);

  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/toppings' element={<Toppings toppings={toppings} setToppings={setToppings}/>}/>
        <Route path='/pizzas' element ={<Pizzas toppings={toppings} pizzas={pizzas} setPizzas={setPizzas}/>}/>
      </Routes>
    </>
      
         
  )
}

export default App;
