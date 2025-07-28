import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { PiChalkboardTeacher } from "react-icons/pi";
import { ImBooks } from "react-icons/im";
import { TbMoneybag } from "react-icons/tb";

const features = [
  {
    id: 1,
    title: "Scholarship Facility",
    description: "Providing financial support to deserving students.",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    title: "Skilled Lecturers",
    description: "Experienced and qualified teachers dedicated to student success.",
    icon: <PiChalkboardTeacher />
  },
  {
    id: 3,
    title: "Book Library Facility",
    description: "Access to a wide range of books and resources for learning.",
    icon: <ImBooks />
  },
  {
    id: 4,
    title: "Affordable Price",
    description: "Quality education should be accessible to all providing excellence.",
    icon: <TbMoneybag />
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative responsive-padding mb-5 md:z-10 overflow-hidden">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold px-5 text-black block">
          Our Features
        </h1> 
        <div className="grid grid-cols-2 gap-6 p-4 lg:flex md:justify-center">
          {features.map((feature) => (
           <div
           key={feature.id}
           className="group flex flex-col items-center shadow-lg bg-primaryBlue  hover:-translate-y-2 transition-all hover:text-white px-4 py-5 rounded-3xl text-white w-full duration-300 cursor-pointer"
         >
           <div className="flex items-center justify-center text-3xl md:text-4xl w-14 h-14 md:w-16 md:h-16 bg-primaryBlue rounded-full text-white group-hover:bg-white group-hover:text-primaryBlue transition-colors duration-300">
             {feature.icon}
           </div>
           <h3 className="font-semibold text-white text-lg md:text-xl group-hover:text-white transition-colors duration-300 mt-2">
             {feature.title}
           </h3>
           <p className="text-white text-sm md:text-lg hidden md:block text-center group-hover:text-white transition-colors duration-300">
             {feature.description}
           </p>
         </div>
         
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
