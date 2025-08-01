import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const BotonWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5214777210130" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-50"
    >
      <FaWhatsapp className="w-20 h-20" />
    </a>
  );
};

export default BotonWhatsApp;
