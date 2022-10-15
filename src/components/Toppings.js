import { useContext } from 'react';
import Context from '../Context';

function Toppings() {
    const { toppings } = useContext(Context);

    return (
        <>
            <div>This is where we will manage our toppings</div>
            <div>
                {toppings.map((topping, index) => <p key={index}>{topping}</p>)}
            </div>
        </>
    )
}

export default Toppings;
