import React, { useState } from "react";
import { Link } from "react-scroll";
import love from "../../public/LoveCakes.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className=" flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r 
        from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer gap-2">
            <img src={love} alt="LoveCakes" className="w-10" />
            <h1 className=" text-xl font-semibold">love cakes</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              spy={true}
              smooth={true}
              duration={500}
               to="home"
              className="group relative inline-block cursor-pointer hover:text-pink-500"
            >
              Início
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 
              origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-pink-700"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-pink-900"
            >
              Sobre
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

           

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-pink-50"
            >
              Avaliações
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>

          <div className=" hidden text-2xl lg:flex">
              <a href="https://api.whatsapp.com/send/?phone=5561998179788&text=Oi,+vim+pelo+site!+Quero+fazer+uma+encomenda%21&type=phone_number&app_absent=0" target={"_blank"}><FaWhatsapp className="rounded-full text-2xl text-white bg-green-500"/></a>
              
              <a href="https://www.instagram.com/lovecakess___/" target={"_blank"}><FaInstagram className="rounded-md text-2xl ml-3 text-pink-700 bg-white"/></a>
          </div>

          <div className="md:hidden flex text-[#621d14] items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[#621d14]/75 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Início
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>

            

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Sobre
          </Link>
        
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Avaliações	
          </Link>

          <div className="flex items-center justify-center text-2xl lg:flex">
              <a href="https://api.whatsapp.com/send/?phone=5561998179788&text=Oi,+vim+pelo+site!+Quero+fazer+uma+encomenda%21&type=phone_number&app_absent=0" target={"_blank"}><FaWhatsapp className="rounded-full text-2xl text-white bg-green-500"/></a>

              <a href="https://www.instagram.com/lovecakess___/" target={"_blank"}><FaInstagram className="rounded-md text-2xl ml-3 text-pink-700 bg-white"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
