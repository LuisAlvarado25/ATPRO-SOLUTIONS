import React, { useState } from 'react';
import { FaSearch, FaPencilRuler, FaCogs, FaHandsHelping } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const testimonios = [
  {
    mensaje: 'Gracias a su equipo, logramos automatizar toda nuestra línea de producción. El soporte ha sido increíble desde el día uno.',
    autor: 'Juan Pérez, Gerente de Planta',
  },
  {
    mensaje: 'Su enfoque profesional y atención al detalle nos ayudó a optimizar nuestros procesos de forma efectiva.',
    autor: 'Ana Martínez, Jefa de Producción',
  },
  {
    mensaje: 'La implementación fue rápida y sin complicaciones. Totalmente recomendados.',
    autor: 'Carlos Gómez, Director Técnico',
  },
];

const Card = ({ icon, title, description }) => (
  <div className="w-full sm:w-[300px] bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center">
    <div className="text-blue-700 text-3xl mb-3">{icon}</div>
    <h4 className="text-xl font-bold mb-2 text-blue-700">{title}</h4>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Conocenos = () => {
  const [currentTestimonio, setCurrentTestimonio] = useState(0);

  const next = () => {
    setCurrentTestimonio((prev) => (prev + 1) % testimonios.length);
  };

  const prev = () => {
    setCurrentTestimonio((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <section className="bg-white text-center w-full">
      {/* Sección de Conócenos */}
      <div className="mx-auto mb-16 ">
        <h2 className="text-3xl font-bold">Conócenos</h2>
        <p className="text-gray-600 mb-4">
          Con más de 30 años en la industria, somos expertos en automatización industrial y optimización de procesos.
        </p>
        <p className="text-gray-600 mb-4">
          Por eso, nos sentimos orgullosos de poder crear soluciones integrales para ayudarte a mejorar tus resultados exponencialmente.
        </p>
        <p className="text-gray-600">
          Creamos proyectos que permitan alcanzar tus objetivos de eficiencia, además de brindarte soporte, asesoría y mantenimiento para tu equipo.
        </p>
      </div>

      {/* Sección Cómo trabajamos */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-10">¿Cómo trabajamos?</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <Card
            icon={<FaSearch />}
            title="Evaluamos"
            description="Por medio de una evaluación de tus procesos actuales identificamos áreas de mejora."
          />
          <Card
            icon={<FaPencilRuler />}
            title="Diseñamos"
            description="Nuestros técnicos colaboran con tu equipo para diseñar soluciones personalizadas que se alinean con tus objetivos y presupuesto."
          />
          <Card
            icon={<FaCogs />}
            title="Implementamos"
            description="Con un plan bien definido implementamos las soluciones elegidas, minimizando interrupciones y asegurando una transición sin problemas."
          />
          <Card
            icon={<FaHandsHelping />}
            title="Apoyamos"
            description="Brindamos soporte y mantenimiento continuos para que tus operaciones funcionen sin problemas."
          />
        </div>
      </div>

      {/* Sección Testimonios */}
      <div className="w-full  mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-10">Testimonios de clientes</h3>
        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 text-4xl text-blue-700 hover:text-blue-900 transition-colors"
          >
            <IoIosArrowBack />
          </button>

          <div className="bg-gray-100 rounded-lg p-8 shadow-md max-w-xl mx-6">
            <p className="text-gray-700 italic mb-4">“{testimonios[currentTestimonio].mensaje}”</p>
            <p className="font-semibold text-blue-700">— {testimonios[currentTestimonio].autor}</p>
          </div>

          <button
            onClick={next}
            className="absolute right-0 text-4xl text-blue-700 hover:text-blue-900 transition-colors"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Conocenos;
