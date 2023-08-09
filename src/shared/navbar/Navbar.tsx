import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
    return (
        <div className="flex-right theme theme--default" id='navbar'>
            <nav className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>portfolio</Link>
                <Link to='/resume'>resume</Link>
                <Link to='/contact'>contact</Link>
                <FontAwesomeIcon icon={faMoon} />
            </nav>
        </div>
    )
}
