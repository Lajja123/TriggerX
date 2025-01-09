"use client";
import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import chain from "../assets/chain.svg";
import architect from "../assets/architect.svg";
import architect2 from "../assets/architect2.svg";
import secure from "../assets/secure.svg";
import job from "../assets/job.svg";
import power from "../assets/power.svg";
import bls from "../assets/bls.svg";
import insights from "../assets/insights.svg";

function homepage() {
  return (
    <>
      <Navbar />
      <div className="relative w-[90%] mx-auto lg:my-40 md:my-40 my-20 sm:my-20">
        <h1 className="relative text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl leading-[3rem] lg:leading-0 md:leading-8 sm:leading-15">
          Next-Gen Blockchain
        </h1>
        <h1 className="relative text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl lg:mt-3 md:mt-3 sm:mt-0 mt-0 leading-[3rem] lg:leading-0 md:leading-0 sm:leading-15">
          Automation
        </h1>
        <div className="bg-[#FCFCFC] rounded-2xl lg:px-8 lg:py-4  md:px-8 md:py-4  px-5 py-3 flex items-center justify-center gap-4 shadow-md  mx-auto mt-8 min-w-min w-[300px]">
          <span className="text-[#4B4B4B] ">Seamless</span>
          <div className="h-6 border-l border-[#4B4B4B]"></div>
          <span className="text-[#4B4B4B] ">Secure</span>
          <div className="h-6 border-l border-[#4B4B4B]"></div>
          <span className="text-[#4B4B4B] ">Scalable</span>
        </div>
      </div>
      <div className=" flex items-center lg:my-40 md:my-40 my-20 sm:my-20">
        {/* Content Container */}
        <div className=" w-[80%] mx-auto flex justify-between items-center gap-5 sm:flex-col lg:flex-row md:flex-row flex-col">
          {/* Text Content */}
          <div className="lg:max-w-[65%] md:max-w-[55%] sm:max-w-[65%] relative ">
            <p className="text-white lg:text-xl md:text-lg text-md sm:text-md lg:leading-[2rem] md:leading-[2rem] sm:lg:leading-[1.5rem] leading-[1.5rem] p-9 tracking-wide font-normal">
              TriggerX is the future of blockchain automation—bringing ease,
              trust, and innovation to developers, dApps, and enterprises.
              Powered by EigenLayer's AVS (Actively Validated Services), we
              deliver reliable and secure automation across multi-chain
              ecosystems.
            </p>
            {/* Decorative Elements */}
            <div className="absolute inset-0 border-2 border-black/20 ">
              {/* Top Left Corner */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#C07AF6] rounded-tl-md"></div>
              {/* Bottom Right Corner */}
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#C07AF6] rounded-br-md"></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full transition-colors">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-10  w-[90%] mx-auto lg:mt-40 md:mt-40 mt-20 sm:mt-20">
        {/* Left side - Title */}
        <div className="flex-1">
          <h2 className="text-white text-6xl font-normal space-y-5">
            <div>Why Choose</div>
            <div>TriggerX?</div>
          </h2>
        </div>
        {/* Right side - Feature Card */}
        <div className="flex-1 flex-col ">
          <div className="relative bg-[#111111] rounded-xl flex">
            {/* Content */}
            <div className="relative z-10 p-8">
              <h3 className="text-white text-2xl font-semibold mb-4">
                Seamless Multi-Chain Support
              </h3>
              <p className="text-gray-300 text-lg">
                Automate tasks across diverse blockchain networks, including
                emerging Layer 2 (L2) solutions.
              </p>
            </div>
            <Image src={chain} alt={""} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-10 flex-col w-[90%] mx-auto lg:mt-10 md:mt-10 mt-10 sm:mt-10">
        <div>
          <div className="grid grid-cols-4 gap-6">
            {/* Customizable Job Templates */}
            <div className="relative bg-[#111111]  rounded-lg flex items-start">
              <div className="relative z-10 p-8">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Customizable Job Templates
                </h3>
                <p className="text-gray-300">
                  Ready-to-use templates for time-based, condition-based, and
                  event-triggered automation
                </p>
              </div>
              <Image src={job} alt={""} />
            </div>

            {/* Crypto-Economic Security */}
            <div className="relative bg-[#111111]  rounded-lg flex items-start ">
              <Image src={secure} alt={""} />

              <div className="relative z-10 p-8">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Crypto-Economic Security
                </h3>
                <p className="text-gray-300">
                  Powered by EigenLayer's AVS, ensuring safe and reliable task
                  execution
                </p>
              </div>
            </div>

            {/* Decentralized Keeper Network */}
            <div className="relative bg-[#111111] p-8 rounded-lg">
              <div className="relative z-10">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Decentralized Keeper Network
                </h3>
                <p className="text-gray-300">
                  Resilient and tamper-resistant infrastructure powered by
                  decentralized operators
                </p>
              </div>
            </div>

            {/* Scalable Architecture */}
            <div className="relative bg-[#111111] rounded-lg flex items-end flex-col">
              <Image src={architect} alt={""} />

              <div className="relative z-10 p-8 ">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Scalable Architecture
                </h3>
                <p className="text-gray-300">
                  Instantly expand to new blockchains with minimal configuration
                  effort
                </p>
              </div>
              <Image src={architect2} alt={""} />
            </div>

            {/* Powered by EigenLayer - Spans 2 columns */}
            <div className="relative bg-[#111111]  rounded-lg  flex items-start">
              <div className="relative z-10 p-8">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Powered by EigenLayer
                </h3>
                <p className="text-gray-300">
                  Uses EigenLayer's Active Validator System (AVS) for robust
                  economic security
                </p>
              </div>
              <Image src={power} alt={""} />
            </div>

            {/* BLS Signature Aggregation */}
            <div className="relative bg-[#111111]  rounded-lg col-span-2 flex  items-center">
              <Image src={bls} alt={""} />

              <div className="relative z-10 p-8">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  BLS Signature Aggregation
                </h3>
                <p className="text-gray-300">
                  Efficient aggregation of task results with cryptographic
                  security, minimizing costs and execution time
                </p>
              </div>
            </div>

            {/* Real-Time Monitoring & Insights */}
            <div className="relative bg-[#111111] rounded-lg flex items-start">
              <div className="relative z-10 p-8 ">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Real-Time Monitoring & Insights
                </h3>
                <p className="text-gray-300">
                  User dashboards to submit tasks, track job progress, and view
                  keeper performance metrics
                </p>
              </div>
              <Image src={insights} alt={""} />
            </div>
          </div>
        </div>
      </div>
      <div className="  mx-[50px] lg:my-40 md:my-40 my-20 sm:my-20">
        <div className="bg-white rounded-3xl  shadow-lg text-black">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="p-8 ">
                <h1 className="text-6xl font-bold">What Can You Automate</h1>
                <h1 className="text-6xl font-bold">
                  with
                  <span className="text-blue-600 font-semibold">TriggerX</span>?
                </h1>
              </div>

              <Image src={bls} alt={""} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 p-8">
              {/* First Item */}
              <div className="space-y-4">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">
                  01
                </div>
                <h2 className="text-xl font-bold">Time-Based Tasks</h2>
                <p className="text-gray-600 leading-relaxed">
                  Schedule automated actions at specific times or intervals
                </p>
              </div>

              {/* Second Item */}
              <div className="space-y-4">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">
                  02
                </div>
                <h2 className="text-xl font-bold">Event-Triggered Actions</h2>
                <p className="text-gray-600 leading-relaxed">
                  Trigger workflows based on on-chain events like governance
                  proposals or token transfers
                </p>
              </div>

              {/* Third Item */}
              <div className="space-y-4">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">
                  03
                </div>
                <h2 className="text-xl font-bold">Condition-Based Processes</h2>
                <p className="text-gray-600 leading-relaxed">
                  Execute tasks when specific conditions are met, such as price
                  thresholds or liquidity levels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default homepage;
