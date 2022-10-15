import { Link } from 'react-router-dom'


function NavBar() {
        
        return (
            <div>
                <h2>This will be the navbar</h2>
                <Link to='/'>Login</Link>
                <Link to='/toppings'>Toppings</Link>
                <Link to='/pizzas'>Pizzas</Link>
            </div>
        );
}

export default NavBar;
