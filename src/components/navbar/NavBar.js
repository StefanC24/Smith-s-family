import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar(){
    return (
        <div className="navbar">
            <ul>
                <li className='nav-item'>
                    <Link className='li' to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='li' to='/contact'>Contact</Link>
                </li>
                <li className='nav-item'>
                    <Link className='li' to='/about'>About</Link>
                </li>
            </ul>
        <input type="text" placeholder="Search"></input>
        </div>
    )
}

export default NavBar;