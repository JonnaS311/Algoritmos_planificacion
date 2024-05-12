import React from 'react';

const Estadisticas = ({data}) => {
    console.log(data)
    return (
        <div className='my-2'>
            <table className='border-2 border-indigo-600'>
                <thead className='bg-indigo-900 text-white'>
                    <tr>
                        <th className='border-2 border-indigo-600 px-2'>
                            Nombre
                        </th>
                        <th className='border-2 border-indigo-600 px-2'>
                            retorno
                        </th >
                        <th className='border-2 border-indigo-600 px-2'>
                            tiempo perdido
                        </th>
                        <th className='border-2 border-indigo-600 px-2'>
                            tiempo de espera
                        </th>
                        <th className='border-2 border-indigo-600 px-2'>
                            penalidad
                        </th>
                        <th className='border-2 border-indigo-600 px-2'>
                            tiempo de respuesta
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value)=>{
                        return(
                            <tr className='border-2 border-indigo-600 px-2'>
                                {value.map((valor)=>{
                                    return(
                                        <td className='border-2 border-indigo-600 px-2'>{valor}</td>
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

export default Estadisticas;