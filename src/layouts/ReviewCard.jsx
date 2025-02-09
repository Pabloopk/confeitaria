import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import img1 from "../assets/img/Sandy.png";
import img2 from "../assets/img/darius.png";
import img3 from "../assets/img/dev.png";
// import img4 from "../assets/img/pic4.png";

const reviews = [
  {
    id: 2,
    img: img2,
    title: "Dariane Martins",
    text: "Nunca comi cookies tão deliciosos! Crocantes por fora e macios por dentro! Foi o melhor!",
  },
  {
    id: 1,
    img: img1,
    title: "Sandy Oliveira",
    text: "Os bolos no pote são o meu vício! Recomendo muito!! É como um abraço doce a cada colherada!",
  },
  
  {
    id: 3,
    img: img3,
    title: "Pablo Nunes",
    text: "Além dos doces maravilhosos, o atendimento é impecável! Recomendo demais!",
  },
  // {
  //   id: 4,
  //   img: img4,
  //   title: "Ana Pereira",
  //   text: "Muito satisfeito com o atendimento!",
  // },
];

const ReviewCard = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1} // Exibir 1 avaliação por slide em telas pequenas
      breakpoints={{
        768: {
          slidesPerView: 2, // Exibir 2 avaliações por slide em telas a partir de 768px
        },
      }}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-full lg:w-4/6"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div className="flex flex-col bg-white p-5 rounded-lg shadow-md gap-5">
            <div className="flex flex-row items-center">
              <div className="w-1/4">
                <img className="w-full h-full rounded-full object-cover" src={review.img} alt={review.title} />
              </div>
              <div className="mx-3">
                <h2 className="font-semibold text-lg">{review.title}</h2>
                <div className="flex">
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarHalf className="text-yellow-500" />
                </div>
              </div>
              <span className="ml-auto">
                <FaQuoteRight className="text-gray-400" size={42} />
              </span>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCard;
