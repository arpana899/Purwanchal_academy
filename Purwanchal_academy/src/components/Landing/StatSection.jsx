import React, { useEffect, useRef, useState } from "react";
import { FaBookOpen, FaUsers, FaChalkboardTeacher, FaTrophy } from "react-icons/fa";
import CountUp from "react-countup";
import studentBg from "../../assets/Gallery/Page/stat/stat.jpg";

const stats = [
  { icon: <FaBookOpen className="text-primaryBlue" />, number: 500, label: "Events Hosted" },
  { icon: <FaUsers className="text-primaryBlue" />, number: 900, label: "Our Students" },
  { icon: <FaChalkboardTeacher className="text-primaryBlue" />, number: 50, label: "Skilled Lecturers" },
  { icon: <FaTrophy className="text-primaryBlue" />, number: 700, label: "Win Awards" },
];

const CustomShape = ({ icon }) => {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <div className="absolute w-full h-full bg-white/60 rounded-full border-4 border-white/50 shadow-lg backdrop-blur-lg"></div>
      <div className="absolute w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[400px] bg-cover mt-7 mb-6 bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${studentBg})`, backgroundPosition: "center 40%" }}
    >
      <div className="absolute inset-0 bg-primaryBlue/80"></div>

      <div className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-white p-4 sm:p-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white/45 backdrop-blur-[2px] rounded-lg shadow-md transition-transform duration-300 hover:scale-90"
          >
            <CustomShape icon={stat.icon} />
            <div className="text-3xl font-bold mt-6 text-white">
              {isVisible ? <CountUp start={0} end={stat.number} duration={2.5} separator="," /> : 0}
              <span className="text-primaryBlue">+</span>
            </div>
            <div className="text-lg font-semibold mt-2 text-white/90">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
