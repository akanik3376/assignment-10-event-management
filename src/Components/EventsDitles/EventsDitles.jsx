import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const EventsDitles = () => {


    const [event, setEvent] = useState({})

    const { id } = useParams()
    // console.log(id)
    const events = useLoaderData()


    useEffect(() => {
        const findEvents = events.find(event => event.id == id)
        setEvent(findEvents)
    }, [id, events])

    const { name, image, description, price } = event || {}

    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="flex justify-center container mx-auto ">
                <div className="my-10 ">
                    <img className="rounded h-[70vh] w-full" src={image} alt="" />
                    <div className="flex items-center gap-5 ">
                        <h3 className="text-3xl font-bold my-4">{name}</h3 >

                    </div>
                    <p>{description}</p>
                    <div className=" mt-3">
                        <p>${price}</p>
                        <div className="">
                            <button className="mr-5 btn mt-6 bg-purple-700  text-white font-bold hover:text-purple-700">Book Now</button>
                            <Link to="/">
                                <button className="btn bg-violet-600 py-2 px-3 mt-6  text-white font-bold ">Go to home</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div >
    );
};

export default EventsDitles;