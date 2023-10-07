/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const Services = ({ event }) => {
    const { id, image, price, name, short_description } = event || {}



    return (
        <div>

            {/* ours services card */}


            <div className="relative mt-7   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 flex flex-col" >
                    <div className="mb-2 flex items-center justify-between">
                        <h4 className="block font-sans  font-semibold leading-relaxed text-blue-gray-900 text-2xl antialiased">
                            {name}
                        </h4>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            ${price}
                        </p>
                    </div>

                    <div className="">
                        <p className=" font-sans  text-sm font-normal  text-gray-700 antialiased opacity-75 ">
                            {short_description}
                        </p>
                    </div>
                    <Link to={`/event/${id}`}><button className="btn mt-3 bg-gradient-to-r from-green-300 to-blue-400 hover:from-pink-400 hover:to-yellow-400  text-white font-bold flex-grow">See details</button></Link>

                </div>

            </div>
        </div>
    );
};

export default Services;