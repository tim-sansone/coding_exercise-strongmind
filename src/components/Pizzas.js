import { useState } from 'react';
import ToppingList from './ToppingList';
import PizzaList from './PizzaList';

const initialUpdating = {
    updating: false,
    pizza: null
}

function Pizzas(props) {
    console.log('render Pizzas');
    const {
        toppings,
        pizzas,
        setPizzas
    } = props

    const [form, setForm] = useState({ name: '', toppings: [] });
    const [updating, setUpdating] = useState(initialUpdating);
    


    const inputChange = event => {
        const {value} = event.target
        setForm({ ...form, name: value })
    }

    const checkIfValid = pizza => {
        let pizzaNames = [];
        let pizzaToppings = [];
        let currentToppings = pizza.toppings.sort().join('');
        for(let pizza of pizzas){
            pizzaNames.push(pizza.name)
            pizzaToppings.push(pizza.toppings.sort().join(''))
        }
        
        if(pizza.name.trim().length < 3){
            return { error: true, message: 'Please enter a name of at least 3 characters' }
        }
        if(pizza.toppings.length === 0){
            return { error: true, message: 'Please add at least one topping' }
        }
        if(pizzaNames.includes(pizza.name)){
            return { error: true, message: 'This pizza name already exists' }
        }
        if(pizzaToppings.includes(currentToppings)){
            return { error: true, message: 'This combination of toppings already exists' }
        }
        return { error: false, message: '' }
    }

    const removeTopping = (event, index) => {
        event.preventDefault();
        const updateToppings = [...form.toppings]
        updateToppings.splice(index, 1);
        setForm({ ...form, toppings: updateToppings })
    }

    const addPizza = event => {
        event.preventDefault();
        const error = checkIfValid({...form});

        if(error.error){
            alert(error.message)
            return
        } else {
            setPizzas([...pizzas, form]);
            setForm({ name: '', toppings: [] })
        }
    }

    const updatePizza = event => {
        event.preventDefault();
        const error = checkIfValid({...form});

        if(error.error){
            alert(error.message)
            return
        } else {
            const updatePizzas = [...pizzas];
            updatePizzas[updating.pizza] = form;
            setPizzas(updatePizzas);
            setUpdating(initialUpdating);
            setForm({ name: '', toppings: [] });
        }
    }

    const cancelUpdate = event => {
        event.preventDefault();
        setUpdating(initialUpdating);
        setForm({ name: '', toppings: [] });
    }

    return (
        <div>
            <ToppingList
                toppings={toppings}
                form={form}
                setForm={setForm}
            />
            <PizzaList
                pizzas={pizzas}
                setPizzas={setPizzas}
                setForm={setForm}
                updating={updating}
                setUpdating={setUpdating}
            />
            <form>
                <h2>{updating.updating ? 'Update Pizza' : 'Create New Pizza'}</h2>
                <label>Pizza Name
                    <input type='text' name='name' value={form.name} onChange={inputChange}/>
                </label>
                {!updating.updating && <button onClick={addPizza}>Create Pizza!</button>}
                {updating.updating && <button onClick={updatePizza}>Update Pizza</button>}
                {updating.updating && <button onClick={cancelUpdate}>Cancel Update</button>}
                <h3>Toppings</h3>
                {
                    form.toppings.map((topping, index) => {
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
