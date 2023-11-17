import React, { useContext } from 'react';
import styles from './resume.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

export default function Resume() {  
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} text ${styles.resume} flex-col-center`}>
      <h1>Resume</h1>
      <p>Work in progress</p>
    </div>
  )
}
