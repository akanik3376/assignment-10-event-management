/* eslint-disable react/prop-types */

const CommentCard = ({ feedBack }) => {
    const { name, comment, profile_image } = feedBack || {}
    return (

        <div className=" p-4 text-center flex flex-col  rounded-3xl border-2">

            <p className="text-xl">{comment}</p>
            <div className="flex-grow mt-5 flex  items-end">
                <img src={profile_image} alt="" />
                <h4 className="text-xl font-bold">{name}</h4>
            </div>
        </div>

    );
};

export default CommentCard;