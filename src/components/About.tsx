import { motion } from 'framer-motion';
import constants from '../constants';

export default function About() {
  return (
    <div className="">
      <div className="flex flex-wrap justify-around p-3">
        <motion.img src={constants.aboutPic} alt="profile" className="w-96 object-contain rounded-2xl order-last lg:-order-1"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: "tween", delay: 1, duration: 1 }}
        />
        <motion.div className="flex flex-col space-y-8 items-center lg:items-start w-full lg:w-1/2 mb-4 mt-8 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl">About Me</h2>
          <div className='space-y-5'>
            {constants.aboutText.map((val, key) => (
              <p key={key}>{val}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
