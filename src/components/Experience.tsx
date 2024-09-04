import constants from '../constants';

function Experience() {
  return (
    <div className='p-3 lg:p-0 items-center'>
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-center my-10">Experience</h2>
      {constants.experience.map(x => (
        <div className='flex flex-col pb-5 sm:flex lg:flex-row justify-around'>
          <div className='text-gray-500 lg:w-96'>{x.time}</div>
          <div className='lg:w-1/2'>
            <b>{x.title} - {x.place}</b>
            <p>{x.description}</p>
            <ul className='flex flex-wrap'>
              {x.skills.map(s => (
                <li className='dark:text-dPrimary dark:bg-blue-900 dark:bg-opacity-40 bg-blue-500 bg-opacity-40 text-primary border-primary rounded px-2 py-1 mr-2 mb-2'>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience;
