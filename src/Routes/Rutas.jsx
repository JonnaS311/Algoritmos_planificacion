import React from 'react';
import Principal from '../Pages/Principal'
import Presentacion from '../Pages/Presentacion'
import { Route, Routes } from 'react-router-dom';
import Graphic from '../Pages/Graphic';

const Rutas = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Presentacion></Presentacion>}>
                </Route>
                <Route path='/FCFC' element={<Principal algoritmo={'FCFS'}>First come, first served</Principal>}>
                  
                </Route>
                <Route path='/SJF' element={<Principal algoritmo={'SJF'}>Shorted job first</Principal>}>
                
                </Route>
                <Route path='/SRTF' element={<Principal algoritmo={'SRTF'}>Shortest remaining time first</Principal>}>
              
                </Route>
                <Route path='/RR' element={<Principal>Round Robin</Principal>}>
      
                </Route>
                <Route path='/Grafico' element={<Graphic></Graphic>}>

                </Route>
            </Routes>
        </div>
    );
};

export default Rutas;