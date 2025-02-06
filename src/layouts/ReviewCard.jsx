// import React from "react";
// import { FaQuoteRight } from "react-icons/fa";
// import { BsStarHalf } from "react-icons/bs";
// import { BsStarFill } from "react-icons/bs";

// const ReviewCard = (props) => {
//   return (
//     <div className=" flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
//       <div className=" flex flex-row items-center lg:justify-start justify-center">
//         <div className="w-1/4">
//           <img className=" rounded-full" src={props.img} alt="img" />
//         </div>
//         <div className=" mx-3">
//           <h2 className=" font-semibold text-lg">{props.title}</h2>
//           <div className=" flex">
//             <BsStarFill className=" text-brightColor" />
//             <BsStarFill className=" text-brightColor" />
//             <BsStarFill className=" text-brightColor" />
//             <BsStarFill className=" text-brightColor" />
//             <BsStarHalf className=" text-brightColor" />
//           </div>
//         </div>
//         <span className=" ml-16">
//           <FaQuoteRight className=" text-backgroundColor" size={42} />
//         </span>
//       </div>
//       <p>
//         {props.text}
//       </p>
//     </div>
//   );
// };

// export default ReviewCard;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaQuoteRight } from "react-icons/fa";
// import { BsStarHalf, BsStarFill } from "react-icons/bs";
// import img1 from "../assets/img/pic1.png";
// import img2 from "../assets/img/pic2.png";
// import img3 from "../assets/img/pic3.png";

// const reviews = [
//   {
//     id: 1,
//     img: img1,
//     title: "João Silva",
//     text: "Ótima experiência, atendimento excelente!",
//   },
//   {
//     id: 2,
//     img: img2,
//     title: "Maria Souza",
//     text: "Adorei o serviço, super recomendo!",
//   },
//   {
//     id: 3,
//     img: img3,
//     title: "Carlos Lima",
//     text: "Serviço impecável e entrega rápida!",
//   },
// ];

// const ReviewCard = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={30}
//       slidesPerView={1}
//       navigation={false}
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }}
//       className="w-full lg:w-2/6"
//     >
//       {reviews.map((review) => (
//         <SwiperSlide key={review.id}>
//           <div className="flex flex-col bg-white p-5 rounded-lg shadow-md gap-5">
//             <div className="flex flex-row items-center">
//               <div className="w-1/4">
//                 <img className="rounded-full" src={review.img} alt="img" />
//               </div>
//               <div className="mx-3">
//                 <h2 className="font-semibold text-lg">{review.title}</h2>
//                 <div className="flex">
//                   <BsStarFill className="text-yellow-500" />
//                   <BsStarFill className="text-yellow-500" />
//                   <BsStarFill className="text-yellow-500" />
//                   <BsStarFill className="text-yellow-500" />
//                   <BsStarHalf className="text-yellow-500" />
//                 </div>
//               </div>
//               <span className="ml-auto">
//                 <FaQuoteRight className="text-gray-400" size={42} />
//               </span>
//             </div>
//             <p className="text-gray-700">{review.text}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ReviewCard;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";
// import img4 from "../assets/img/pic4.png";

const reviews = [
  {
    id: 1,
    img: img1,
    title: "João Silva",
    text: "Ótima experiência, atendimento excelente!",
  },
  {
    id: 2,
    img: img2,
    title: "Maria Souza",
    text: "Adorei o serviço, super recomendo!",
  },
  {
    id: 3,
    img: img3,
    title: "Carlos Lima",
    text: "Serviço impecável e entrega rápida!",
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
