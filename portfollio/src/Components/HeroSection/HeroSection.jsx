import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
// import heroImg1 from "../../assets/images/HeroImage1.png"
import { FiDownload } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import CountUp from "react-countup";
import heroimg2 from "../../assets/images/MD Touhidur Zaman.png";

const HeroSection = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const numberOfExperienceCount = setInterval(() => {
      setExperienceCount((prev) => (prev < 2 ? prev + 1 : 2));
    }, 40);

    const numberOfProjectCount = setInterval(() => {
      setProjectCount((prev) => (prev < 70 ? prev + 1 : 70));
    }, 20);

    return () => {
      clearInterval(numberOfExperienceCount);
      clearInterval(numberOfProjectCount);
    };
  }, []);
  return (
    <div id="home" className=" container mx-auto p-2 md:p-0">
      <div className="">
        <NavBar></NavBar>
      </div>

      <div className="  p-6  flex flex-col lg:flex-row justify-between items-center md:gap-x-36 relative space-y-10">
        <div className="md:w-1/2 space-y-5 ">
          <h3 className="text-[#DDDDDD] text-4xl font-bold">
            I&apos;m Md Touhidur Zaman,
          </h3>
          <h1 className="bg-gradient-to-r from-[#8A54F7] to-[#E1D3FD] bg-clip-text text-transparent text-7xl">
            Full Stack Web Developer.
          </h1>
          <p className="text-[#DDDDDD] text-2xl">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>

          <div className="flex flex-col  space-x-5 space-y-5">
            <div>
              <a
                href="../../../public/MD_Touhidur_Zaman_CV.pdf"
                download
                target="blank"
              >
                <button className="flex gap-x-2 items-center text-[#8750F7] text-xl px-6 py-2 border-2 border-[#8750F7] rounded-3xl cursor-pointer hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                  Download CV <FiDownload className=""></FiDownload>
                </button>
              </a>
            </div>

            <div className="flex items-center space-x-3 text-[#8750F7] text-xl">
              <div className="p-2 border-2 border-[#8750F7] rounded-full cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                <FaTwitter></FaTwitter>
              </div>
              <div className="p-2 border-2 border-[#8750F7] rounded-full cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                <a href="https://www.facebook.com/tz.mehedy" target="blank">
                  <FaFacebookF></FaFacebookF>
                </a>
              </div>
              <div className="p-2 border-2 border-[#8750F7] rounded-full cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                <a
                  href="https://www.linkedin.com/in/md-touhidur-zaman/"
                  target="blank"
                >
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </div>
              <div className="p-2 border-2 border-[#8750F7] rounded-full cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                <a href="https://github.com/tzmehedy" target="blank">
                  <FaGithub></FaGithub>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="transition-all duration-700 ease-linear w-88 h-88 md:w-125 md:h-125  border-4 border-white flex items-center justify-center  rounded-full shadow-2xl shadow-indigo-900 bg-[#8750F7] opacity-80 relative">
          <img
            className="rounded-full    scale-95  transition-all duration-500 w-90 h-90 md:w-130 md:h-130"
            src={heroimg2}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row justify-center gap-20 py-10">
        <div className="flex items-center text-[#DDDDDD] font-bold space-x-5">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl">{experienceCount}</h1>
          </div>
          <div>
            <p className="text-2xl">
              Years of <br /> Experience
            </p>
          </div>
        </div>
        <div className="flex items-center text-[#DDDDDD] font-bold space-x-5">
          <div className="flex justify-center  text-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-9xl">{projectCount}</h1>+
          </div>
          <div>
            <p className="text-2xl">
              Projects <br /> Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
