import React, { useState } from 'react';
import Proceso from './Proceso';

const Tabla = ({ bloqueos, procesos }) => {
    const [cantProcesos, setCantProcesos] = useState(1)
    const [cantBloqueos, setCantBloqueos] = useState(4)

    const addProceso = (e) => {
        setCantProcesos(cantProcesos + 1)
    }

    const removeProceso = (e) => {
        if (cantProcesos > 1) {
            setCantProcesos(cantProcesos - 1)
        }

    }

    const addBloqueo = (e) => {
        setCantBloqueos(cantBloqueos + 1)
    }

    const removeBloqueo = (e) => {
        if (cantBloqueos > 1) {
            setCantBloqueos(cantBloqueos - 1)
        }

    }

    return (
        <div className='flex'>
            <div className='w-1/2 overflow-x-auto flex flex-col justify-item'>
                <table className='px-0 mx-0'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Llegada</th>
                            <th>Duración</th>
                            {[...Array(cantBloqueos)].map((valor, index) => {
                                return (
                                    <th>Bloqueo {index + 1}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(cantProcesos)].map((value, index) => {
                            return (
                                <Proceso bloqueos={cantBloqueos}></Proceso>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col'>
                <button onClick={addProceso}>Add Proceso</button>
                <button onClick={removeProceso}>Remove Proceso</button>
                <button onClick={addBloqueo}>Add Bloqueo</button>
                <button onClick={removeBloqueo}>Remove Bloqueo</button>
            </div>
        </div>
    );
};

export default Tabla;