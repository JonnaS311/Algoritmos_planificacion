import React, { useState } from 'react';
import Boton from './Boton';
import Informacion from './Informacion';
import TablaInfo from './TablaInfo';
import Estadisticas from './Estadisticas';

const Descripcion = ({datosTabla,est}) => {
    const [cambio, setCambio] = useState(true)

    const cambiarEstado = ()=>{
        setCambio(!cambio)
      }

    return (
        <div>
            <div className='flex  justify-center items-center'>
            <Informacion></Informacion>
            {cambio && (
              <Estadisticas data={est}></Estadisticas>  
            )}
            {!cambio && (
              <TablaInfo data={datosTabla}></TablaInfo> 
            )}     
          </div>
          <div className='w-full flex justify-center items-center'>
              <Boton onClick={cambiarEstado}>Cambiar Tabla</Boton>
          </div>
        </div>
    );
};

export default Descripcion;