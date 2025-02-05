import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#fff] to-[#eb8fc8] text-black rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">CafePulse</h1>
          <p className=" text-sm">
            Welcome to our coffee haven! Explore our aromatic brews, savor
            artisanal flavors, and discover the perfect roast to elevate your
            daily ritual.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <Link
            spy={true}
            smooth={true}
            duration={500}
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              to="menu"
            >
              Menu
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              to="about"
            >
              Sobre
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-backgroundColor transition-all cursor-pointer"
             to="products"
            >
              Produtos
            </Link>
           
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Cappuccino
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Latte
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Americano
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              CafePulse@email.com
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="https://api.whatsapp.com/send/?phone=5561992295015&text=Quero+iniciar+um+projeto%21&type=phone_number&app_absent=0"
              target="_blank"
            >
              61 9 9229 5015
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright Desenvolvido por
            <span className=" text-blue-700">
              {" "}
              <a href="https://desenvolvedorpablo.vercel.app" target={"_blank"}>Pablo Nunes</a>{" "}
            </span>
            | Todos Direitos Reservados
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
