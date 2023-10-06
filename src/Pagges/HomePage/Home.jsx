import Banner from "../../Components/BannerSection/Banner";
import ServiceTeam from "../../Components/ServiceTeam/ServiceTeam";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="my-10">
            <Banner></Banner>
            <div className="container mx-auto my-12 ">
                <Services></Services>
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