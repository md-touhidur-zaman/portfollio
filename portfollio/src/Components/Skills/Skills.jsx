import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb, SiMongoose, SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = () => {
    return (
      <div id='skills' className="container mx-auto px-2 md:px-0 py-20 ">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="bg-gradient-to-r from-[#8A54F7] to-[#FBF9FF] bg-clip-text text-transparent text-6xl font-bold">
            My Skills
          </h1>
          <p className="text-[#DDDDDD] text-xl text-center">
            I put your ideas and thus your wishes to develop of a unique website{" "}
            <br />
            that inspires you and you customers.
          </p>
        </div>

        <div className="container mx-auto mt-10">
          <div className="flex flex-col md:flex-row justify-center lg:space-x-20 space-y-5">
            <div className="bg-[#2A1453] w-full max-h-40 border-2 border-[#0F0715] shadow-[#0F0715] p-10 hover:opacity-60 transition-all duration-300 ease-in-out rounded-3xl flex flex-col justify-center items-center space-y-2">
              <RiReactjsFill className="text-7xl text-[#58C4DC]"></RiReactjsFill>
              <h1 className="text-xl font-bold text-[#8750F7]">React JS</h1>
            </div>

            <div className="bg-[#2A1453] w-full max-h-40 border-2 border-[#0F0715] shadow-[#0F0715] p-10 hover:opacity-60 transition-all duration-300 ease-in-out rounded-3xl flex flex-col justify-center items-center space-y-2">
              <SiNextdotjs className="text-7xl text-[#58C4DC]"></SiNextdotjs>
              <h1 className="text-xl font-bold text-[#8750F7]">Next JS</h1>
            </div>


             <div className="bg-[#2A1453] w-full max-h-40 border-2 border-[#0F0715] shadow-[#0F0715] p-10 hover:opacity-60 transition-all duration-300 ease-in-out rounded-3xl flex flex-col justify-center items-center space-y-2">
              <SiExpress className="text-7xl text-white"></SiExpress>
              <h1 className="text-xl font-bold text-[#8750F7]">Express JS</h1>
            </div>

            

            <div className="bg-[#2A1453] w-full max-h-40 border-2 border-[#0F0715] shadow-[#0F0715] p-10 hover:opacity-60 transition-all duration-300 ease-in-out rounded-3xl flex flex-col justify-center items-center space-y-2">
              <FaNodeJs className="text-7xl text-[#1D3E24]"></FaNodeJs>
              <h1 className="text-xl font-bold text-[#8750F7]">Node JS</h1>
            </div>

            <div className="bg-[#2A1453] w-full max-h-40 border-2 border-[#0F0715] shadow-[#0F0715] p-10 hover:opacity-60 transition-all duration-300 ease-in-out rounded-3xl flex flex-col justify-center items-center space-y-2 ">
              <SiMongodb className="text-7xl text-[#00684A]"></SiMongodb>
              <h1 className="text-xl font-bold text-[#8750F7]">Mongo DB</h1>
            </div>

            <div className="bg-[#2A1453] w-full max-h-40 border-2 border-[#0F0715] shadow-[#0F0715] p-10 hover:opacity-60 transition-all duration-300 ease-in-out rounded-3xl flex flex-col justify-center items-center space-y-2 ">
              <SiMongoose  className="text-7xl text-[#00684A]"></SiMongoose >
              <h1 className="text-xl font-bold text-[#8750F7]">Mongoose</h1>
            </div>

           
          </div>
        </div>
      </div>
    );
};

export default Skills;