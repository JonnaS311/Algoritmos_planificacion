import React from 'react';
import Tabla from '../Components/TablaDatos/Tabla';

const Principal = ({informacion}) => {
    return (
        <div>
            <h1 className='text-indigo-700'>Estas dentro del Algoritmo: {informacion}</h1>
            <Tabla bloqueos={[1,2,3,4]}></Tabla>
            <button>Ejecutar Simulación</button>
        </div>
    );
};

export default Principal;