import React from 'react';
import Input from './Input';
import { useTablaContext } from '../../Contexts/TablaDatos';

const Bloqueo = ({ id, numberBlock }) => {

    const { TablaDatos, setTablaDatos } = useTablaContext()

    const addBloqueo = (e) => {
        let posicion = parseInt(e.target.attributes.name.nodeValue)
        TablaDatos[id][numberBlock + 3][posicion] = parseInt(e.target.value)
        setTablaDatos(Array.from(TablaDatos))
    }
    return (
        <div key={id} className='flex'>
            <Input isNumeric={true} onChange={addBloqueo} nombre={'0'} placeholder={'llegada'}></Input>
            <Input isNumeric={true} onChange={addBloqueo} nombre={'1'} placeholder={'duración'}></Input>
        </div>
    );
};

export default Bloqueo;