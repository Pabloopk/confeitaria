import React from "react";
import img1 from "../assets/img/5.png";
import img2 from "../assets/img/33.png";
import img3 from "../assets/img/1.png";
import img4 from "../assets/img/2.png";
import img5 from "../assets/img/6.png";
import img6 from "../assets/img/4.png";
import MenuCard from "../layouts/MenuCard";


const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Bolos no Pote
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} value="R$10,00" title="Coco com Abacaxi" />
        <MenuCard img={img2}  value="R$10,00" title="Prestígio" />
        <MenuCard img={img3} value="R$10,00" title="Beijinho"/>
        <MenuCard img={img4} value="R$10,00" title="Brigadeiro"/>
        <MenuCard img={img5} value="R$10,00" title="Leite Ninho"/>
        <MenuCard img={img6} value="R$10,00" title="Cenoura com Chocolate"/>
      </div>
      <div className="mt-24 flex items-center justify-center ">
        <a href="https://api.whatsapp.com/send/?phone=5561998179788&text=Oi,+vim+pelo+site!+Quero+fazer+uma+encomenda%21&type=phone_number&app_absent=0"  target={"_blank"}
        className="bg-green-500 hover:bg-pink-400 rounded-3xl p-2 text-slate-200 transition-all duration-300">
          Encomendar
        </a>
      </div>  
    </div>
  );
};

export default Menu;
