import React, { useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { algoritmo, datosTabla, maxValue, normalizar } from '../Utils/Transform';
import { options } from '../Utils/GraphicConfig';
import { setterEstado } from '../Utils/Algoritmos';
import { setterEstadoRR } from '../Utils/RR';
import Descripcion from '../Components/Descripcion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Graphic = () => {
  const dataset = useRef([[]])
  const estadistica = useRef([[]])
  let quantum = 1

  if (algoritmo !== "" && algoritmo !=="RR") {
    const [output, estadisticas] = setterEstado(datosTabla, algoritmo)
    dataset.current = normalizar(output)  
    estadistica.current = estadisticas
    options.scales.x.max = maxValue
  }else if(algoritmo === "RR"){
    quantum = parseInt(prompt("ingrese el quantum"))
    const [output, estadisticas] = setterEstadoRR(datosTabla, quantum)
    console.log(output)
    dataset.current = normalizar(output)  
    estadistica.current = estadisticas
    options.scales.x.max = maxValue
  }


  return (
    <div>
      {algoritmo !== "" && (
        <div className='relative w-full h-64'>
          <h1 className='text-center m-2 text-2xl'>Resultado ({algoritmo})</h1>
          <div className='flex flex-col h-72 m-4 overflow-auto'>
            {dataset.current.length > 0 && dataset.current.map((value, key) => (
              <div className='h-16' key={key}>
                <Bar options={options} data={value} />
              </div>
            ))}
          </div>
            <Descripcion datosTabla={datosTabla} est={estadistica.current}></Descripcion>
        </div>
      )}
      {algoritmo === "" && (
        <div className='flex flex-col justify-center items-center h-64 text-2xl'>
          <span>No se ha especificado algun algoritmo...</span>
          <span>😢</span>
        </div>
      )}
    </div>
  );
};

export default Graphic;