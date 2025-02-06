import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">Sobre a love cakes</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          
          <p>A <span className="text-red-400 font-bold">love Cakes</span> não é apenas uma confeitaria, é um pedacinho de carinho em forma de doce!</p>
          <p>
            Nossa paixão por confeitaria vai além do sabor: queremos transformar momentos simples em experiências inesquecíveis. Cada bolo, cada cookie e cada potinho de sobremesa é feito com ingredientes selecionados, muito amor e um toque especial de felicidade.
          </p>
           <p>
            <span className="text-red-400 font-bold">Nosso propósito?</span> Adoçar sua vida com receitas artesanais, cheias de sabor e afeto. Seja para presentear alguém especial, celebrar uma conquista ou simplesmente se mimar com um doce incrível, estamos aqui para tornar cada momento ainda mais doce!
             </p>
              <div className="mt-24">
                <a href="https://api.whatsapp.com/send/?phone=5561998179788&text=Oi,+vim+pelo+site!+Quero+fazer+uma+encomenda%21&type=phone_number&app_absent=0"  target={"_blank"}><Button title="Contato" /></a>
              </div>  
       </div>
       <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
      </div>
      
    </div>
  );
};

export default About;
