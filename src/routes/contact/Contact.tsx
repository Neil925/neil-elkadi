import React, { useContext } from 'react';
import styles from './contanct.module.scss';
import { ThemeContext } from '../../context/ThemeContext';


export default function Contact() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme} text ${styles.contact} flex-col-center`}>
      <h1>Contact</h1>
      <p>Work in progress</p>
    </div>
  )
}
