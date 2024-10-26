
const Newsteller = () => {
    return (
        <div className=" rounded-lg mx-auto md:container bg-slate-100 py-28 flex justify-center items-center flex-col gap-20 ">
            <h2 className="text-2xl font-bold text-center"> Subscribe to our Newsletter</h2>
            <p className="text-xl text-gray-400 ">Get the latest updates about the event</p>
            <div className="flex gap-5">
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />  
                <button placeholder="Enter your email" className="btn btn-active btn-neutral">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsteller;