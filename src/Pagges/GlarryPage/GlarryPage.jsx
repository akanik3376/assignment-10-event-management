// import { useContext } from "react";
// import { AuthContext } from "../../Providor/AuthProvidor";

import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const GlarryPage = () => {


    return (
        <div>

            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto my-10">



                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="card rounded  bg-base-100 " data-aos="fade-left">
                        <figure><img className=" h-[80vh] md:h-[60vh] lg:h-[50vh] w-full rounded" src="https://i.ibb.co/Ybqfdsy/beautiful-caucasian-wedding-couple-is-standing-front-decorated-with-blue-hydrangea-archway-holding-h.jpg" alt="" /></figure>

                    </div>
                    <div className="card rounded  bg-base-100 " data-aos="fade-left">
                        <figure><img className="h-[80vh] md:h-[60vh] lg:h-[50vh] w-full rounded" src="https://i.ibb.co/3YQCs2J/beautiful-woman-long-red-dress-walks-around-city-with-her-husband-1157-13379.jpg" alt="" /></figure>

                    </div>
                    <div className="card rounded  bg-base-100 " data-aos="fade-left">
                        <figure><img className="h-[80vh] md:h-[60vh] lg:h-[50vh] w-full rounded" src="https://i.ibb.co/Zd3BGxH/happy-newlyweds-hugging-each-other-1153-1591.jpg" alt="" /></figure>

                    </div>
                    <div className="card rounded  bg-base-100 " data-aos="fade-left">
                        <figure><img className="h-[80vh] md:h-[60vh] lg:h-[50vh] w-full rounded" src="https://i.ibb.co/yYJ1qDw/wedding-couple-love-kissing-smiling-young-pretty-elegant-bride-her-handsome-groom-posing-green-park.jpg" alt="" /></figure>

                    </div>
                    <div className="card rounded  bg-base-100 " data-aos="fade-left">
                        <figure><img className="h-[80vh] md:h-[60vh] lg:h-[50vh] w-full rounded" src="https://i.ibb.co/61bhTS7/young-muslim-bride-groom-wedding-photos-181624-29306.jpg" alt="" /></figure>

                    </div>
                    <div className="card rounded  bg-base-100 " data-aos="fade-left">
                        <figure><img className="h-[80vh] md:h-[60vh] lg:h-[50vh] w-full rounded" src="https://i.ibb.co/hMtCbR4/smiley-couple-posing-wedding-full-shot-23-2149956405.jpg" alt="" /></figure>

                    </div>

                </div>


            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default GlarryPage;