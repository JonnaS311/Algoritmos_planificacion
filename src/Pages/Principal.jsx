import React, { useState } from 'react';
import Tabla from '../Components/TablaDatos/Tabla';
import Boton from '../Components/Boton'
import { TablaContext } from '../Contexts/TablaDatos';
import { setAlgoritmo, setDatos,isValidTable, datosTabla } from '../Utils/Transform';
import { Link } from 'react-router-dom';

const Principal = ({children,algoritmo}) => {
    const [TablaDatos, setTablaDatos] = useState([[null,null,null,[null,null]]])
    
    const clicked = () =>{
        setDatos(TablaDatos) 
        setAlgoritmo(algoritmo)
    }

    const checked = ()=>{
        if (isValidTable(TablaDatos)) {
            return <Link to='/Grafico'> <Boton onClick={clicked}> Ejecutar Simulación</Boton></Link>
        }else{
            return <h1>Los datos son inconsitentes</h1>
        }
    }

    return (
        <div className='p-10 flex justify-center items-center flex-col'>
            <h1 className='text-indigo-700 text-3xl mb-10'>Estas dentro del Algoritmo <b>{children}</b></h1>
            <TablaContext.Provider value={{TablaDatos, setTablaDatos}}>
                <Tabla></Tabla>
            </TablaContext.Provider>
            <div className='m-10'>
                {checked()}
            </div>
        </div>
    );
};

export default Principal;