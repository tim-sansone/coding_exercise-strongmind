function PizzaList(props) {
    const { 
        pizzas,
        setPizzas,
        setForm,
        setUpdating
    } = props
    
    const isUpdating = index => {
        setUpdating({ updating: true, pizza: index })
        setForm({ name: pizzas[index].name, toppings: pizzas[index].toppings })
    }
    
    const deletePizza = index => {
        const updatePizzas = [...pizzas];
        updatePizzas.splice(index, 1);
        setPizzas(updatePizzas);
    }

    return (
        <>
            <h2>Pizzas</h2>
            {
                pizzas.map((pizza, index) => {
                    return (
                        <div key={index}>
                            <h3>{pizza.name}</h3>
                            {
                                pizza.toppings.map((topping, index) => {
                                    return <p key={index}>{topping}</p>
                                })
                            }
                            <button onClick={() => isUpdating(index)}>Update Pizza</button>
                            <button onClick={() => deletePizza(index)}>Delete Pizza</button>
                        </div>
                    )
                })
            }
        </>
        
    )
}

export default PizzaList;
