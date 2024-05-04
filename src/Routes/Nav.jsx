import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Nav = ({children}) => {
    return (
        <div>
            <Router>
                <nav className='flex justify-between px-10 py-7 fondo-animado text-white drop-shadow-xl'>
                    <h1 className='text-xl'>Algoritmos de Planificación </h1>
                    <ul className='flex space-x-4 divide-x divide-x-2'>
                        <li className='hover:text-blue-200 pl-2'><Link to='/FCFC'>FCFS</Link></li>
                        <li className='hover:text-blue-200 pl-2'><Link to='/SPN'>SPN</Link></li>
                        <li className='hover:text-blue-200 pl-2'><Link to='/SRTF'>SRTF</Link></li>
                        <li className='hover:text-blue-200 pl-2'><Link to='/RR'>RR</Link></li>
                    </ul>
                </nav>
               {children}
            </Router>
        </div>
    );
};

export default Nav;