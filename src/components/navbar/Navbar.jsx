

const Navbar = ({coin}) => {
    return (
        <div className="mx-auto md:container">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img src="assets/logo.png"></img>
                </div>
                <div class="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn"> {coin} Coin</a>
                </div>
                </div>
        </div>
    );
};

export default Navbar;