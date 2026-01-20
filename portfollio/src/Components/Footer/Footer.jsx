import React from 'react';
import logo from "../../../public/Logo.png"
const Footer = () => {
    return (
      <div className="bg-[#0F0715]">
        <div className="container mx-auto lg:p-20 pb-0">
          <div className="flex flex-col justify-center items-center space-y-5">
            <div>
              <img className="w-20 h-20" src={logo} alt="" />
            </div>


            <div>
              <ul className="flex flex-col md:flex-row lg:space-x-3 text-white text-lg items-center">
                <li>
                  <a
                    href="#services"
                    className="relative px-0  after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="relative px-0  after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                    href="#works"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    className="relative px-0  after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                    href="#resume"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    className="relative px-0   after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="relative px-0   after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                    href="#testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="relative px-0   after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className='text-white text-xsm opacity-60 '>
                <small>&copy; 2025 All Rights Reserved By MdTouhidurZaman</small>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;