import { useState } from 'react';

const initialForm = ''
const initialUpdating = {
    updating: false,
    topping: null
}

function Toppings({ toppings, setToppings }) {
    const [form, setForm]  = useState(initialForm);
    const [updating, setUpdating] = useState(initialUpdating)

    const inputChange = event => {
        const { value } = event.target;
        setForm(value);
    }

    const existing = topping => {
        return toppings.includes(topping.trim().toLowerCase())
    }

    const add = event => {
        event.preventDefault();
        if(existing(form)){
            alert('Topping already exists')
            return
        }
        if(form.trim().length < 3){
            alert('Please enter at least 3 characters')
            return
        }
        setToppings([...toppings, form.trim().toLowerCase()]);
        setForm(initialForm);
    }

    const isUpdating = index => {
        setUpdating({ updating: true, topping: index });
        setForm(toppings[index]);
    }

    const update = event => {
        event.preventDefault();
        if(existing(form)){
            alert('Topping already exists')
            return
        }
        if(form.trim().length < 3){
            alert('Please enter at least 3 characters')
            return
        }
        const updatedToppings = [...toppings];
        updatedToppings[updating.topping] = form.trim().toLowerCase();
        setToppings(updatedToppings);
        setForm(initialForm);
        setUpdating(initialUpdating);
    }

    const cancelUpdate = () => {
        setForm(initialForm);
        setUpdating(initialUpdating);
    }

    const deleteTopping = index => {
        const updatedToppings = [...toppings];
        updatedToppings.splice(index, 1);
        setToppings(updatedToppings);
    }

    return (
        <>
            <h2>Toppings</h2>
            <div>
                {
                    toppings.map((topping, index) => (
                        <div key={index}>
                            <p>{topping}</p>
                            {!updating.updating && <button onClick={() => isUpdating(index)}>Update</button>}
                            {!updating.updating && <button onClick={() => deleteTopping(index)}>Remove</button>}
                        </div>
                    ))
                }
            </div>
            <form>
                <h2>{updating.updating ? `Update ${toppings[updating.topping]}` : 'Add Topping'}</h2>
                <input type='text' value={form} onChange={inputChange}/>
                {!updating.updating && <button onClick={add}>Add</button>}
                {updating.updating && <button onClick={update}>Update</button>}
                {updating.updating && <button onClick={cancelUpdate}>Cancel Update</button>}
            </form>
        </>
    )
}

export default Toppings;
