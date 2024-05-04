import React from 'react';
import Principal from '../Pages/Principal'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Graphic from '../Pages/Graphic';

const Rutas = ({ FCFC, SPN, SRTF, RR }) => {
    return (
        <div>
            <Routes>
            <Route path='/' element={<Graphic></Graphic>}>
                    {FCFC}
                </Route>
                <Route path='/FCFC' element={<Principal>First come, first served</Principal>}>
                    {FCFC}
                </Route>
                <Route path='/SPN' element={<Principal>Shorted process next</Principal>}>
                    {SPN}
                </Route>
                <Route path='/SRTF' element={<Principal>Shortest remaining time first</Principal>}>
                    {SRTF}
                </Route>
                <Route path='/RR' element={<Principal>Round Robin</Principal>}>
                    {RR}
                </Route>
            </Routes>
        </div>
    );
};

export default Rutas;