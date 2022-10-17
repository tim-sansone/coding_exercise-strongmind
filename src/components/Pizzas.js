import { useState } from 'react';
import ToppingList from './ToppingList';
import PizzaList from './PizzaList';



function Pizzas({ toppings, pizzas, setPizzas }) {
    console.log('render Pizzas');
    const [currentName, setCurrentName] = useState('')
    const [currentToppings, setCurrentToppings] = useState([])
    


    const inputChange = event => {
        const {value} = event.target
        setCurrentName(value)
    }

    const removeTopping = (event, index) => {
        event.preventDefault();
        const updateToppings = currentToppings;
        updateToppings.splice(index, 1);
        setCurrentToppings(updateToppings);
    }

    const addPizza = event => {
        event.preventDefault();
        const newPizza = {
            name: currentName,
            toppings: currentToppings
        }
        setPizzas([...pizzas, newPizza]);
        setCurrentName('');
        setCurrentToppings([]);
    }

    return (
        <div>
            <ToppingList toppings={toppings} currentToppings={currentToppings} setCurrentToppings={setCurrentToppings} />
            <PizzaList pizzas={pizzas} setPizzas={setPizzas}/>
            <form>
                <h2>Create New Pizza</h2>
                <label>Pizza Name
                    <input type='text' name='name' value={currentName} onChange={inputChange}/>
                </label>
                <button onClick={addPizza}>Create Pizza!</button>
                <h3>Toppings</h3>
                {
                    currentToppings.map((topping, index) => {
                        return (
                            <div key={index}>
                                <p>{topping}</p>
                                <button onClick={event => removeTopping(event, index)}>Remove Topping</button>
                            </div>
                            
                        )
                    })
                }
            </form>
        </div>
    )
}

export default Pizzas;
