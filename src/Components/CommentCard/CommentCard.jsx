/* eslint-disable react/prop-types */

const CommentCard = ({ feedBack }) => {
    const { name, comment } = feedBack || {}
    return (

        <div className=" p-4 text-center flex flex-col  rounded-3xl border-2 bg-[#1B1B1B0D] " data-aos="zoom-in-up">

            <p className="text-xl">{comment}</p>
            <div className="flex-grow mt-5 flex justify-center items-end">

                <h4 className="text-xl font-bold ">{name}</h4>
            </div>


        </div>

    );
};

export default CommentCard;