import React from 'react';
import Tabla from '../Components/TablaDatos/Tabla';
import Boton from '../Components/Boton'

const Principal = ({children}) => {
    return (
        <div className='p-10 flex justify-center items-center flex-col'>
            <h1 className='text-indigo-700 text-3xl mb-10'>Estas dentro del Algoritmo <b>{children}</b></h1>
            <Tabla bloqueos={[1,2,3,4]}></Tabla>
            <div className='m-10'>
                <Boton>Ejecutar Simulación</Boton>
            </div>
           
        </div>
    );
};

export default Principal;