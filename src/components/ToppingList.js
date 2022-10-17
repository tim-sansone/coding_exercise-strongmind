function ToppingList(props) {
    const {
        form,
        toppings,
        addTopping
    } = props

    return (
        <div className='topping-list'>
            <h2>Available Toppings</h2>
            {
                toppings.map((topping, index) => {
                    return (
                        <div key={index} className='card'>
                            <h4>{topping}</h4>
                            <div className='buttons'>
                                <button onClick={() => addTopping(topping)} disabled={form.toppings.includes(topping)}>Add to Pizza</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ToppingList;
