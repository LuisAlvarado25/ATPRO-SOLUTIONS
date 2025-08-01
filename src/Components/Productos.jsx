import React from 'react';
import BannerMarcas from './Banner';

const Productos = () => {
  return (
    <section id="productos">
       <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Página en Mantenimiento</h1>
      <p className="text-gray-700 text-lg">
        Lo sentimos, la sección de <strong>Productos</strong> está temporalmente fuera de servicio. 
        Estamos trabajando para mejorarla.  
      </p>
    </main>
    </section>
  );
};

export default Productos;