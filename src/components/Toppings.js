import { useState } from 'react';

const initialForm = ''
const initialUpdating = {
    updating: false,
    topping: null
}

function Toppings(props) {
    const {
        toppings,
        setToppings
    } = props

    const [form, setForm]  = useState(initialForm);
    const [updating, setUpdating] = useState(initialUpdating)

    // Form functions
    
    const inputChange = event => {
        const { value } = event.target;
        setForm(value);
    }

    // Toppings functions

    const addTopping = event => {
        event.preventDefault();
        const error = checkIfValid(form)

        if(error.error){
            alert(error.message)
        } else {
            setToppings([...toppings, form.trim().toLowerCase()]);
            setForm(initialForm);
        }
    }

    const updateTopping = event => {
        event.preventDefault();
        const error = checkIfValid(form)

        if(error.error){
            alert(error.message)
        } else {
            const updatedToppings = [...toppings];
            updatedToppings[updating.topping] = form.trim().toLowerCase();
            setToppings(updatedToppings);
            setForm(initialForm);
            setUpdating(initialUpdating);
        }
    }

    const deleteTopping = index => {
        const updatedToppings = [...toppings];
        updatedToppings.splice(index, 1);
        setToppings(updatedToppings);
    }

    // Manage updating

    const isUpdating = index => {
        setUpdating({ updating: true, topping: index });
        setForm(toppings[index]);
    }

    const cancelUpdate = () => {
        setForm(initialForm);
        setUpdating(initialUpdating);
    }

    // Validation

    const checkIfValid = input => {
        let formInput = input.trim().toLowerCase()
        if(toppings.includes(formInput)){
            return { error: true, message: 'Topping already exists' }
        }
        if(formInput.length < 3){
            return { error: true, message: 'Please enter at least 3 characters' }
        }
        return { error: false, message: '' }
    }

    return (
        <div className='toppings'>
            <div className='topping-list'>
                <h2>Toppings</h2>
                <div>
                    {
                        toppings.map((topping, index) => (
                            <div key={index} className='topping-card'>
                                <h4>{topping}</h4>
                                <div className='topping-buttons'>
                                    <button onClick={() => isUpdating(index)} disabled={updating.updating}>Update</button>
                                    <button onClick={() => deleteTopping(index)} disabled={updating.updating}>Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='toppings-form'>
                <form>
                    <h2>{updating.updating ? `Update ${toppings[updating.topping]}` : 'Add Topping'}</h2>
                    <div className='form-buttons'>
                            {!updating.updating && <button onClick={addTopping}>Add</button>}
                            {updating.updating && <button onClick={updateTopping}>Update</button>}
                            {updating.updating && <button onClick={cancelUpdate}>Cancel Update</button>}
                        </div>
                    <div className='input'>
                        <h3>Name:</h3>
                        <input type='text' value={form} onChange={inputChange}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Toppings;
