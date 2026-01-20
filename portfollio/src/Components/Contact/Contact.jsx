import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto px-2 lg:px-0 py-20">
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-5">
          <div className="w-full md:w-1/2 bg-[#140C1C] p-10 rounded-2xl">
            <div className="flex flex-col items-center justify-center space-y-5">
              <h1 className="bg-gradient-to-r from-[#8A54F7] to-[#FBF9FF] bg-clip-text text-transparent text-6xl font-bold">
                Let&apos;s Work Together!
              </h1>
              <p className="text-[#DDDDDD] text-xl text-center">
                I design and code beautifully simple things and i love what i{" "}
                <br />
                do. Just simple like that!
              </p>
            </div>

            <div className="mt-5">
              <div className="flex space-x-3">
                <input
                  type="text"
                  name="firstName"
                  id=""
                  placeholder="First Name"
                  className="bg-[#050709] text-white opacity-70 px-3 py-3 border-2 w-full rounded-lg border-[#6C3FC7]"
                />
                <input
                  type="text"
                  name="lastName"
                  id=""
                  placeholder="Last Name"
                  className="bg-[#050709] text-white opacity-70 px-3 py-3 border-2 w-full rounded-lg border-[#6C3FC7]"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex space-x-3">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email Address"
                  className="bg-[#050709] text-white opacity-70 px-3 py-3 border-2 w-full rounded-lg border-[#6C3FC7]"
                />
                <input
                  type="number"
                  name="phoneNo"
                  id=""
                  placeholder="Phone Number"
                  className="bg-[#050709] text-white opacity-70 px-3 py-3 border-2 w-full rounded-lg border-[#6C3FC7]"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex space-x-3">
                <textarea
                  name="message"
                  rows={10}
                  id=""
                  placeholder="Message"
                  className="bg-[#050709] text-white opacity-70 px-3 py-3 border-2 w-full rounded-lg border-[#6C3FC7]"
                ></textarea>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-center">
                <button className="transition-all text-white font-bold text-xl duration-700 bg-gradient-to-r from-[#7746DB]/80 to-[#341A65]/90  w-full py-3 rounded-full cursor-pointer  hover:from-[#341A65] hover:to-[#7746DB]">
                  Send Message
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center p-20 space-y-10">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-3">
              <div className="w-16 h-16 rounded-full bg-[#6339B8] flex justify-center items-center">
                <FaPhoneVolume className="text-white text-2xl"></FaPhoneVolume>
              </div>
              <p className="text-white text-2xl font-bold">+8801830612641</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center  lg:space-x-3">
              <div className="w-16 h-16 rounded-full bg-[#6339B8] flex justify-center items-center">
                <MdEmail className="text-white text-2xl"></MdEmail>
              </div>
              <p className="text-white text-2xl font-bold text-center">
                mehedytouhidurzaman@gmail.com
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center  lg:space-x-3">
              <div className="w-16 h-16 rounded-full bg-[#6339B8] flex justify-center items-center">
                <IoLocation className="text-white text-2xl"></IoLocation>
              </div>
              <p className="text-white text-2xl font-bold text-center">
                Balughat, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
