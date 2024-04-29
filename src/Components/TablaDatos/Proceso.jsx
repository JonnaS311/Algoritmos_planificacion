import React from 'react';
import Input from './Input';

const Proceso = ({ bloqueos }) => {
    return (
        <tr>
            <td> <input type="text" className='h-8 border-solid border-2 border-indigo-700 text-center' /> </td>
            <td><Input></Input></td>
            <td><Input></Input></td>
            {[...Array(bloqueos)].map((valor, index) => {
                return (
                    <td key={index}>
                        <div className='flex'>
                            <Input></Input>
                            <Input></Input>
                        </div>
                    </td>
                )
            })}
        </tr>
    );
};

export default Proceso;