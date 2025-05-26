import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai"; // ⬅️ استيراد زر X
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar flex container items-center justify-between mt-5 relative">
            <div className="logo text-[2.5em] font-[500]">
                <h1>Logo</h1>
            </div>

            {/* روابط الديسكتوب */}
            <div className="hidden sm:flex">
                <ul className=" flex items-center gap-[2.7em] text-[#2A323899] text-[1.25em] font-[500]">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/Dashboard/contact-us-form">Contact Us</NavLink>
                </ul>
            </div>

            {/* زر Login يظهر فقط في الشاشات >= sm */}
            <button className="button-active hidden sm:flex items-center justify-center w-[10em] h-[2.5em] rounded-[1.25em] bg-[#2A3238] text-white text-[1.25em] font-[500] hover:scale-105 transition">
                Login
            </button>

            {/* زر Menu يظهر فقط في الشاشات < sm */}
            <div className="flex items-center gap-5 sm:hidden">
                <div className="text-[2em] cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <TiThMenu />
                </div>
            </div>

            {/* القائمة الجانبية للموبايل */}
            {menuOpen && (
                <div className="fixed top-20 right-5 z-50 w-[18em] h-[28em] bg-[#2A3238] rounded-2xl p-6 sm:hidden transition-all duration-300 ease-in-out">
                    {/* زر X لإغلاق القائمة */}
                    <div className="flex justify-end mb-4">
                        <AiOutlineClose className="text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
                    </div>

                    <ul className=" nav-links-mobile text-[#FFFFFF99] text-[1.2em] font-[500] flex flex-col items-center gap-5">
                        <NavLink to="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </NavLink>
                        <NavLink to="/service" onClick={() => setMenuOpen(false)}>
                            Service
                        </NavLink>
                        <NavLink to="/Dashboard/" onClick={() => setMenuOpen(false)}>
                            Contact Us
                        </NavLink>
                    </ul>
                </div>
            )}
        </div>
    );
}
