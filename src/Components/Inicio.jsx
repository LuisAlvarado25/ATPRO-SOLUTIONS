import React from 'react';
import BannerMarcas from './Banner';
import './Inicio.css';
import ico1 from '../assets/icos_1.svg'; 
import ico2 from '../assets/icos_2.svg'; 
import ico3 from '../assets/icos_3.svg'; 
const Inicio = () => {
  return (
    <main className="bg-gray-100">
      <BannerMarcas />

      <section className="inicio text-center">
        <h2 className="text-3xl font-bold text-gray-800 ">
          Expertos en Automatización Industrial
        </h2>
        <p>
          Conoce nuestras áreas de especialidad y servicios especializados para potenciar tus procesos.
        </p>
      </section>

      <section className="tarjetas w-full py-12 ">
        <div className="mx-auto flex justify-center flex-wrap gap-6">
          
          {/* Tarjeta 1 */}
          <div className="w-80 bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex justify-center">
              <img
                src={ico1}
                alt="Icono Ingeniería"
                className="w-16 h-16 "
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Proyectos de Ingeniería</h3>
            <p className="text-gray-600">
              Damos vida a tu visión de automatización a través de soluciones meticulosamente diseñadas.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="w-80 bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex justify-center">
              <img
                src={ico2}
                alt="Icono Asesoría"
                className="w-16 h-16 bg-blue-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Asesoría Técnica</h3>
            <p className="text-gray-600">
              Te brindamos soporte técnico respaldado por experiencia para revolucionar procesos productivos.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="w-80 bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex justify-center">
              <img
                src= {ico3}
                alt="Icono Danfoss"
                className="w-16 h-16 bg-blue-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Centro de Servicio y Reparación Autorizado Danfoss</h3>
            <p className="text-gray-600">
              Expertos listos para todas tus necesidades de variadores de velocidad Danfoss.
            </p>
          </div>

        </div>
      </section>
        <section className="tarjetas w-full py-12 ">
        <div className="mx-auto flex justify-center flex-wrap gap-6">
          
          {/* Tarjeta 1 */}
          <div className="w-80 bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex justify-center">
              <img
                src={ico1}
                alt="Icono Ingeniería"
                className="w-16 h-16 "
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Proyectos de Ingeniería</h3>
            <p className="text-gray-600">
              Damos vida a tu visión de automatización a través de soluciones meticulosamente diseñadas.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="w-80 bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex justify-center">
              <img
                src={ico2}
                alt="Icono Asesoría"
                className="w-16 h-16 bg-blue-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Asesoría Técnica</h3>
            <p className="text-gray-600">
              Te brindamos soporte técnico respaldado por experiencia para revolucionar procesos productivos.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="w-80 bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4 flex justify-center">
              <img
                src= {ico3}
                alt="Icono Danfoss"
                className="w-16 h-16 bg-blue-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Centro de Servicio y Reparación Autorizado Danfoss</h3>
            <p className="text-gray-600">
              Expertos listos para todas tus necesidades de variadores de velocidad Danfoss.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Inicio;
