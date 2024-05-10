import React, { useEffect } from 'react';
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
import { data, options } from '../Utils/GraphicConfig';
import { setterEstado } from '../Utils/Algoritmos';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Graphic = () => {
  useEffect(()=>{
    if(algoritmo !== ""){
      const [output, estadisitica] =setterEstado(datosTabla,algoritmo)
      normalizar(output)
    }
  },[])

  return (
    <div className=' overflow-auto relative'>
      <Bar options={options} data={data} width={1000} height={250} />
    </div>
  );
};

export default Graphic;