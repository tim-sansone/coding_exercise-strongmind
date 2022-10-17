import { useState } from 'react';
import ToppingList from './ToppingList';
import PizzaList from './PizzaList';
import PizzaForm from './PizzaForm';

const initialUpdating = {
    updating: false,
    index: null
}

function Pizzas(props) {
    
    const {
        toppings,
        pizzas,
        setPizzas
    } = props

    const [form, setForm] = useState({ name: '', toppings: [] });
    const [updating, setUpdating] = useState(initialUpdating);
    
    console.log(updating);

    // Form functions

    const inputChange = event => {
        const { value } = event.target;
        setForm({ ...form, name: value })
    }

    const addTopping = topping => {
        const updateToppings = [...form.toppings];
        updateToppings.push(topping);
        setForm({ ...form, toppings: updateToppings })
    }

    const removeTopping = (event, index) => {
        event.preventDefault();
        const updateToppings = [...form.toppings]
        updateToppings.splice(index, 1);
        setForm({ ...form, toppings: updateToppings })
    }

    // Pizza functions

    const addPizza = event => {
        event.preventDefault();
        const error = checkIfValid(form);

        if(error.error){
            alert(error.message);
        } else {
            setPizzas([...pizzas, form]);
            setForm({ name: '', toppings: [] })
        }
    }

    const updatePizza = event => {
        event.preventDefault();
        const error = checkIfValid(form);

        if(error.error){
            alert(error.message);
        } else {
            const updatePizzas = [...pizzas];
            updatePizzas[updating.index] = form;
            setPizzas(updatePizzas);
            setUpdating(initialUpdating);
            setForm({ name: '', toppings: [] });
        }
    }

    const deletePizza = index => {
        const updatePizzas = [...pizzas];
        updatePizzas.splice(index, 1);
        setPizzas(updatePizzas);
    }

    // Manage updating

    const isUpdating = index => {
        setUpdating({ updating: true, index })
        setForm({ name: pizzas[index].name, toppings: pizzas[index].toppings })
    }

    const cancelUpdate = event => {
        event.preventDefault();
        setUpdating(initialUpdating);
        setForm({ name: '', toppings: [] });
    }

    // Validation

    const checkIfValid = formInput => {
        let pizzaNames = [];
        let pizzaToppings = [];
        let inputToppings = formInput.toppings.sort().join('');
        for(let pizza of pizzas){
            pizzaNames.push(pizza.name)
            pizzaToppings.push(pizza.toppings.sort().join(''))
        }
        
        if(updating.updating){
            pizzaNames.splice(updating.index, 1);
            pizzaToppings.splice(updating.index, 1);
        }
        if(formInput.name.trim().length < 3){
            return { error: true, message: 'Please enter a name of at least 3 characters' }
        }
        if(formInput.toppings.length === 0){
            return { error: true, message: 'Please add at least one topping' }
        }
        if(pizzaNames.includes(formInput.name)){
            return { error: true, message: 'This pizza name already exists' }
        }
        if(pizzaToppings.includes(inputToppings)){
            return { error: true, message: 'This combination of toppings already exists' }
        }
        return { error: false, message: '' }
    }

    return (
        <div className='pizzas-container'>
            <PizzaList
                pizzas={pizzas}
                updating={updating}
                isUpdating={isUpdating}
                deletePizza={deletePizza}
            />
            <PizzaForm 
                form={form}
                pizzas={pizzas}
                updating={updating}
                inputChange={inputChange}
                removeTopping={removeTopping}
                addPizza={addPizza}
                updatePizza={updatePizza}
                cancelUpdate={cancelUpdate}
            />  
            <ToppingList
                form={form}
                toppings={toppings}
                addTopping={addTopping}
            />
            
            
        </div>
    )
}

export default Pizzas;
