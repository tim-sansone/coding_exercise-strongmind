import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <button><Link to='toppings'>Log in as Store Manager</Link></button>
            <button><Link to='pizzas'>Log in as Chef</Link></button>
        </div>
    )
}

export default Login;
