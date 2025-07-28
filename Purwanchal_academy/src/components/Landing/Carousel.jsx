import React from 'react';
import { Link } from 'react-router-dom';
import hat from "../../assets/Gallery/Landing/arrow/hatnobg.png";
import schoolLanding from '../../assets/Gallery/Landing/arrow/schoolLanding.png';
import mobileHatCropped from '../../assets/Gallery/Landing/arrow/mobileHatCropped.png'

const Landing = () => {
    return (
        <div className="responsive-padding overflow-visible relative">
            <div className="flex items-center justify-center py-4 md:p-4 lg:p-10 xl:px-6 sm:px-12 relative md:top-[-30px]">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl w-full relative md:text-3xl xl:text-4xl">
                    <div className="flex flex-col justify-center relative z-10 mt-10 sm:30">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-0 leading-tight">
                            Welcome to <span className="text-primaryBlue font-bold">Purwanchal Academy</span>:
                        </h1>
                        <h2 className="text-lg sm:text-xl md:text-2xl mt-6 font-bold text-gray-900 leading-snug pb-3">
                            Shaping Young Minds with Care and Excellence.
                        </h2>

                        <p className="text-md sm:text-base md:text-md text-gray-700 leading-relaxed text-justify">
                            Welcome to Purwanchal Academy, where young minds embark on their educational journey through playgroup, nursery, and kindergarten programs. From foundational stages to grade 10, we cultivate a nurturing environment for students to grow, learn, and explore. Our dedicated teachers and state of the art facilities ensure every child receives personalized care and attention to excel in their studies.
                        </p>
                        <div className="relative w-full flex flex-col justify-center items-center md:items-start overflow-visible">
                            <div className="flex mt-5">
                                <Link to="programs">
                                    <button
                                        className="border rounded-2xl bg-primaryBlue text-white py-3 px-6  ml-20 md:text-xl md:mx-auto md:ml-40 md:mt-10"
                                    >
                                        Explore
                                    </button>
                                </Link>
                                <img src={mobileHatCropped} className="w-32 max-h-30 md:hidden" alt="connect_img" />
                            </div>
                            <img
                                src={schoolLanding}
                                alt="Mobile & Tablet View Image"
                                className="md:hidden "
                            />

                             <img
                                    src={hat}
                                    alt="Hat Image"
                                    className="hidden md:block absolute bottom-0 sm:left-[12rem] md:w-[60rem] left-[0rem] lg:left-[15rem] -z-40"
                                />

                            
                        </div>

                    </div>
                    <img src={schoolLanding} alt="school"  className="hidden md:block sm:h-[25rem] transition-transform transform hover:scale-105 duration-300 ease-in-out z-10" />
                </div>
            </div>
            <img
                src={hat}
                alt="md_connect_hat"
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden object-cover"
            />

        </div>
    );
};

export default Landing;


