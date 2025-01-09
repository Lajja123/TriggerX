"use client";
import React from "react";
import logo from "../assets/logo.svg";
import { useState } from "react";

import Image from "next/image";
import nav from "../assets/nav.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="lg:w-[80%] md:w-[90%] mx-auto  justify-between my-10 header sm:hidden hidden lg:flex md:flex items-center ">
        <div className=" ">
          <Image src={logo} alt="" className="lg:w-full md:w-[200px]" />
        </div>
        <div className="relative flex flex-col items-center">
          {/* Background Image */}
          <Image
            src={nav}
            alt="Background Design"
            className="absolute z-0 h-auto lg:max-w-min  lg:w-[500px] md:[200px] "
            style={{ top: "-40px" }}
          />

          {/* Foreground Navigation */}
          <div className="flex gap-12 bg-[#181818F0] px-7 py-4 rounded-xl relative z-10">
            <div>Home</div>
            <div>Create Job</div>
            <div>Dashboard</div>
          </div>
        </div>
        <div>
          <button className="bg-[#F8FF7C] text-black py-3 px-4 rounded-full">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex justify-between items-center my-10 header sm:flex  lg:hidden md:hidden">
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-10 z-0">
          <Image src={nav} alt="Nav Background" className="w-64 h-auto z-0" />
        </div>
        {/* Logo */}
        <div className="flex-shrink-0 relative z-10">
          <Image src={logo} alt="Logo" width={150} />
        </div>
        {/* Connect Wallet Button */}
        <div className="flex-shrink-0 relative z-10">
          <button className="bg-[#F8FF7C] text-black py-2 px-2 rounded-full text-sm">
            Connect Wallet
          </button>
        </div>
        {/* Hamburger Menu and Navigation */}
        <div className="relative flex items-center">
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
            {menuOpen && (
              <div className="absolute top-full right-0 mt-3 bg-[#181818] p-4 rounded-md shadow-lg">
                <div className="flex flex-col gap-4 text-white">
                  <div>Home</div>
                  <div>Create Job</div>
                  <div>Dashboard</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
