import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimationControls } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext, useEffect } from 'react';

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({ right: [-45, 10, -45, 10, -45] }, { delay: 2, duration: 1.5, repeat: Infinity, repeatDelay: 15 });
  });

  function dragEnd() {
    let el = document.querySelector("#theme-icon")!;
    let rect = el.getBoundingClientRect();

    console.log(rect.x + " " + window.innerWidth);

    if (el.getBoundingClientRect().x < window.innerWidth) {
      controls.stop();
    } else {
      controls.start({ right: [-45, 10, -45, 10, -45] }, { delay: 2, duration: 1.5, repeat: Infinity, repeatDelay: 15 });
    }
  }

  function showButton(event: any) {
    console.log(event.target.parentElement);
    let el: HTMLButtonElement = event.target;

    el.classList.add("order-2");
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light")
    document.querySelector("#show-theme")!.classList.remove("order-2");
  }


  return (
    <div>

      <motion.div id="theme-motion-box"
        className="fixed text-3xl top-3 flex justify-end"
        animate={controls}
        initial={{ right: -45 }}
        whileHover={{ right: 10, transition: { delay: 0 } }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: -45, right: 0 }}
        dragElastic={0}
        onDragEnd={dragEnd}
      >
        <button
          id="show-theme"
          className="focus:outline-none w-14 "
          onClick={showButton}
        />
        <button
          className="focus:outline-none w-12"
          onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className="stroke-black" id="theme-icon" />
        </button>
      </motion.div>
    </div>
  )
}

