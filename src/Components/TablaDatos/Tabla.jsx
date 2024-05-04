import React, { useState } from 'react';
import Proceso from './Proceso';
import Boton from '../Boton';

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
        <div className='flex w-full'>
            <div className='w-full overflow-x-auto flex flex-col justify-item p-2 '>
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
            <div className='flex flex-col items-center justify-center w-full divide-y divide-indigo-700 divide-y-2'>
                <div className='flex '>
                    <span className='text-slate-400 text-sm'>Procesos</span>
                    <Boton onClick={addProceso}>Add Proceso</Boton>
                    <Boton onClick={removeProceso}>Remove Proceso</Boton>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 text-sm'>Bloqueos</span>
                    <Boton onClick={addBloqueo}>Add Bloqueo</Boton>
                    <Boton onClick={removeBloqueo}>Remove Bloqueo</Boton>
                </div>
            </div>
        </div>
    );
};

export default Tabla;