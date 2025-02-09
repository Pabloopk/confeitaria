// import React from "react";

// const GoogleMap = () => {
//   return (
//     <div className="flex flex-col justify-center items-center lg:mb-10">
        
//       <iframe
//         title="Google Map"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246114.8676405946!2d-47.183121894880294!3d-15.455100264918585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350e82d2198ca6d%3A0x8a0bda5ac04f74dc!2sBezerra%2C%20Formosa%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1739112280056!5m2!1spt-BR!2sbr"
//         width="600"
//         height="450"
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         className="rounded-lg shadow-lg"
//       ></iframe>
//       <div className="mt-4 mb-4" >
//             <p>Bezerra-GO</p>
//             <p className="mt-3">Sem Taxa de Entrega!</p>
//         </div>
//     </div>
//   );
// };

// export default GoogleMap;
import React from "react";

const GoogleMap = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246114.8676405946!2d-47.183121894880294!3d-15.455100264918585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350e82d2198ca6d%3A0x8a0bda5ac04f74dc!2sBezerra%2C%20Formosa%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1739112280056!5m2!1spt-BR!2sbr"
        width="300"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">📍 Bezerra, GO</p>
        <p className="mt-2 text-green-600 font-bold">✅ Sem Taxa de Entrega!</p>
      </div>
    </div>
  );
};

export default GoogleMap;
