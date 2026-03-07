import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
// import heroImg1 from "../../assets/images/HeroImage1.png"
import { FiDownload } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import CountUp from "react-countup";
import heroimg2 from "../../assets/images/MD Touhidur Zaman.png";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

const HeroSection = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [animate, setIsAnimate] = useState(false)

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

      <div  className="  p-6  flex flex-col lg:flex-row justify-between items-center md:gap-x-36 relative space-y-10">
        <div className="md:w-1/2 space-y-5 ">
          <h3 className="text-[#DDDDDD] text-4xl font-bold">
            I&apos;m Md Touhidur Zaman,
          </h3>
          <h1 className="bg-linear-to-r from-[#8A54F7] to-[#E1D3FD] bg-clip-text text-transparent text-7xl">
            Full Stack Web Developer.
          </h1>
          <p className="text-[#DDDDDD] text-2xl">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>

          <div className="flex flex-col  space-x-5 space-y-5">
            <div>
              <a href="/MD_Touhidur_Zaman_CV.pdf" download target="blank">
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

        <div onMouseEnter={()=>setIsAnimate(true)} onMouseLeave={()=>setIsAnimate(false)} className="w-88 h-88 md:w-105 md:h-105   flex items-center justify-center  rounded-full   opacity-80 relative shadow-2xl shadow-indigo-400  ">
          <img
            className="rounded-full  scale-95  transition-all duration-500 z-50 "
            src={heroimg2}
            alt=""
          />

          {/* <div className="absolute w-98 h-98 border-2 border-white rounded-full "> */}
            {/* <div className="relative w-98 h-98 rounded-full animate-spin [animation-duration:30s]">
              <div className="absolute -top-10 left-36">
                <RiReactjsFill className="text-7xl text-[#58C4DC]"></RiReactjsFill>
              </div>

              <div className="absolute -right-8 top-32">
                <SiNextdotjs className="text-7xl text-[#58C4DC]"></SiNextdotjs>
              </div>

              <div className="absolute -left-8 top-32">
                <SiExpress className="text-7xl text-white"></SiExpress>
              </div>

              <div className="absolute -bottom-6 left-24">
                <SiMongodb className="text-7xl text-[#00684A]"></SiMongodb>
              </div>
             
            </div> */}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`relative w-88 h-88 lg:w-105 lg:h-105 border-2 border-white rounded-full animate-spin [animation-duration:30s] ${animate && `[animation-play-state:paused]`}`}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <RiReactjsFill className="text-5xl text-[#58C4DC]" />
                </div>

                <div className="absolute top-1/2 -right-6 -translate-y-1/2">
                  <SiNextdotjs className="text-5xl text-[#58C4DC]" />
                </div>

                <div className="absolute top-1/2 -left-6 -translate-y-1/2">
                  <SiExpress className="text-5xl text-white" />
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <SiMongodb className="text-5xl text-[#00684A]" />
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row justify-center gap-20 py-10">
        <div className="flex items-center text-[#DDDDDD] font-bold space-x-5">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl">
              {experienceCount}
            </h1>
          </div>
          <div>
            <p className="text-2xl">
              Years of <br /> Experience
            </p>
          </div>
        </div>
        <div className="flex items-center text-[#DDDDDD] font-bold space-x-5">
          <div className="flex justify-center  text-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-9xl">{projectCount}</h1>
            +
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
