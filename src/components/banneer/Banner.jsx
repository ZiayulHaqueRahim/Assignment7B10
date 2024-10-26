import './banner.css'

const Banner = ({handleCoin}) => {
    return (
        <div className=" mx-auto md:container banner flex flex-col gap-6 bg-zinc-950 justify-center items-center">
            <div className="mt-10">
                <img src="assets/banner-main.png"></img>
            </div>
            <h1 className="text-2xl text-white font-bold text-center">Assemble Your Ultimate Cricket  Team 11</h1>
            <p className="text-xl text-gray-400 text-center">Beyond Boundaries Beyond Limits</p>
            <button onClick={handleCoin} className="btn btn-outline btn-secondary my-10"> Claim Free Credits</button>
        </div>
    );
};

export default Banner;