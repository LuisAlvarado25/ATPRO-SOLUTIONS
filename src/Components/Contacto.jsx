import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="h-full py-12 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Contáctanos</h2>

      {/* Tarjetas */}
      <div className="Cards flex flex-col md:flex-row justify-center gap-70 ">
        {/* Ubícanos con link a Google Maps */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=San+Francisco+de+Asís+2096+Local+2+Col+Misión+de+San+José+León+Gto"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 h-64 bg-gray-100 rounded-xl shadow-md p-6 text-center flex flex-col items-center justify-center hover:bg-red-100 transition duration-200"
        >
          <FaMapMarkerAlt className="text-red-600 w-8 h-8 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ubícanos</h3>
          <p className="text-gray-700">
            San Francisco de Asís #2096<br />
            Local 2, Col. Misión de San José<br />
            León, Gto.
          </p>
        </a>

        {/* Llámanos (WhatsApp) */}
        <a
          href="https://wa.me/524777210130"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 h-64 bg-gray-100 rounded-xl shadow-md p-6 text-center flex flex-col items-center justify-center hover:bg-green-100 transition duration-200"
        >
          <FaPhoneAlt className="text-green-600 w-8 h-8 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Llámanos</h3>
          <p className="text-gray-700 underline">477 721 0130</p>
        </a>

        {/* Escríbenos (correo) */}
        <a
          href="mailto:contacto@tuempresa.com"
          className="w-72 h-64 bg-gray-100 rounded-xl shadow-md p-6 text-center flex flex-col items-center justify-center hover:bg-blue-100 transition duration-200"
        >
          <FaEnvelope className="text-blue-600 w-8 h-8 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Escríbenos</h3>
          <p className="text-gray-700 underline">contacto@tuempresa.com</p>
        </a>
      </div>

      {/* Mapa */}
      <div className="Mapa flex justify-center">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0961132077723!2d-101.655!3d21.095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b7304b8d8d3cf%3A0x6d0f72d3deaa!2sSan%20Francisco%20de%20As%C3%ADs%202096%2C%20Misi%C3%B3n%20de%20San%20Jos%C3%A9%2C%2037668%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1693357102172!5m2!1ses-419!2smx"
          width="800"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </section>
  );
};

export default Contacto;
