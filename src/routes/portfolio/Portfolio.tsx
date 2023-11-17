import React, { useContext } from 'react';
import styles from './portfolio.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import placeHolder from '../../media/placeHolder.png';

export default function Portfolio() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} text ${styles.portfolio} flex-col-left`}>
      <header style={{ paddingTop: 10 }}>
        <h1>Hello,<br />I'm <span className='name'>Neil Elkadi</span>.</h1>
        <h4>Systems Administrator and Web Engineer</h4>
        <p>Links have been provided for some of the works below.</p>
        <img src={placeHolder} />
      </header>
      <body>
        <h3>The Unofficial Engage API</h3>
        <p>A web scraper built for an IT Captsone Project</p>
      </body>
    </div>
  )
}
