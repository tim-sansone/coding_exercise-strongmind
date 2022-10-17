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

    const removeTopping = (event, index) => {
        event.preventDefault();
        const updateToppings = [...form.toppings]
        updateToppings.splice(index, 1);
        setForm({ ...form, toppings: updateToppings })
    }

    const addPizza = event => {
        event.preventDefault();
        setPizzas([...pizzas, form]);
        setForm({ name: '', toppings: [] })
    }

    const updatePizza = event => {
        event.preventDefault();
        const updatePizzas = [...pizzas];
        updatePizzas[updating.pizza] = form;
        setPizzas(updatePizzas);
        setUpdating(initialUpdating);
        setForm({ name: '', toppings: [] });
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
                setUpdating={setUpdating}
            />
            <form>
                <h2>Create New Pizza</h2>
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
