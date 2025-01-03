import './Navi.css';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <>  
            <header className='d-flex justify-content-between'> 
                <div className="logo">
                    <h1>Hello</h1>
                </div>
                <div className="navi">
                    <ul className='d-flex'>
                        <li><Link to="/">Main Page</Link></li>
                        <li><Link to="/club">Club</Link></li>
                        <li><Link to="/rules">Our rules</Link></li>
                        <li><Link to="/about-us">About us</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </div>
            </header>
        </>
    );

}
export default Navigation;