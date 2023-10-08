import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import BlogBanner from "./BlogBannrt";

const BlogPage = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>

            <div className="container mx-auto mt-10">
                <BlogBanner></BlogBanner>
            </div>


            <div className="my-10 container mx-auto">
                <p className="font-extrabold text-pink-400 text-center">OUR BLOG</p>
                <h1 className="text-center text-4xl mt-4 font-semibold">Get Inspired & Celebrate</h1>

                {/* wedding events  */}
                <section className="m-10 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex gap-5">
                        <img className="w-48" src="https://i.ibb.co/G0vz9r1/blog-3.jpg" alt="" />
                        <div>
                            <h3 className="text-2xl">Best Choice for Children’s Party</h3>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis semper tortor. Quisque non felis elementum augue ullamcorper laoreet. Nam porta leo ut felis suscipit, vel semper lectus vehicula. Nulla vitae porta leo. </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <img className="w-48" src="https://i.ibb.co/DfPWwMp/blog-4.jpg" alt="" />
                        <div>
                            <h3 className="text-2xl">Best Choice for Baby shower</h3>
                            <p className="text-xs">Your baby shower is more than just an event; it`s the beginning of a beautiful journey. We are here to help you craft an unforgettable day that you, your family, and your friends will cherish forever. </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <img className="w-48" src="https://i.ibb.co/Lx8kZTB/blog-6-1024x653.jpg" alt="" />
                        <div>
                            <h3 className="text-2xl">Best Choice for Wedding</h3>
                            <p className="text-xs">This message emphasizes your unique selling points, your commitment to personalized service, and your ability to turn wedding dreams into reality, providing potential customers with compelling reasons to choose your wedding planning service. Customize this message to align with your specific strengths and offerings. </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <img className="w-48" src="https://i.ibb.co/8KkwbL0/blog-5-1024x653.jpg" alt="" />
                        <div>
                            <h3 className="text-2xl">How to Start an Event Planning Service
                            </h3>
                            <p className="text-xs">Starting an event planning service takes time and effort, but with dedication and the right approach, you can build a successful business in this exciting industry. </p>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default BlogPage;