import React from "react";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall, IoLocationSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex flex-row items-center  justify-between responsive-padding py-3 bg-primaryBlue text-white text-sm"
      >

      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">

        <div className="flex items-center space-x-2">
          <IoLocationSharp className="text-lg text-gray-300 hidden sm:block " />
          <p className=" hover:text-gray-300 transition duration-300 hidden sm:block">
            Sundar Haraincha-6, Morang
          </p>

        </div>

        <a
          href="mailto:purwanchal98@gmail.com"
          className="flex items-center space-x-2 hover:text-gray-300 transition duration-300"
        >
          <MdEmail className="text-lg text-gray-300 hidden sm:block" />
          <span className="hidden sm:block">purwanchal98@gmail.com</span>
        </a>

        <a
          href="tel:+9779842067261"
          className="flex items-center space-x-2 hover:text-gray-300 transition duration-300"
        >
          <IoCall className="text-lg text-gray-300" />
          <span>9842067261</span>
        </a>

      </div>

     
      <div className="mt-2 md:mt-0">
        <a
          href="https://www.facebook.com/Purwanchal98"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300 flex items-center space-x-2"
        >
          <FaFacebook className="text-2xl text-gray-300 hover:text-white transition duration-300" />

        </a>
      </div>
    </div>
  );
};

export default Header; 
