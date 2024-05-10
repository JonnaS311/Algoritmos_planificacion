import Input from './Input';
import { useTablaContext } from '../../Contexts/TablaDatos';
import Bloqueo from './Bloqueo';

const Proceso = ({ bloqueos, id }) => {
    const {TablaDatos,setTablaDatos} = useTablaContext()

    const addProceso = (e) => {
        if (Number.isInteger(parseInt(e.target.value))) {
            TablaDatos[id][parseInt(e.target.attributes.name.nodeValue)-1] = parseInt(e.target.value)
            setTablaDatos(Array.from(TablaDatos))
        }else{
            TablaDatos[id][parseInt(e.target.attributes.name.nodeValue)-1] = e.target.value
            setTablaDatos(Array.from(TablaDatos))
        }
    }

    return (
        <tr className='bg-indigo-700'>
            <td> <Input isNumeric={false} onChange={addProceso} nombre={'1'}></Input> </td>
            <td><Input isNumeric={true} onChange={addProceso} nombre={'2'}></Input></td>
            <td><Input isNumeric={true} onChange={addProceso} nombre={'3'}></Input></td>
            {[...Array(bloqueos)].map((valor, index) => {
                return (
                    <td key={index}>
                        <Bloqueo numberBlock={index} id={id}></Bloqueo>
                    </td>
                )
            })}
        </tr>
    );
};

export default Proceso;