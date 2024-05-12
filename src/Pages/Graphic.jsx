import React, { useRef } from 'react';
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
import { algoritmo, datosTabla, normalizar } from '../Utils/Transform';
import { options } from '../Utils/GraphicConfig';
import { setterEstado } from '../Utils/Algoritmos';
import Informacion from '../Components/Informacion';
import Estadisticas from '../Components/Estadisticas';

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
  if (algoritmo !== "") {
    const [output, estadisticas] = setterEstado(datosTabla, algoritmo)
    dataset.current = normalizar(output)  
    estadistica.current = estadisticas
  }

  return (
    <div>
      {algoritmo !== "" && (
        <div className='relative w-full h-64'>
          <h1 className='text-center m-2 text-2xl'>Resultado ({algoritmo})</h1>
          <div className='flex flex-col h-80 m-4 overflow-auto'>
            {dataset.current.length > 1 && dataset.current.map((value, key) => (
              <div className='h-16' key={key}>
                <Bar options={options} data={value} />
              </div>
            ))}
          </div>
          <div className='flex  justify-center items-center'>
            <Informacion></Informacion>
            <Estadisticas data={estadistica.current}></Estadisticas>  
          </div>
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