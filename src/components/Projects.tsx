import constants from '../constants';
import { FaLink } from "react-icons/fa";

export default function Projects() {
  return (
    <div className='p-3 lg:p-0 items-center'>
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-center my-10">Projects</h2>
      {constants.projects.map(x => (
        <div className='flex flex-col pb-5 sm:flex lg:flex-row justify-around lg:place-items-start place-items-center'>
          <div className='lg:w-1/2'>
            {x.link ? (
              <a className='flex text-dPrimary underline' href={x.link} target="_blank" rel="noopener noreferrer">
                <b className='flex'>{x.title}</b>
                <div className='pl-2 pt-1'>{x.link ? <FaLink /> : null}</div>
              </a>
            ) : (
              <b>{x.title}</b>
            )}
            <p>{x.description}</p>
            <ul className='flex flex-wrap'>
              {x.technologies.map(s => (
                <li className='dark:text-dPrimary dark:bg-blue-900 dark:bg-opacity-40 bg-blue-500 bg-opacity-40 text-primary border-primary rounded px-2 py-1 mr-2 mb-2'>{s}</li>
              ))}
            </ul>
          </div>
          <div className='w-fit md:w-96 flex justify-center lg:justify-end'>
            <img className='text-gray-500 w-full lgmax-w-72' src={x.img} />
          </div>
        </div>
      ))}
    </div>
  )
}

