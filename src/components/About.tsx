import constants from '../constants';

export default function About() {
  return (
    <div className="">
      <div className="flex flex-wrap justify-around p-3">
        <img src={constants.aboutPic} alt="profile" className="w-96 object-contain rounded-full order-last lg:-order-1" />
        <div className="flex flex-col space-y-8 items-center lg:items-start w-full lg:w-1/2 mb-4 mt-8 lg:mt-0">
          <h2 className="text-3xl md:text-5xl lg:text-6xl">About Me</h2>
          <div className='space-y-5'>
            {constants.aboutText.map((val, key) => (
              <p key={key}>{val}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
