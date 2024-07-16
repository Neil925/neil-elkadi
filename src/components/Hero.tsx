import constants from '../constants';

export default function Hero() {

    return (
        <div className="lg:mt-24">
            <div className="flex flex-wrap justify-around p-3">
                <div className="flex flex-col space-y-8 items-center lg:items-start w-full lg:w-1/2 mb-4">
                    <h1 className="lg:text-9xl md:text-8xl text-5xl">Neil Elkadi</h1>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-accent via-dPrimary to-accent w-fit 
                    bg-clip-text text-transparent pb-2">Web Engineer</h2>
                    <p>{constants.heroText}</p>
                </div>
                <img src={constants.profile} alt="profile" className="w-96 object-contain rounded-full" />
            </div>
        </div>
    );
}
