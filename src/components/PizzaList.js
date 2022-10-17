function PizzaList(props) {
    const { 
        pizzas,
        updating,
        isUpdating,
        deletePizza
    } = props

    return (
        <div className='pizza-list'>
            <h2>Pizzas</h2>
            {
                pizzas.map((pizza, index) => {
                    return (
                        <div key={index} className='card'>
                            <div>
                                <h3>{pizza.name}</h3>
                                <h4>Toppings:</h4>
                                {
                                    pizza.toppings.map((topping, index) => {
                                        return <p key={index}>{topping}</p>
                                    })
                                }
                            </div>
                            <div className='buttons'>
                                <button onClick={() => isUpdating(index)} disabled={updating.updating}>Update Pizza</button>
                                <button onClick={() => deletePizza(index)} disabled={updating.updating}>Delete Pizza</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default PizzaList;
