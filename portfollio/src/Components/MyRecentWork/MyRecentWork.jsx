import React, { useState } from "react";
import img1 from "../../assets/images/Event Management.png";
import img2 from "../../assets/images/Ride Management.png";
import img3 from "../../assets/images/Ai mentor.png";
import {FaCode, FaGlobe } from "react-icons/fa";

const MyRecentWork = () => {
  const [open, setOpen] = useState(0);

  return (
    <div id="works" className="container mx-auto px-2 md:px-0 py-10">
      <div className="flex flex-col items-center justify-center space-y-5 ">
        <h1 className="bg-gradient-to-r from-[#8A54F7] to-[#FBF9FF] bg-clip-text text-transparent text-6xl font-bold">
          My Recent Work
        </h1>
        <p className="text-[#DDDDDD] text-xl text-center">
          I put your ideas and thus your wishes to develop of a unique website{" "}
          <br />
          that inspires you and you customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10 ">
        <div
          onMouseLeave={() => setOpen(0)}
          onMouseEnter={() => setOpen(1)}
          className="w-full  py-3 overflow-hidden px-10 bg-[#2C184D] shadow-2xl rounded-2xl border-3 border-[#8A55F7] relative animate-pulse hover:animate-none"
        >
          <div className="">
            <img className="rounded-2xl min-h-full" src={img1} alt="" />
          </div>

          <div className="absolute left-0 right-0 top-0">
            {open === 1 && (
              <div className="absolute ease-in transition-all duration-700  bg-[#8A55F7]  w-full flex flex-col justify-start items-center ">
                <a
                  href="https://aimentor-a5f3e.web.app/"
                  target="_blank"
                  className="flex items-center gap-2"
                  // className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                >
                  <FaGlobe/> Ai Mentor
                </a>
                <a
                  href="https://github.com/md-touhidur-zaman/ai-mentor"
                  target="_blank"
                  className="flex items-center gap-2"
                  // className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                >
                  <FaCode/> Code
                </a>
              </div>
            )}
          </div>
        </div>


         <div
          onMouseLeave={() => setOpen(0)}
          onMouseEnter={() => setOpen(2)}
          className="w-full  py-3 overflow-hidden px-10 bg-[#2C184D] shadow-2xl rounded-2xl border-3 border-[#8A55F7] relative animate-pulse hover:animate-none"
        >
          <div className="">
            <img className="rounded-2xl min-h-full" src={img2} alt="" />
          </div>

          <div className="absolute left-0 right-0 top-0">
            {open === 2 && (
              <div className="absolute ease-in transition-all duration-700  bg-[#8A55F7]  w-full flex flex-col justify-start items-center ">
                <a
                  href="https://ride-sharing-eta.vercel.app"
                  target="_blank"
                  className="flex items-center gap-2"
                  // className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                >
                  <FaGlobe/> Ride Management
                </a>
                <a
                  href="https://github.com/md-touhidur-zaman/Ride-Bookings"
                  target="_blank"
                  className="flex items-center gap-2"
                  // className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                >
                  <FaCode/> Code
                </a>
              </div>
            )}
          </div>
        </div>



         <div
          onMouseLeave={() => setOpen(0)}
          onMouseEnter={() => setOpen(3)}
          className="w-full  py-3 overflow-hidden px-10 bg-[#2C184D] shadow-2xl rounded-2xl border-3 border-[#8A55F7] relative animate-pulse hover:animate-none"
        >
          <div className="">
            <img className="rounded-2xl min-h-full" src={img3} alt="" />
          </div>

          <div className="absolute left-0 right-0 top-0">
            {open === 3 && (
              <div className="absolute ease-in transition-all duration-700  bg-[#8A55F7]  w-full flex flex-col justify-start items-center ">
                <a
                  href="https://aimentor-a5f3e.web.app/"
                  target="_blank"
                  className="flex items-center gap-2"
                  // className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                >
                  <FaGlobe/> Ai Mentor
                </a>
                <a
                  href="https://github.com/md-touhidur-zaman/ai-mentor"
                  target="_blank"
                  className="flex items-center gap-2"
                  // className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                >
                  <FaCode/> Code
                </a>
              </div>
            )}
          </div>
        </div>

        

      </div>

      {/* <div className="flex flex-col lg:flex-row justify-center gap-10 container mx-auto mt-10 "></div> */}
    </div>
  );
};

export default MyRecentWork;
