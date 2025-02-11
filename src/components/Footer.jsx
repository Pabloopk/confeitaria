import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#fff] to-[#eb8fc8] text-black rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">LoveCakes</h1>
          <p className=" text-sm">
            Com receitas exclusivas e uma apresentação encantadora, nossos bolos e cookies são perfeitos para qualquer ocasião – seja um presente especial ou um mimo para você mesmo! 
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
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contato</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="https://www.instagram.com/lovecakess___/" target={"_blank"}
            >
              lovecakess__
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="https://api.whatsapp.com/send/?phone=5561998179788&text=Oi,+vim+pelo+site!+Quero+fazer+uma+encomenda%21&type=phone_number&app_absent=0"
              target="_blank"
            >
              61 99817-9788
            </a>
            
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            &copy;  {new Date().getFullYear()} Desenvolvido por
            <span className=" text-blue-700">
              {" "}
              <a href="https://desenvolvedorpablo.vercel.app" target={"_blank"}>Pablo Nunes</a>{" "}
            </span>
            | Todos Direitos Reservados.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
