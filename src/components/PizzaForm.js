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
                <div className='buttons'>
                        {!updating.updating && <button onClick={addPizza} className='pizza-form-button'>Create Pizza!</button>}
                        {updating.updating && <button onClick={updatePizza} className='pizza-form-button'>Update Pizza</button>}
                        {updating.updating && <button onClick={cancelUpdate} className='pizza-form-button'>Cancel Update</button>}
                </div>
                <div className='input'>
                    <h3>Name:</h3>
                    <input type='text' name='name' value={form.name} onChange={inputChange}/>
                </div>
                <h4>Toppings:</h4>
                {
                    form.toppings.map((topping, index) => {
                        return (
                            <div key={index} className='card'>
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
