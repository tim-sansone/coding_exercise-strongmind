function PizzaForm(props) {
    const {
        form,
        pizzas,
        updating,
        inputChange,
        removeTopping,
        addPizza,
        updatePizza,
        cancelUpdate
    } = props
    
    return (
        <div className='pizza-form'>    
            <form>
                <h2>{updating.updating ? `Update ${pizzas[updating.index].name}` : 'Create New Pizza'}</h2>
                <label>Pizza Name
                    <input type='text' name='name' value={form.name} onChange={inputChange}/>
                </label>
                {!updating.updating && <button onClick={addPizza}>Create Pizza!</button>}
                {updating.updating && <button onClick={updatePizza}>Update Pizza</button>}
                {updating.updating && <button onClick={cancelUpdate}>Cancel Update</button>}
                <h3>Toppings:</h3>
                {
                    form.toppings.map((topping, index) => {
                        return (
                            <div key={index} className='topping-card'>
                                <h4>{topping}</h4>
                                <div className='buttons'>
                                    <button onClick={event => removeTopping(event, index)}>Remove Topping</button>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </form>
        </div>
    )
}

export default PizzaForm;
