
const Footer = () => {
    return (
        <div className="flex flex-col  bg-blue-950 justify-center items-center gap-10 py-10">
            <div className="py-10 ">
                <img src="assets/logo-footer.png"></img>
            </div>
            <div className="flex justify-evenly">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-white">About Us</h3>
                    <p className="text-xl text-gray-400">We are passioniate team <br/>
                        dedicated to providing <br/>
                        best services
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-white">Quick links</h3>
                    <ul className="text-xl text-gray-400">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold text-white">Subscribe</h3>
                    <p className="text-xl text-gray-400">Subscribre to get <br/>
                    latest update </p>
                    <div className="flex gap-3">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />  
                        <button placeholder="Enter your email" className="btn btn-active btn-neutral">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;