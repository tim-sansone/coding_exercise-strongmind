import { Link } from 'react-router-dom'


function Header() {
        
        return (
            <div className='header'>
                <h1>Welcome to the Pizza Place!</h1>
                <Link to='/'><button className='link'>Home</button></Link>
            </div>
        );
}

export default Header;
