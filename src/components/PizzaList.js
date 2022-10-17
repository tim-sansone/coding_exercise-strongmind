function PizzaList({ pizzas, setPizzas }) {
     const deletePizza = index => {
        const updatePizzas = pizzas;
        updatePizzas.splice(index, 1);
        console.log(updatePizzas )
        setPizzas(updatePizzas);
        console.log(pizzas)
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
                            <button onClick={() => deletePizza(index)}>Delete Pizza</button>
                        </div>
                    )
                })
            }
        </>
        
    )
}

export default PizzaList;
