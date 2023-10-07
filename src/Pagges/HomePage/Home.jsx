import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/BannerSection/Banner";
import ServiceTeam from "../../Components/ServiceTeam/ServiceTeam";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
    const events = useLoaderData()
    console.log(events)
    return (
        <div className="my-10">
            <Banner></Banner>

            <div className="container mx-auto my-12">
                <h1 className="text-4xl font-bold text-center">Our services</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {
                        events?.map((event) => <Services key={event.id} event={event}></Services>)
                    }
                </div>
            </div>

            <div className="container mx-auto my-12 ">
                <Testimonials></Testimonials>
            </div>
            <div className=" mx-auto my-12 ">
                <ServiceTeam></ServiceTeam>
            </div>
        </div>
    );
};

export default Home;