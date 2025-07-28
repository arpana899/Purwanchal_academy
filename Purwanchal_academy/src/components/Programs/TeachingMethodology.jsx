import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const TeachingMethodology = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const methodologyItems = [
    {
      title: "Active Learning",
      content:
        "Active Learning encourages students to actively participate in their learning through interactive exercises, discussions, and hands-on activities.",
    },
    {
      title: "Collaborative Learning",
      content:
        "Collaborative Learning is a method that encourages students to work together in groups to achieve shared learning goals.",
    },
    {
      title: "Inquiry-Based Learning",
      content:
        "Inquiry-Based Learning emphasizes students asking questions and seeking answers through research and exploration.",
    },
  ];

  return (
    <section className="py-14 responsive-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#2c2e90] mb-12">
          Our Teaching Methodology
        </h2>

        <div className="accordion space-y-4 lg:grid lg:grid-cols-3 lg:gap-6">
          {methodologyItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full text-left p-6  focus:outline-none flex items-center justify-between bg-primaryBlue text-white md:bg-white md:text-primaryBlue  transition-colors duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <div className="text-2xl md:hidden">
                  {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </button>

              <div
                className={`px-6 py-4 bg-white text-gray-700 ${
                  activeIndex === index ? "block" : "hidden"
                } md:block`}
              >
                <p className="text-lg">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};