import { Link } from 'react-router-dom'


function NavBar() {
        
        return (
            <div>
                <h1>This will be the navbar</h1>
                <Link to='/'>Login</Link>
            </div>
        );
}

export default NavBar;
