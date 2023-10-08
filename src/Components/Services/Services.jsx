/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const Services = ({ event }) => {
    const { id, image, price, name, short_description } = event || {}



    return (
        <div className="p-5 mt-10 shadow-2xl rounded-md">

            {/* ours services card */}
            <div className="rounded-lg ">
                <img className="w-full h-48 rounded" src={image} alt="" />
                <div className="mt-3 p-2 bg-[#1B1B1B0D]">
                    <h3 className="text2xl font-semibold">{name}</h3>
                    <p className="my-2">${price}</p>
                    <p className="text-xs">{short_description}</p>

                    <Link to={`/event/${id}`}><button className="btn mt-3 bg-gradient-to-r from-green-300 to-blue-400 hover:from-pink-400 hover:to-yellow-400  text-white font-bold flex-grow">See details</button></Link>
                </div>

            </div>


        </div>
    );
};

export default Services;