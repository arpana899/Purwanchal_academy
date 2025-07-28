import React from "react";
import { FaFacebook, FaEnvelope } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
import logoWhite from '../../assets/Gallery/Landing/logo/logo_white.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white py-8 overflow-hidden bg-primaryBlue">
      <div className="responsive-padding text-xl">
        <div className="flex flex-col lg:flex-row justify-between gap-8">

          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <img src={logoWhite} alt="Logo" className="h-16 mb-2 sm:mb-4 rounded-2xl" />
              
              <p className="text-2xl font-semibold text-gray-100">Purwanchal Academy</p>

              <p className="text-sm italic text-gray-300 mt-2 px-4 sm:px-0">
                "Empowering Young Minds, Shaping Bright Futures!"
              </p>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mt-4">
              <a href="https://www.facebook.com/Purwanchal98" className="hover:text-popBlue" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              
              <a href="mailto:purwanchal98@gmail.com" className="hover:text-popBlue" aria-label="Email">
                <FaEnvelope size={20} />
              </a>
            </div>

            <div className="border-t border-gray-600 w-full mt-4 lg:hidden"></div>
          </div>

          <div className="flex-1 text-left justify-center ">
            <div className="flex flex-col items-center lg:items-left">
              <h3 className="font-semibold mb-4">OUR PAGES</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center  lg:justify-start space-x-2 transition-transform duration-200 hover:translate-x-2">
                  <GoTriangleRight className="text-sm" />
                  <Link to="/" className="hover:text-popBlue">Home</Link>
                </li>
                <li className="flex items-center  lg:justify-start space-x-2 transition-transform duration-200 hover:translate-x-2">
                  <GoTriangleRight className="text-sm" />
                  <Link to="/about-purbanchal" className="hover:text-popBlue">About Us</Link>
                </li>
                <li className="flex items-center  lg:justify-start space-x-2 transition-transform duration-200 hover:translate-x-2">
                  <GoTriangleRight className="text-sm" />
                  <Link to="/gallery" className="hover:text-popBlue">Gallery</Link>
                </li>
                <li className="flex items-center  lg:justify-start space-x-2 transition-transform duration-200 hover:translate-x-2">
                  <GoTriangleRight className="text-sm" />
                  <Link to="/contact" className="hover:text-popBlue">Contact Us</Link>
                </li>
              </ul>
              <div className="border-t border-gray-600 w-full block lg:hidden mt-4"></div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-end">
            <div className="flex flex-col items-center lg:items-end">
              <h3 className="font-semibold mb-4">CONTACT US</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:purwanchal98@gmail.com" className="hover:text-cyan-400">purwanchal98@gmail.com</a></li>
                <li><a href ="tel:+977984-2067261" className="hover:text-cyan-400">+977-9842067261</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8">
        <div className="mt-8 text-center border-t border-gray-600 pt-4">
          <p className="text-sm md:text-base">&copy; Purwanchal Academy , All Right Reserved. Designed By Youth It </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
