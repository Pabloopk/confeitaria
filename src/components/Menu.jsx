import React from "react";
import img1 from "../assets/img/menu1.png";
import img2 from "../assets/img/menu2.png";
import img3 from "../assets/img/menu3.png";
import img4 from "../assets/img/menu4.png";
import img5 from "../assets/img/menu5.png";
import img6 from "../assets/img/menu6.png";
import MenuCard from "../layouts/MenuCard";
import Button from "../layouts/Button";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Bolos no Pote
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} value="R$10,00" />
        <MenuCard img={img2}  value="R$10,00" />
        <MenuCard img={img3} value="R$10,00"/>
        <MenuCard img={img4} value="R$10,00"/>
        <MenuCard img={img5} value="R$10,00"/>
        <MenuCard img={img6} value="R$10,00"/>
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
