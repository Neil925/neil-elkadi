import React, {useState} from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {

    const [darkTheme, setTheme] = useState(false);

    return (
        <div className="flex-right theme theme--default" id='navbar'>
            <nav className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>portfolio</Link>
                <Link to='/resume'>resume</Link>
                <Link to='/contact'>contact</Link>
                <button onClick={() => setTheme(!darkTheme)}>
                    <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
                </button>
            </nav>
        </div>
    )
}
