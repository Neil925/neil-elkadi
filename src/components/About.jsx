import constants from '../constants';

export default function About() {

    return (
        <div className="">
            <div className="flex flex-wrap justify-around p-3">
                <img src={constants.aboutPic} alt="profile" className="w-96 object-contain rounded-full order-last lg:-order-1" />
                <div className="flex flex-col space-y-8 items-center lg:items-start w-full lg:w-1/2 mb-4 mt-8 lg:mt-0">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl">About Me</h2>
                    <p>
                        I am a. Yeah. But the. No I am the. That the doesn't. Wait. Is the that the. When. Maybe if I look again I
                        that's who I am. That the. No I can't. Where the that the. I am 
                        <span className='bg-gradient-to-r from-purple-800 to-pink-500 italic bg-clip-text text-transparent'> atomic</span>. That when the. 
                        There is where once can the everyone.
                    </p>
                </div>
            </div>
        </div>
    );
}
