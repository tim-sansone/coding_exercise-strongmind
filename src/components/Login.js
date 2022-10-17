import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    const toppings = () => {
        navigate('/toppings');
    }

    const pizzas = () => {
        navigate('/pizzas');
    }

    return (
        <div className='login-container'>
            <div className='login'>
                <h2>Please Log In</h2>
                <button onClick={toppings}>Log in as Store Manager</button>
                <button onClick={pizzas}>Log in as Chef</button>
            </div>
        </div>
    )
}

export default Login;
