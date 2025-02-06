import React from "react";
import img from "../assets/img/home.png";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center 
    lg:flex-row lg:justify-between items-center lg:px-32 px-5 
    gap-10 bg-gradient-to-r from-[#fff] to-[#eb8fc8] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl xs:mt-12 text-center lg:text-start leading-tight">
          Love Cakes
        </h1>
        <p>
         O projeto modelo para clientes de ramos alimentícios foi desenvolvido com o objetivo de proporcionar aos empreendedores deste setor uma solução prática e eficiente para terem seus primeiros sites.
        </p>

        <div className=" flex flex-row gap-6">
          <a href="https://api.whatsapp.com/send/?phone=5561992295015&text=Quero+iniciar+um+projeto%21&type=phone_number&app_absent=0 " target={"_blank"}><Button title="Contato" /></a>
         
         <Link to='menu'
             spy={true}
            smooth={true}
            duration={500} >
               <Button title="Nosso Menu" />
            </Link>
        </div>
      </div>

      <div className="relative">
        <img src={img} alt="img" />

        <div className=" absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <h2 className=" font-semibold">14K</h2>
        </div>

        <div className=" absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
          <h2 className=" font-semibold">Cappuccino</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
