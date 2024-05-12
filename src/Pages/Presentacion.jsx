import React from 'react';

const Presentacion = () => {
    return (
        <div className='flex justify-center items-center h-96 flex-col'>
            <h1 className='text-2xl'>Bienvenido a nuestro simulador de algoritmos de planificación</h1>
            <span className='text-4xl'>⏱️</span>
            <footer className='fixed bottom-0 bg-indigo-700 fondo-animado text-white w-full drop-shadow-2xl'>
                <div className='flex p-2 text-sm'>
                    <p className='text-center px-2'>Jonnathan Sotelo Rodríguez - 20202020040 </p>
                    <p className='text-center px-2'>Danna Sofia Villanueva Orjuela- 20202020038 </p>
                    <p className='text-center px-2'>Cristian Fabian Agudelo Bermudez- 20201020100 </p>
                    <p className='text-center px-2'>Daniel Mateo Montoya González - 20202020098 </p>
                </div>
            </footer>
        </div>
    );
};

export default Presentacion;