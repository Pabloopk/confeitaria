import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import { FaInstagram } from "react-icons/fa";


const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
        Avaliações ⭐
      </h1>

    <div className=" flex flex-col items-center justify-center">
        <p className="mt-12 flex-col items-center justify-center text-center">Nossos clientes amam o sabor e o carinho dos nossos doces!</p>
        <p className="mt-2">Veja o que estão dizendo:</p>
    </div>

      <div className=" flex flex-col mt-14 lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard />
      </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="mt-12 "><span className="text-red-500 text-lg">
            🔔Quer aparecer aqui?</span> </p> 
            <p className="flex items-center justify-between">Nos marque no instagram:
              <a href="https://www.instagram.com/lovecakess____/" target={"_blank"} className="ml-3" >
                  <FaInstagram/>
              </a>
            </p>
          <p className="mt-2 text-center">Compartilhe seu momento doce conosco!🍰🍰🥰</p>     
        </div>
    </div>
  );
};

export default Review;
