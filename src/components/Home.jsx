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
        <h1 className="font-sans  text-5xl mt-12 text-center lg:text-start leading-tight">
          Love Cakes
        </h1>
        <p>Nosso compromisso é entregar produtos fresquinhos e irresistíveis, feitos com carinho e dedicação. Seja para um presente especial, uma festa ou simplesmente para adoçar o seu dia, a Love Cakes está aqui para tornar cada momento mais doce!</p>

        <div className=" flex flex-row gap-6">
          <a href="https://api.whatsapp.com/send/?phone=5561998179788&text=Oi,+vim+pelo+site!+Quero+fazer+uma+encomenda%21&type=phone_number&app_absent=0" target={"_blank"}><Button title="Contato" /></a>
         
         <Link to='menu'
             spy={true}
            smooth={true}
            duration={500} >
               <Button title="Nosso Menu" />
            </Link>
        </div>
      </div>

      <div className="relative ml-0 lg:ml-10">
        <img src={img} alt="img" className="w-[500px] animate-slowspin" />

      </div>
    </div>
  );
};

export default Home;
