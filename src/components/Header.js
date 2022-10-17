import { useNavigate } from 'react-router-dom'


function Header() {
    const navigate = useNavigate()
    
    const home = () => {
        navigate('/')
    }

    return (
        <div className='header'>
            <h1>Welcome to the Pizza Place!</h1>
            <button className='link' onClick={home}>Home</button>
        </div>
    );
}

export default Header;
