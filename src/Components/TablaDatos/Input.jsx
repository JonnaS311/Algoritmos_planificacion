import React from 'react';

const Input = ({isNumeric, onChange, nombre, placeholder}) => {
    return (
        <div className='w-full max-w-full'>
            {isNumeric && (<input type="number" name={nombre}  onChange={onChange} placeholder={placeholder} className='h-8 border-solid border-2 border-indigo-700 text-center input' maxLength={2}/>  )}
            {!isNumeric && (<input type="text" name={nombre} onChange={onChange} placeholder={placeholder} className='h-8 border-solid border-2 border-indigo-700 text-center input' />  )}
        </div>
    );
};

export default Input;