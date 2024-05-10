import { createContext, useContext} from 'react';

export const TablaContext = createContext([[]]);

export const useTablaContext = () =>{
    return useContext(TablaContext)
}
