import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import blob1 from "../assets/blob1.svg";

function homepage() {
  return (
    <div>
      <div className="w-[80%] mx-auto flex justify-between my-10 header ">
        <div className="flex gap-12 bg-[#181818F0] px-7 py-4 rounded-full">
          <div>Home</div>
          <div>Create Job</div>
          <div>Dashboard</div>
        </div>
        <div>
          <button className="bg-[#F8FF7C] text-black py-3 px-4 rounded-full">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-40 ">
        <Image src={logo} alt="" className="w-full" />
      </div>
      <div className="section1">
        <div className=" w-[50%] mx-auto  items-center">
          <Image
            src={blob1}
            alt=""
            className=" items-center relative bottom-20 left-15"
          />
        </div>
      </div>
    </div>
  );
}

export default homepage;
