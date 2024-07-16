import React, { useContext } from 'react';
import styles from './footer.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

export default function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className="text-black dark:text-white p-4">
            <div className="text-center sm:flex justify-between text-xs md:text-sm">
                <p className="place-content-center pb-3 sm:pb-0">
                    © 2024 Neil Elkadi. All Rights Reserved. | Licensed under MIT
                </p>
                <div className=''>
                    <p className="">
                        Email: <a href="mailto:elkadineil@gmail.com" className="text-primary dark:text-blue-400 hover:underline">elkadineil@gmail.com</a>
                    </p>
                    <p className="">
                        Phone: (407) 364 - 5700
                    </p>
                </div>
            </div>
        </footer>
    )
}
