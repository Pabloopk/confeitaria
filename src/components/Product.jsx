import React from "react";
import img1 from "../assets/img/bis.png";
import img2 from "../assets/img/vul.png";


import ProductCard from "../layouts/ProductCard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Especiais
      </h1>

      <div className=" flex flex-col lg:flex-row gap-12 justify-center">
        <ProductCard img={img1} title="Cookies" />
        <ProductCard img={img2} title="Bolo Vulcão" />
    
        
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

export default Product;
