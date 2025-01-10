import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className=''>
            <nav className='container'>
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/admin" className="nav-link">Admin</Link></li>
                    <li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>

                </ul>
            </nav>
        </header>
    );
}
export default Header;