import './App.css';
import gansoarce from './imagenes/gansoarce.png'
import waltercabral from './imagenes/waltercabral.png'
import React, { useState, useEffect } from 'react';

function App() {
  const [showImage, setShowImage] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Función para generar una posición aleatoria dentro de la ventana
  const getRandomPosition = () => {
    const top = Math.random() * (window.innerHeight - 200); // Ajusta el tamaño si es necesario
    const left = Math.random() * (window.innerWidth - 200); // Ajusta el tamaño si es necesario
    return { top, left };
  };

  // Mostrar la imagen después de 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition(getRandomPosition());
      setShowImage(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Manejador de clic para cambiar la posición de la imagen
  const handleImageClick = () => {
    setPosition(getRandomPosition());
  };
  
  return (
    <div className="App">
      <div className='gansoarce-contenedor'>
      <img
        src={gansoarce}
        className='gansoarce-imagen'
        alt='gansoarce'/>
      </div>
      <div
        className="waltercabral-imagen"
        style={{
          display: showImage ? 'block' : 'none',
          position: 'absolute',
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: '100px', // Ajusta el tamaño si es necesario
          height: '100px' // Ajusta el tamaño si es necesario
        }}
        onClick={handleImageClick}
      >
        <img 
          src={waltercabral} 
          alt="Walter Cabral" />
      </div>
    </div>
  );
}

export default App;
