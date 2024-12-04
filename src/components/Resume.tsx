import React from 'react'
import { FaFilePdf } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-center my-10">
        Resume
      </h2>
      <div className='w-full h-fit flex justify-center'>
        <a href="Neil_Elkadi_Resume_v4.pdf" target='_blank'>
          <div className='w-[22rem] h-20 rounded-xl bg-primary bg-opacity-50 flex p-2'>
            <div id="icon" className='h-auto flex justify-center items-center px-4'>
              <FaFilePdf className='text-5xl' />
            </div>
            <div className='h-auto place-content-center'>
              <h3 className='text-lg font-bold'>Neil_Elkadi_Resume_v4.pdf</h3>
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  )
}

