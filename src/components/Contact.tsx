import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";

export default function Contact() {
  const [numCop, setNumCop] = useState(false);
  const [emailCop, setEmailCop] = useState(false);

  function copyNumber() {
    setNumCop(true);
    setTimeout(() => setNumCop(false), 1000);
    navigator.clipboard.writeText("(407) 364 - 5700");
  }

  function copyEmail() {
    setEmailCop(true);
    setTimeout(() => setEmailCop(false), 1000);
    navigator.clipboard.writeText("elkadineil@gmail.com");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: .2, duration: 1 }}
      viewport={{ once: true }}
      className="space-y-10 text-lg lg:text-xl text-center"
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-center ">
        Contact Me
      </h2>
      <div className="flex justify-center space-x-2">
        <div>(407) 364 - 5700</div>
        <motion.button
          onClick={copyNumber}
          className="text-2xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          {numCop
            ? <FaClipboardCheck className="text-green-500" />
            : <FaRegClipboard />}
        </motion.button>
      </div>
      <div>
        <div className="flex justify-center space-x-2">
          <a
            className="dark:text-dPrimary text-primary underline"
            href="emailto:elkadineil@gmail.com"
          >
            elkadineil@gmail.com
          </a>
          <motion.button
            onClick={copyEmail}
            className="text-2xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            {emailCop
              ? <FaClipboardCheck className="text-green-500" />
              : <FaRegClipboard />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
