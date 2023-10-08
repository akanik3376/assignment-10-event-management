import { useEffect, useState } from "react";
import CommentCard from "../CommentCard/CommentCard";

const Testimonials = () => {
    const [feedBacks, setFeedBacks] = useState([])

    useEffect(() => {
        fetch('/comment.json')
            .then(res => res.json())
            .then(data => setFeedBacks(data))
    }, [])
    return (
        <div className="p-5 " >
            <h1 className="text-4xl font-bold text-center">Testimonials</h1>
            <h4 className="text-xl font-semibold text-center mt-3">HAPPY CLIENTS ABOUT US</h4>

            {/* testimonial cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8 ">
                {
                    feedBacks.map(feedBack => <CommentCard key={feedBack.id} feedBack={feedBack}></CommentCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;