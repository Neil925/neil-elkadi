import logo from '../../resources/media/Logo512.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Navbar() {

  return (
    <motion.nav id='navbar'
      className="flex items-center justify-between p-4 text-black dark:text-white"
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      transition={{ stiffness: 100, delay: 0, duration: 0.8 }}
    >
      <div className="flex items-center">
        <img src={logo} alt='logo' className='w-20 dark:invert' />
      </div>
      <ul className="flex space-x-4 text-3xl items-center pr-10">
        <li>
          <FaGithub className='' />
        </li>
        <li>
          <FaLinkedin className='' />
        </li>
      </ul>
    </motion.nav>
  );
}
