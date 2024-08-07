import { useContext } from 'react';
import logo from '../../resources/media/Logo512.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../context/ThemeContext';

export default function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <nav className="flex items-center justify-between p-4 text-black dark:text-white" id='navbar'>
            <div className="flex items-center">
                <img src={logo} alt='logo' className='w-20 dark:invert' />
            </div>
            <ul className="flex space-x-4 text-3xl items-center">
                <li>
                    <FaGithub className=''/>
                </li>
                <li>
                    <FaLinkedin className=''/>
                </li>
                <li className='pl-8 '>
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="focus:outline-none">
                        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
                    </button>
                </li>
            </ul>
        </nav>
    );
}
