import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Nav = ({FCFC, SPN, SRTF, RR}) => {
    return (
        <div>
            <Router>
                <nav className='flex justify-between px-10 py-7 bg-indigo-600 text-white'>
                    <h1 className='text-xl'>Algoritmos de Planificación</h1>
                    <ul className='flex space-x-4'>
                        <li className='hover:text-blue-200'><Link to='/FCFC'>FCFS</Link></li>
                        <li className='hover:text-blue-200'><Link to='/SPN'>SPN</Link></li>
                        <li className='hover:text-blue-200'><Link to='/SRTF'>SRTF</Link></li>
                        <li className='hover:text-blue-200'><Link to='/RR'>RR</Link></li>

                    </ul>
                </nav>

                <Routes>
                    <Route path='/FCFC' element=''>
                        {FCFC}
                    </Route>
                    <Route path='/SPN'  element=''>
                        {SPN}
                    </Route>
                    <Route path='/SRTF'  element=''>
                        {SRTF}
                    </Route>
                    <Route path='/RR'  element=''>
                        {RR}
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default Nav;