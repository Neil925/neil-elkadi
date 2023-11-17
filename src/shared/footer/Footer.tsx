import React, { useContext } from 'react';
import styles from './footer.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

export default function Footer() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${styles.footer} text ${theme}`}>
      <p>©2023 Neil Elkadi, All Rights Reserved.</p>
    </div>
  )
}
