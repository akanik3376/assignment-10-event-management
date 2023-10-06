
const Banner = () => {
    return (
        <div

            style={{ backgroundImage: 'url(https://i.ibb.co/fFc2h2j/stock-photo-first-wedding-dance-396648199.jpg)' }}

            className="hero  min-h-screen w-full bg-base-200">
            <div className="hero-overlay bg-opacity-90"></div>

            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/h7VrpRP/groom-putting-ring-bride-s-finger-1157-338.jpg" className="w-80 lg:max-w-sm rounded shadow-2xl" />
                <div className="max-w-sm">
                    <h1 className="text-4xl text-fuchsia-800 font-bold ">
                        Perfect Weddings <span className="text-slate-400	">Made Easy!</span>
                    </h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm tempor incididunt.</p>
                    <button className="btn bg-blue-600 hover:bg-pink-800 text-white font-semibold">Make Reservations</button>
                </div>
            </div>


        </div>
    );
};

export default Banner;