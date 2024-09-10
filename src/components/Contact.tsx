import { motion } from "framer-motion";
import { FaRegClipboard } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Contact() {
  function copyNumber() {
    navigator.clipboard.writeText("(407) 364 - 5700")
  }

  function copyEmail() {
    navigator.clipboard.writeText("elkadineil@gmail.com")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: .2, duration: 1 }}
      viewport={{ once: true }}
      className='space-y-10 text-lg lg:text-xl text-center'>
      <h2 className='text-3xl lg:text-4xl text-center '>Contact Me</h2>
      <div className="flex justify-center space-x-2">
        <div>(407) 364 - 5700</div>
        <button onClick={copyNumber}>
          <FaRegClipboard className="text-2xl" />
        </button>
      </div>
      <div>
        <div className="flex justify-center space-x-2">
          <a className='dark:text-dPrimary text-primary underline' href="emailto:elkadineil@gmail.com">elkadineil@gmail.com</a>
          <button onClick={copyEmail}>
            <FaRegClipboard className="text-2xl" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

