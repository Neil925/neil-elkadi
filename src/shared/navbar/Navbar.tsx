import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../context/ThemeContext';

import styles from "./navbar.module.scss";

export default function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (

        <div className={`${styles.navbar} ${styles[theme]}`} id='navbar'>
            <nav className={`nav-links`}>
                <div className="nav-logo-box">
                    <h3 className={styles.text}>Logo</h3>
                </div>
                <ul className="nav-links-box">
                    <li><Link to='/' className={styles.text}>Home</Link></li>
                    <li><Link to='/portfolio' className={styles.text}>portfolio</Link></li>
                    <li><Link to='/resume' className={styles.text}>resume</Link></li>
                    <li><Link to='/contact' className={styles.text}>contact</Link></li>
                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
                    </button>
                </ul>
            </nav>
        </div>
    )
}
