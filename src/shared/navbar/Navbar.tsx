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
        <img src={logo} alt='logo' className='w-20 invert dark:invert-0 ' />
      </div>
      <ul className="flex space-x-4 text-3xl items-center pr-10 dark:text-white">
        <motion.a className='hover:cursor-pointer ' href='https://github.com/neil925/' target="_blank"
          initial={{ color: "inherit" }}
          whileHover={{ scale: 1.2, color: "black" }}
          whileTap={{ scale: 0.8 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a className='hover:cursor-pointer ' href='https://www.linkedin.com/in/neil-elkadi/' target="_blank"
          initial={{ color: "inherit" }}
          whileHover={{ scale: 1.2, color: "#0974b4" }}
          whileTap={{ scale: 0.8 }}
        >
          <FaLinkedin />
        </motion.a>
      </ul>
    </motion.nav>
  );
}
