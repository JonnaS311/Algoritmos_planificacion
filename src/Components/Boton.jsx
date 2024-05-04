import React from 'react';

const Boton = ({onClick, children}) => {
    return (
        <div className='bg-[#4438C9] transition duration-700 hover:bg-[#1D1854] text-white flex justify-center items-center w-52 rounded-2xl m-2'>
            <button onClick={onClick} className='w-full p-2'>{children}</button>
        </div>
    );
};

export default Boton;