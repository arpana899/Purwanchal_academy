import React from 'react';
import { Link } from 'react-router-dom';

const WhyPurwanchal = () => {
  return (
    <div className="responsive-padding">
      <div className="flex flex-col-reverse md:flex-row max-w-[749px]:flex-row">
        <div className="w-full md:w-1/2 px-5">
          <h2 className="text-3xl font-bold text-primaryBlue mb-4 mt-4 md:text-3xl xl:text-4xl">
            Why Choose Purwanchal?
          </h2>
          <p className="text-lg text-gray-700 flex mb-6">
            Purwanchal is known for its rich culture, educational excellence, and community values.
            It offers opportunities for personal growth and professional success with state-of-the-art facilities, skilled faculty, and an inclusive learning environment.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Located in a vibrant region, Purwanchal stands out for its commitment to providing quality education that prepares students for the challenges of tomorrow.
          </p>
          <Link
            to="/about-purbanchal"
            className="inline-block px-6 py-3 text-lg bg-primaryBlue text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Read More
          </Link>
        </div>

        <div className="w-full md:w-1/2 max-w-[749px]:w-1/2 mt-6 px-5 mx-auto">
          <img
            src="/images/principal.jpg"
            alt="Purwanchal"
            className="w-full h-auto max-w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyPurwanchal;
