let progSinTerminar
let tablaGrafica
let tablaEstadisticas

function recorrido(tablaInstrucciones){
    
    for (const programas of tablaInstrucciones) {
        progSinTerminar.push(programas[0]);
    }
    console.log(progSinTerminar)

    while (progSinTerminar != null) {
        for (let i = 0; i < tablaInstrucciones.length; i++){
            for (let j = 0; j < tablaInstrucciones.length; j++){
            
            }
        }
    }
    return tablaGrafica, tablaEstadisticas
}


let tablaInstrucciones = [["A", 0, 8, [3, 4], [7, 2]],
                        ["B", 1, 3, [2, 5], null],
                        ["C", 3, 12, [1, 3], [8, 1]],
                        ["D", 5, 10, [1, 4], [2, 12]],
                        ["E", 9, 11, [4, 11], null]
                        ["F", 12, 9, [5, 3], [7, 4]]
                        ["G", 14, 10, null, null]]