import React from 'react';
import { cantidadBloqueos } from '../Utils/Transform';

const TablaInfo = ({ data }) => {
    console.log(data)
    console.log(cantidadBloqueos.cant)
    return (
        <div>
            <table className='border-2 border-indigo-600'>
                <thead className='bg-indigo-900 text-white'>
                    <tr>
                        <th className='border-2 border-indigo-600 px-2'>
                            Nombre
                        </th>
                        <th className='border-2 border-indigo-600 px-2'>
                            Llegada
                        </th>
                        <th className='border-2 border-indigo-600 px-2'>
                            Duracion
                        </th>
                        {[...Array(cantidadBloqueos.cant)].map((value, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <th className='border-2 border-indigo-600 px-2'>
                                        Bloqueo Llegada
                                    </th>
                                    <th className='border-2 border-indigo-600 px-2'>
                                        Bloqueo Duración
                                    </th>
                                </React.Fragment>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((value) => {
                        return (
                            <tr className='border-2 border-indigo-600 px-2 text-center'>
                                {value.map((valor, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {!Array.isArray(valor) ? <td className='border-2 border-indigo-600 px-2 text-center' key={index}>{valor}</td> : valor.map((bloqueo) => {
                                                return (
                                                    <td className='border-2 border-indigo-600 px-2 text-center' key={index}>{bloqueo}</td>
                                                )
                                            })}
                                        </React.Fragment>
                                    )
                                })}

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TablaInfo;