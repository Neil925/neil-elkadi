import constants from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="items-center">
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl text-center my-10"
        initial={{ scale: 0.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <div className="space-y-5">
        {constants.experience.map((x, k) => (
          <motion.div
            key={k}
            className="flex flex-col sm:flex lg:flex-row justify-around"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-500 lg:w-96">{x.time}</div>
            <div className="lg:w-1/2">
              <b>{x.title} - {x.place}</b>
              <p>{x.description}</p>
              <ul className="flex flex-wrap">
                {x.skills.map((s, k) => (
                  <li
                    key={k}
                    className="dark:text-dPrimary dark:bg-blue-900 dark:bg-opacity-40 bg-blue-500 bg-opacity-40 text-primary border-primary rounded px-2 py-1 mr-2 mt-2"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
