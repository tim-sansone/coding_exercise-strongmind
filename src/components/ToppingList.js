function ToppingList(props) {
    const {
        toppings,
        form,
        setForm
    } = props
    
    const addTopping = topping => {
        if(form.toppings.includes(topping)){
            alert('You already added that topping')
            return;
        }
        const updateToppings = [...form.toppings];
        updateToppings.push(topping);
        setForm({ ...form, toppings: updateToppings })
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
