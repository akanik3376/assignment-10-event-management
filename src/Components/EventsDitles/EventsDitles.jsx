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
    console.log(event)

    const { name, image, description } = event || {}

    return (
        <div className="my-10">
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
};

export default EventsDitles;