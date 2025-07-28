import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import stripHTML from '../../utility/textUtils';
import SummaryApi from '../../api/api';




const MeetOurTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slideStep, setSlideStep] = useState(1);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/teams/');
        setTeachers(res.data);
        setCurrentIndex(res.data.length); 
      } catch (error) {
        console.error('Error fetching teachers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  useEffect(() => {
    const updateSlideStep = () => {
      let newVisibleCards = 1;
      if (window.innerWidth >= 1280) {
        newVisibleCards = 4;
      } else if (window.innerWidth >= 1024) {
        newVisibleCards = 3;
      } else if (window.innerWidth >= 768) {
        newVisibleCards = 2;
      }
      setVisibleCards(newVisibleCards);
      setSlideStep(newVisibleCards);
    };

    updateSlideStep();
    window.addEventListener('resize', updateSlideStep);
    return () => window.removeEventListener('resize', updateSlideStep);
  }, []);

  const duplicatedTeachers = [...teachers, ...teachers, ...teachers];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + slideStep);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - slideStep);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (teachers.length === 0) return;

    if (currentIndex >= teachers.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(teachers.length);
      }, 500);
    }
    if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(teachers.length);
      }, 500);
    }
  }, [currentIndex, teachers.length]);

  if (loading) {
    return <p className="text-center py-10">Loading teachers...</p>;
  }

  if (teachers.length === 0) {
    return <p className="text-center py-10">No teachers found.</p>;
  }

  return (
    <section id="teachers" className="py-16 responsive-padding">
      <h2 className="text-3xl font-bold md:text-4xl text-center text-textColor text-primaryBlue mb-5">
        Meet Our Teachers
      </h2>
      <p className="text-gray-800 text-xl text-center">
        Our dedicated and experienced teachers are here to guide students toward success.
      </p>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {duplicatedTeachers.map((teacher, index) => (
            <div
              key={index}
              className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] p-4 py-10"
            >
              <div className="bg-white shadow-lg shadow-primaryBlue/10 rounded-lg overflow-hidden border-primaryBlue/30 border-2 hover:shadow-2xl hover:shadow-primaryBlue/15 transition duration-300 h-full flex flex-col">
                <img
                  src={`http://127.0.0.1:8000${teacher.image}`}
                  alt={teacher.name}
                  className="w-40 h-40 mx-auto rounded-full object-cover my-6"
                />
                <div className="pb-6 px-4 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-textColor mb-2">
                      {teacher.name}
                    </h3>
                    <p className="text-gray-700 text-xl font-medium">{teacher.post}</p>
                  </div>
                  <p className="text-gray-600 mt-2">{`${stripHTML(teacher.description)}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-8 space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-DarkButton border-primaryBlue border-2 hover:text-white transform hover:bg-primaryBlue text-primaryBlue rounded-lg shadow hover:scale-105 transition duration-300"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-DarkButton border-primaryBlue border-2 hover:text-white transform hover:bg-primaryBlue text-primaryBlue rounded-lg shadow hover:scale-105 transition duration-300"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default MeetOurTeachers;
    