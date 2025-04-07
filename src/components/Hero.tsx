import { motion } from "framer-motion";
import constants from "../constants";
import { FaFilePdf } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-wrap justify-around">
      <motion.div
        className="flex flex-col space-y-8 items-center lg:items-start w-full lg:w-1/2 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .4, duration: 1 }}
      >
        <h1 className="lg:text-9xl md:text-8xl text-5xl">Neil Elkadi</h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-accent via-dPrimary to-accent w-fit bg-clip-text text-transparent pb-2">
          Web Engineer
        </h2>
        <motion.p>{constants.heroText}</motion.p>
      </motion.div>
      <motion.div
        className="max-w-full"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", delay: 0.4, duration: 1 }}
      >
        <motion.img
          src={constants.profile}
          alt="profile"
          className="w-96 object-contain rounded-t"
        />
        <a
          className="p-3 rounded-b bg-dPrimary dark:bg-primary flex items-center justify-between text-3xl font-bold space-x-5 
          w-96 max-w-full text-white"
          href="resume.pdf"
          target="_blank"
        >
          <FaFilePdf className="w-10 text-4xl" />
          <span>Resume</span>
          <div className="w-10"></div>
        </a>
      </motion.div>
    </div>
  );
}
