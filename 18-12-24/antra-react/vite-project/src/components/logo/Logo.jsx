import './Logo.css';
import logo from './cat-logo.png'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
    )
}