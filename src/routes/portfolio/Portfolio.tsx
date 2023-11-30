import { useContext, useState } from 'react';
import styles from './portfolio.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import MyCodeBlock from '../../components/CodeBlock';

import profile from '../../resources/media/Neil.jpg';
import github from '../../resources/media/Github.svg';
import linedkin from '../../resources/media/LinkedIn.webp';

interface Snippets {
  EngageScraper: string,
  ShellScripts1: string,
  ShellScripts2: string,
}

export default function Portfolio() {
  const { theme } = useContext(ThemeContext);
  const [code, setCode] = useState({
    EngageScraper: "Loading...",
    ShellScripts1: "Loading...",
    ShellScripts2: "Loading...",
  });

  fetch(`https://raw.githubusercontent.com/Neil925/PortfolioSnippets/main/ScraperHandler.ts`)
    .then(res => res.text())
    .then(data => setCode({
      ...code,
      EngageScraper: data
    }));

  fetch(`https://raw.githubusercontent.com/Neil925/PortfolioSnippets/main/archInstallation.sh`)
    .then(res => res.text())
    .then(data => setCode({
      ...code,
      ShellScripts1: data
    }));

  fetch(`https://raw.githubusercontent.com/Neil925/ShellScripts/main/archInstallation/phase2/archinstallation2.sh`)
    .then(res => res.text())
    .then(data => setCode({
      ...code,
      ShellScripts2: data
    }));

  return (
    <div className={`${theme} text ${styles.portfolio}`}>
      <header className='flex-center'>
        <div>
          <h1>Hello,<br />I'm <span>Neil Elkadi</span>.</h1>
          <h4>Systems Administrator and Web Engineer</h4>
          <p>Links have been provided for some of the works below.</p>
        </div>
        <div>
          <img src={profile} />
        </div>
      </header>
      <body>
        <div className={`${styles.pages}`}>
          <h3>Pages</h3>
          <div className='flex-center'>
            <section>
              <h4>Github</h4>
              <img src={github} />
            </section>
            <section>
              <h4>LinkedIn</h4>
              <img src={linedkin} />
            </section>
          </div>
        </div>
        <Project
          title='The Unofficial Engage API'
          link='https://github.com/Neil925/unofficial-engage-api'
          description='A web scraper built for an IT Captsone Project.'
          code={[code.EngageScraper]} langauge='ts' />
        <Project
          title='Arch Installation Scripts'
          link='https://github.com/Neil925/ShellScripts'
          description='A set of scripts written to automatically install an Arch Linux OS according to my preferences.'
          code={[code.ShellScripts1, code.ShellScripts2]} langauge='sh' />
      </body>
    </div>
  )
}

function Project(props: { title: string, link:string, description: string, code: string[], langauge: string }) {
  return (
    <div className={styles.projects}>
      <a href={props.link}><h3>{props.title}</h3></a>
      <p>{props.description}</p>
      <div className='flex-left'>
        {
          props.code.map((codeString, i) => {
            console.log("Entered");
            // Return the element. Also pass key     
            return (<MyCodeBlock code={codeString} language={props.langauge} />)
          })
        }
      </div>
    </div>
  )
}
