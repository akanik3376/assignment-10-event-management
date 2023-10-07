import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EventsDitles = () => {


    const [event, setEvent] = useState({})

    const { id } = useParams()
    // console.log(id)
    const events = useLoaderData()


    useEffect(() => {
        const findEvents = events.find(event => event.id == id)
        setEvent(findEvents)
    }, [id, events])

    const { name, image, description } = event || {}

    return (
        <div className="flex justify-center container mx-auto ">
            <div className="my-10 ">
                <img className="rounded h-[70vh] w-full" src={image} alt="" />
                <div className="flex items-center gap-5 ">
                    <h3 className="text-3xl font-bold my-4">{name}</h3 >
                    <button className="btn bg-purple-700  text-white font-bold hover:text-purple-700">Book Now</button>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default EventsDitles;