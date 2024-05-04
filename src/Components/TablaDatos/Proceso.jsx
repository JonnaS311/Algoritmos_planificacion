import React from 'react';
import Input from './Input';

const Proceso = ({ bloqueos }) => {
    return (
        <tr className='bg-indigo-700'>
            <td> <Input isNumeric={false}></Input> </td>
            <td><Input isNumeric={true}></Input></td>
            <td><Input isNumeric={true}></Input></td>
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