import React from 'react';
import './Banner.css'; 

import cliente from '../assets/cliente.png'; 
import cliente1 from '../assets/cliente1.png'; 
import cliente2 from '../assets/cliente2.png'; 
import cliente3 from '../assets/cliente3.png'; 
import cliente4 from '../assets/cliente4.png'; 
import cliente5 from '../assets/cliente5.png'; 
import cliente6 from '../assets/cliente6.png'; 
import cliente7 from '../assets/cliente7.png'; 
import cliente8 from '../assets/cliente8.png'; 

const marcas = [
  cliente, cliente1, cliente2, cliente3, cliente4,
  cliente5, cliente6, cliente7, cliente8
];

const Banner = () => {
  const duplicadas = [...marcas, ...marcas]; // para scroll infinito

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-6 px-4 sm:px-6">
      <div className="banner-marcas-track">
        {duplicadas.map((marca, idx) => (
          <img
            key={idx}
            src={marca}
            alt={`Logo de marca ${idx}`}
            className="w-24 sm:w-48 object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
