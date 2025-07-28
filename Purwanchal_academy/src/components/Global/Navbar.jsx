import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import purwanchallogo from '../../assets/Gallery/Landing/logo/purwanchal_logo.png'

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { path: "/", label: "Home" },
        { path: "/about-purbanchal", label: "About Us" },
        { path: "/programs", label: "Programs" },
        {path : "/events", label : "Events"},
        { path: "/gallery", label: "Gallery" },
        { path: "/contact", label: "Contact" }
    ];

    return (
        <>
            <nav className="bg-gray-100 responsive-padding  text-gray-700 flex justify-between sticky top-0 z-50 shadow-lg items-center py-3 ">
                <div className="flex items-center">
                    <NavLink to="/" className="flex items-center space-x-3">
                        <img
                            src={purwanchallogo}
                            alt="Purwanchal logo"
                            className="h-20 w-25"
                        />
                        <div className="leading-tight hidden lg:block">
                            <h1 className="text-xl font-bold">Purwanchal</h1>
                            <h1 className="text-xx font-bold">Academy</h1>
                        </div>
                    </NavLink>

                </div>

                <div className="hidden md:block">
                    <ul className="flex space-x-6 text-xl font-medium">
                        {menuItems.map(({ path, label }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `transition duration-300 ease-in-out hover:text-sky-500 ${isActive ? "text-primaryBlue" : ""
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}

                    </ul>
                </div>

                <div className="md:hidden">
                    <button onClick={handleToggleMenu}>
                        <RxHamburgerMenu className="text-3xl text-gray-700" />
                    </button>
                </div>
            </nav>
            <div className={`fixed z-50 top-0 right-0 h-full w-64 bg-white bg-opacity-200 text-black transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-100`}>
                <div className="flex justify-between items-center p-5 border-b border-gray-700">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <button onClick={handleToggleMenu}>
                        <IoClose className="text-3xl text-black" />
                    </button>
                </div>

                <ul className="p-5 space-y-4 text-lg font-medium">
                    {menuItems.map(({ path, label }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `block p-2 rounded-md transition ${isActive ? "bg-primaryBlue text-white" : "hover:bg-white"}`
                                }
                                onClick={handleToggleMenu}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-opacity-10 z-40"
                    onClick={handleToggleMenu}
                ></div>
            )}
        </>
    );
};

export default Navbar;
