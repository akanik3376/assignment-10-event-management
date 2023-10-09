
import { BsFacebook } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';

const ServiceTeam = () => {
    return (
        <div className="text-center">
            <h6 className="font-bold text-green-900 text-xs">OUR TEAM</h6>
            <h2 className="font-bold text-4xl mt-2">Meet The Team</h2>

            <div >

                <div className="mt-7">

                    <div className="grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden	" >
                        <div className=" grid grid-cols-4  lg:grid-cols-6 bg-base-100 ">
                            <div className="col-span-2 lg:col-span-3 ">

                                <img className="h-full  " src="https://i.ibb.co/6J384p3/bold-asian-man-yellow-hoodie-yellow-studio-pointing-side-1187-394159.jpg" alt="" />

                            </div>
                            <div className=" p-5 col-span-2 lg:col-span-3
                            bg-black text-start ">

                                <h1 className="text-sm font-extrabold text-green-600">FOUNDER
                                </h1>
                                <h3 className="text-2xl font-bold text-green-600">David Allen</h3>

                                <div className='flex flex-col gap-3 text-4xl my-2 bg-'>
                                    <BsFacebook className='text-blue-700'></BsFacebook>
                                    <BiLogoInstagramAlt className='text-red-900'></BiLogoInstagramAlt>
                                    <AiFillTwitterCircle className='text-blue-700'></AiFillTwitterCircle>
                                </div>

                            </div>
                        </div>
                        <div className=" grid grid-cols-4 lg:grid-cols-6 bg-base-100 ">
                            <div className="col-span-2 lg:col-span-3">

                                <img className="h-full " src="https://i.ibb.co/fQ8tjwq/portrait-young-handsome-man-standing-with-crossed-arms-with-isolated-studio-yellow-background-1150-6.jpg" alt="" />

                            </div>
                            <div className=" p-5 col-span-2 lg:col-span-3
                            bg-black text-start ">

                                <h1 className="text-sm font-extrabold text-green-600">MANAGER</h1>
                                <h3 className="text-2xl font-bold text-green-600">James Powell</h3>
                                <div className='flex  flex-col gap-3 text-4xl my-2 bg-'>
                                    <BsFacebook className='text-blue-700'></BsFacebook>
                                    <BiLogoInstagramAlt className='text-red-900'></BiLogoInstagramAlt>
                                    <AiFillTwitterCircle className='text-blue-700'></AiFillTwitterCircle>
                                </div>

                            </div>
                        </div>
                        <div className=" grid grid-cols-4 lg:grid-cols-6 bg-base-100 ">

                            <div className=" p-5 col-span-2 lg:col-span-3
                            bg-black text-end">

                                <h1 className="text-sm font-extrabold text-green-600">PLANNER</h1>
                                <h3 className="text-2xl font-bold text-green-600">James Powell</h3>

                                <div className="flex justify-end">
                                    <div className='flex  flex-col  gap-3 text-4xl my-2 bg-'>
                                        <BsFacebook className='text-blue-700'></BsFacebook>
                                        <BiLogoInstagramAlt className='text-red-900'></BiLogoInstagramAlt>
                                        <AiFillTwitterCircle className='text-blue-700'></AiFillTwitterCircle>
                                    </div>
                                </div>

                            </div>

                            <div className="col-span-2 lg:col-span-3">

                                <img className="h-full" src="https://i.ibb.co/V2tryp9/photo-unshaven-man-has-recreation-time-going-fishing-during-weekend-wears-hat-protective-raincoat-lo.jpg" alt="" />

                            </div>

                        </div>
                        <div className=" grid grid-cols-4 lg:grid-cols-6 bg-base-100 ">

                            <div className=" p-5 col-span-2 lg:col-span-3
                            bg-black text-end">

                                <h1 className="text-sm font-extrabold text-green-600">PLANNER</h1>
                                <h3 className="text-2xl font-bold text-green-600">Steven Harris</h3>

                                <div className="flex justify-end">
                                    <div className='flex  flex-col  gap-3 text-4xl my-2 bg-'>
                                        <BsFacebook className='text-blue-700'></BsFacebook>
                                        <BiLogoInstagramAlt className='text-red-900'></BiLogoInstagramAlt>
                                        <AiFillTwitterCircle className='text-blue-700'></AiFillTwitterCircle>
                                    </div>
                                </div>


                            </div>

                            <div className="col-span-2 lg:col-span-3">

                                <img className="h-full bg-yellow-600" src="https://i.ibb.co/TcxdTnW/happy-attractive-guy-pointing-fingers-your-logo-showing-promo-his-tshirt-standing-yellow-1258-155118.jpg" alt="" />

                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceTeam;