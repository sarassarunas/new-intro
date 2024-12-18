import './Header.css';
import Navigation from '../navigation/Navigation.jsx';
import Logo from '../logo/Logo.jsx';

export default function Header() {
    return(
        <header>
            <Logo/>  
            <Navigation/>
        </header>
    );
}