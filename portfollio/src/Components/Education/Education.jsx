import React from "react";
import { SlBadge } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col lg:flex-row justify-evenly container mx-auto lg:space-x-20">
        <div className="space-y-5">
          <div className="flex justify-between items-center space-x-10 bg-gradient-to-r from-[#8A54F7] to-[#FBF9FF] bg-clip-text text-transparent  text-6xl font-bold">
            <SlBadge className="text-[#8A54F7]"></SlBadge>
            <h1>My Experience</h1>
          </div>

          <div className="bg-[#140C1C] hover:bg-[#5A33A7] rounded-2xl px-10 py-5 space-y-3 text-white font-bold transition-all duration-300 ease-in-out cursor-default">
           
            <h1 className="text-3xl ">Fullstack Web Development</h1>
            <p className="opacity-60">React JS, Next JS, Node JS, <br />Express JS, Mongodb, Mongoose, <br />PostgreSQL, Prisma, Typescript</p>
          </div>

          <div className="bg-[#140C1C] hover:bg-[#5A33A7] rounded-2xl px-10 py-5 space-y-3 text-white font-bold transition-all duration-300 ease-in-out cursor-default">
            <h1 className="text-[#8A54F7] text-2xl ">2023</h1>
            <h1 className="text-3xl uppercase">Cyber Security Course</h1>
            <p className="opacity-80">Arena web security</p>
          </div>
          <div className="bg-[#140C1C] hover:bg-[#5A33A7] rounded-2xl px-10 py-5 space-y-3 text-white font-bold transition-all duration-300 ease-in-out cursor-default">
            <h1 className="text-[#8A54F7] text-2xl ">2025</h1>
            <h1 className="text-3xl uppercase">Internship</h1>
            <p className="opacity-80">Goinnovior ltd</p>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center space-x-10 bg-gradient-to-r from-[#8A54F7] to-[#FBF9FF] bg-clip-text text-transparent  text-6xl font-bold">
            <FaGraduationCap className="text-[#8A54F7]"></FaGraduationCap>
            <h1>My Education</h1>
          </div>

          <div className="bg-[#140C1C] hover:bg-[#5A33A7] rounded-2xl px-10 py-5 space-y-3 text-white font-bold transition-all duration-300 ease-in-out cursor-default">
            <h1 className="text-[#8A54F7] text-2xl ">2020-2025</h1>
            <h1 className="text-3xl uppercase">BSc in CSE</h1>
            <p className="opacity-80">Daffodil International University with CGPA: 3.75</p>
          </div>

          <div className="bg-[#140C1C] hover:bg-[#5A33A7] rounded-2xl px-10 py-5 space-y-3 text-white font-bold transition-all duration-300 ease-in-out cursor-default">
            <h1 className="text-[#8A54F7] text-2xl ">2019</h1>
            <h1 className="text-3xl uppercase">HSC</h1>
            <p className="opacity-80">BAF Shaheen College with GPA: 4.92</p>
          </div>

          <div className="bg-[#140C1C] hover:bg-[#5A33A7] rounded-2xl px-10 py-5 space-y-3 text-white font-bold transition-all duration-300 ease-in-out cursor-default">
            <h1 className="text-[#8A54F7] text-2xl ">2017</h1>
            <h1 className="text-3xl uppercase">SSC</h1>
            <p className="opacity-80">Satkhira Govt. High School GPA: 5.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
