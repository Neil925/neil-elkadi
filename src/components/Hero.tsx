import { motion } from 'framer-motion';
import constants from '../constants';

export default function Hero() {

  return (
    <div className="lg:mt-24">
      <div className="flex flex-wrap justify-around p-3">
        <motion.div className="flex flex-col space-y-8 items-center lg:items-start w-full lg:w-1/2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4, duration: 1 }}
        >
          <h1 className="lg:text-9xl md:text-8xl text-5xl">Neil Elkadi</h1>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-accent via-dPrimary to-accent w-fit bg-clip-text text-transparent pb-2">
            Web Engineer</h2>
          <motion.p
          >{constants.heroText}</motion.p>
        </motion.div>
        <motion.img src={constants.profile} alt="profile" className="w-96 object-contain rounded-full"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: "tween", delay: 0.4, duration: 1 }}
        />
      </div>
    </div>
  );
}
