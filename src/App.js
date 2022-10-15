import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Pizzas from './components/Pizzas';
import Toppings from './components/Toppings';

import { useState } from 'react';
import Context from './Context';

const initialToppings = ['cheese', 'pepperoni', 'sausage', 'olives', 'onions', 'green peppers', 'mushrooms']
const initialPizzas = [
  {
    name: 'classic',
    toppings: ['cheese', 'pepperoni', 'mushrooms', 'onions', 'green peppers']
  }
]

function App() {
  const [toppings, setToppings] = useState(initialToppings);
  const [pizzas, setPizzas] = useState(initialPizzas);

  const value = {
    toppings,
    setToppings,
    pizzas,
    setPizzas
  }

  return (
    <Context.Provider value={value}>
      <Navbar />
      <Login />
      <Toppings />
      <Pizzas />
    </Context.Provider>
  )
}

export default App;
