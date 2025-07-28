import React from "react";
import studentsPhoto from '../assets/Gallery/carousel/allStudent.png';
import PrincipalsMessage from "../components/AboutUs/PrincipalsMessage";
import MeetOurTeachers from "../components/AboutUs/MeetOurTeacher";
import Testimonials from "../components/AboutUs/Testimonials";

const AboutPurbanchal = () => {
  return (
    <div className="  " >
      <div className="flex   responsive-padding items-center  pt-12">
        <span className=" font-bold text-primaryBlue pb-4 uppercase text-2xl lg:text-4xl" >About Us</span>
      </div>

      <section className="flex responsive-padding flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-justify space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-left">
            Welcome to Purwanchal Academy
          </h1>
          <p className="text-gray-600 text-lg">
            <strong>Purwanchal Academy</strong> is a place where young minds grow and learn in a
            <strong> safe and friendly environment</strong>. As a <strong>leading secondary school</strong> in Nepal,
            we help students, especially <strong>Class 10</strong> learners, to gain knowledge, develop skills, and
            prepare for a bright future.
          </p>
          <p className="text-gray-600">
            We are located in <strong>Sundarharaincha-06, Morang</strong>. Our goal is to give students a strong
            academic foundation, improve their thinking skills, and help them grow into confident and responsible individuals.
            We focus on making learning exciting and meaningful for every student.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm text-left">
            <li>➡ Skilled and Child-Friendly Teachers</li>
            <li>➡ Well-Equipped Science & Computer Labs</li>
            <li>➡ Research and Development Programs</li>
            <li>➡ Interactive and Digital Classrooms</li>
            <li>➡ Safe Transportation Facility</li>
            <li>➡ 1000+ Happy Students and parents</li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center items-start mt-2 md:mt-33 w-full h-full">
          <img
            src={studentsPhoto}
            alt="Purbanchal student photo"
            className="rounded-lg shadow-md w-full sm:w-3/4 md:w-4/5 lg:w-[500px] xl:w-[600px] h-auto max-w-lg md:max-w-xl lg:max-w-2xl filter drop-shadow-[20px_50px_50px_rgba(5,0,0,0.1)]"
          />
        </div>
      </section>
      <PrincipalsMessage />
      <MeetOurTeachers />
      <Testimonials />
    </div>
  );
}

export default AboutPurbanchal;
