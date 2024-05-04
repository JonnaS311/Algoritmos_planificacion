import React from 'react';

const Input = ({isNumeric}) => {
    return (
        <div className='w-full max-w-full bg-black'>
            {isNumeric && (<input type="number" className='h-8 border-solid border-2 border-indigo-700 text-center input' maxlength="2"/>  )}
            {!isNumeric && (<input type="text" className='h-8 border-solid border-2 border-indigo-700 text-center input' />  )}
        </div>
    );
};

export default Input;