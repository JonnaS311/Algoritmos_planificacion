import React, { useState } from 'react';
import Tabla from '../Components/TablaDatos/Tabla';
import Boton from '../Components/Boton'
import { TablaContext } from '../Contexts/TablaDatos';
import { setAlgoritmo, setDatos, isValidTable, cargarDatos, cantidadBloqueos } from '../Utils/Transform';
import { Link } from 'react-router-dom';

const Principal = ({ children, algoritmo }) => {
    const [TablaDatos, setTablaDatos] = useState([[null, null, null, [null, null]]])

    const clicked = () => {
        setDatos(TablaDatos)
        setAlgoritmo(algoritmo)
    }

    const checked = () => {
        if (isValidTable(TablaDatos)) {
            return <Link to='/Grafico'> <Boton onClick={clicked}> Ejecutar Simulación</Boton></Link>
        } else {
            return <h1>Los datos son inconsistentes</h1>
        }
    }

    const datos_one = () => {
        setAlgoritmo(algoritmo)
        let tablaInstrucciones = [["A", 0, 8, [3, 4], [7, 2]],
        ["B", 1, 3, [2, 5], null],
        ["C", 3, 12, [1, 3], [8, 1]],
        ["D", 5, 10, [1, 4], [2, 12]],
        ["E", 9, 11, [4, 11], null],
        ["F", 12, 9, [5, 3], [7, 4]],
        ["G", 14, 10, null, null]]
        cargarDatos(tablaInstrucciones)
        cantidadBloqueos.cant = 2
    }

    const datos_two = () => {
        setAlgoritmo(algoritmo)
        let tablaInstrucciones = [["A", 0, 6, [3, 2]],
        ["B", 1, 8, [1, 3]],
        ["C", 2, 7, [5, 1]],
        ["D", 4, 3, null],
        ["E", 6, 9, [2, 4]],
        ["F", 6, 2, null]]
        cargarDatos(tablaInstrucciones)
        cantidadBloqueos.cant = 1
    }

    return (
        <div className='p-10 flex justify-center items-center flex-col'>
            <h1 className='text-indigo-700 text-3xl mb-10'>Estas dentro del Algoritmo <b>{children}</b></h1>
            <TablaContext.Provider value={{ TablaDatos, setTablaDatos }}>
                <Tabla></Tabla>
            </TablaContext.Provider>
            <div className='m-10 flex flex-col justify-center items-center'>
                {checked()}
                <div className="m-10 max-w-64 flex flex-col justify-center items-center ">
                    <Link to='/Grafico' >
                        <Boton onClick={datos_one}>Dataset 1</Boton>
                        <Boton onClick={datos_two}>Dataset 2</Boton>
                        <Boton onClick={datos_one}>Dataset 3</Boton>
                    </Link>
                    <p className='text-[10px] text-center'>Los siguientes son conjuntos de datos precargados para no tener que estar llenando la tabla</p>
                </div> 
            </div>
        </div>
    );
};

export default Principal;