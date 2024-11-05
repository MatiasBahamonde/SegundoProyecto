import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a Matias Store</h1>
        <p className="text-lg text-gray-600">¡Descubre la pasión del fútbol con nuestra exclusiva colección de camisetas de tus equipos favoritos! te ofrecemos una amplia gama de camisetas de fútbol 2024</p>
      </header>
      
      
      
      <div className="w-full max-w-2xl mb-40">
        <img
          src="/public/futboll.png.png" 
          alt="Imagen destacada"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;