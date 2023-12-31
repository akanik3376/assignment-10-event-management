
const Banner = () => {
    return (
        <div

            style={{ backgroundImage: 'url(https://i.ibb.co/fFc2h2j/stock-photo-first-wedding-dance-396648199.jpg)' }}

            className="hero  min-h-screen w-full bg-base-200">
            <div className="hero-overlay bg-opacity-90"></div>

            <div className="hero-content flex-col lg:flex-row">
                {/* <img src="https://i.ibb.co/h7VrpRP/groom-putting-ring-bride-s-finger-1157-338.jpg" className="w-80 lg:max-w-sm rounded shadow-2xl" /> */}
                <div className="lg:max-w-sm text-center">
                    <h1 className="text-4xl text-pink-800 font-bold ">
                        Perfect Weddings <span className="text-slate-400	">Made Easy!</span>
                    </h1>
                    <p className="py-6 text-white">Experience the wedding of your dreams with our dedicated team of experts by your side.</p>
                    <button className="btn bg-blue-600 hover:bg-pink-800 text-white font-semibold">Make Reservations</button>
                </div>
            </div>


        </div>
    );
};

export default Banner;