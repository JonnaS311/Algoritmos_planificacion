import React, { useState } from 'react';

const Input = ({isNumeric, onChange, nombre}) => {
    return (
        <div className='w-full max-w-full bg-black'>
            {isNumeric && (<input type="number" name={nombre}  onChange={onChange} className='h-8 border-solid border-2 border-indigo-700 text-center input' maxLength={2}/>  )}
            {!isNumeric && (<input type="text" name={nombre} onChange={onChange} className='h-8 border-solid border-2 border-indigo-700 text-center input' />  )}
        </div>
    );
};

export default Input;