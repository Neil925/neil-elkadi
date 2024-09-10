import constants from '../constants';
import { FaLink } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Projects() {
  function fullscreen(event: any) {
    let el: HTMLDialogElement = document.querySelector("#fullscreen-img")!;

    el.querySelector("img")!.src = event.target.src;
    el.showModal();
    el.addEventListener('click', function(event) {
      let rect = el.getBoundingClientRect();
      let isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        el.close();
      }
    });
  }

  return (
    <div className='p-3 lg:p-0 items-center'>
      <dialog id="fullscreen-img" className='w-full md:w-3/4 focus:outline-none bg-transparent backdrop:bg-black backdrop:opacity-80'>
        <motion.img alt="img" className='w-fit'
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7 }}

        />
      </dialog>
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl text-center my-10"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >Projects</motion.h2>
      {constants.projects.map((x, k) => (
        <motion.div
          className='flex flex-col pb-5 sm:flex lg:flex-row justify-around lg:place-items-start place-items-center'
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          key={k}
        >
          <div className='lg:w-1/2'>
            {x.link ? (
              <a className='flex text-dPrimary underline w-fit' href={x.link} target="_blank" rel="noopener noreferrer">
                <b className='flex'>{x.title}</b>
                <div className='pl-2 pt-1'>{x.link ? <FaLink /> : null}</div>
              </a>
            ) : (
              <b>{x.title}</b>
            )}
            <p>{x.description}</p>
            <ul className='flex flex-wrap'>
              {x.technologies.map((s, k) => (
                <li key={k}
                  className='dark:text-dPrimary dark:bg-blue-900 dark:bg-opacity-40 bg-blue-500 bg-opacity-40 text-primary border-primary rounded px-2 py-1 mr-2 mb-2'>{s}</li>
              ))}
            </ul>
          </div>
          <div className='w-fit md:w-96 flex justify-center lg:justify-end'>
            <img src={x.img} alt='project'
              className='text-gray-500 w-full lgmax-w-72 hover:cursor-pointer'
              onClick={fullscreen}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

