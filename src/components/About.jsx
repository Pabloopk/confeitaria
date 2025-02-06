import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">Sobre Nós</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            Sobre o Projeto
          </h2>
          <p>
            Com um design intuitivo e funcional, o projeto busca atender às necessidades básicas de presença online, permitindo que pequenos negócios apresentem seus produtos, menus e informações essenciais de forma profissional e acessível.
          </p>
          <p>
            Um site de bolos no pote deve ser atraente, intuitivo e funcional, destacando a variedade de sabores,
             ingredientes de qualidade e a praticidade do produto. Além de um design moderno e imagens apetitosas, 
             é essencial que o site ofereça uma experiência fácil de navegação, permitindo que os clientes conheçam os produtos, 
             personalizem pedidos e realizem compras online de forma rápida e segura. Informações sobre ingredientes, embalagens 
             e opções de entrega podem agregar valor à experiência do usuário, aumentando a confiança na marca. Além disso,
             integrar um blog com receitas, dicas e novidades pode fortalecer a identidade do negócio e atrair mais clientes.
          </p>
           <p>
            Um site de bolos no pote deve ser atraente, intuitivo e funcional, destacando a variedade de sabores,
             ingredientes de qualidade e a praticidade do produto. Além de um design moderno e imagens apetitosas, 
             é essencial que o site ofereça uma experiência fácil de navegação, permitindo que os clientes conheçam os produtos, 
             personalizem pedidos e realizem compras online de forma rápida e segura. Informações sobre ingredientes, embalagens 
             e opções de entrega podem agregar valor à experiência do usuário, aumentando a confiança na marca. Além disso,
             integrar um blog com receitas, dicas e novidades pode fortalecer a identidade do negócio e atrair mais clientes.
          </p>

         <a href="https://api.whatsapp.com/send/?phone=5561992295015&text=Quero+iniciar+um+projeto%21&type=phone_number&app_absent=0 " target={"_blank"}><Button title="Contato" /></a>
        </div>
      </div>
    </div>
  );
};

export default About;
