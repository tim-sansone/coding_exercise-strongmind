function ToppingList({ toppings, currentToppings, setCurrentToppings }) {
    const addTopping = topping => {
        if(currentToppings.includes(topping)){
            alert('You already added that topping')
            return;
        }
        const updateToppings = currentToppings;
        updateToppings.push(topping);
        setCurrentToppings(updateToppings)
    }

    return (
        <>
            <h2>Available Toppings</h2>
            {
                toppings.map((topping, index) => {
                    return (
                        <div key={index}>
                            <p>{topping}</p>
                            <button onClick={() => addTopping(topping)}>Add to Pizza</button>
                        </div>
                    )
                })
            }
        </>
        
    )
}

export default ToppingList;
