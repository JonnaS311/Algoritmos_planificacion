export let datosTabla = []
export let algoritmo = ''

export function setDatos(datos) {
    datosTabla = Array.from(datos)
    //eliminar bloqueos nulos
    for (let index = 0; index < datosTabla.length; index++) {
        for (let j = 0; j < datosTabla[index].length; j++) {
            if (Array.isArray(datosTabla[index][j])) {
                if (datosTabla[index][j][0] == null && datosTabla[index][j][1] == null) {
                    datosTabla[index][j] = null
                }
            }
        }
    }
}

export function isValidTable(datos) {
    for (let index = 0; index < datos.length; index++) {
        if (datos[index][0] === null || datos[index][0] === "") {
            return false
        }
        else if (datos[index][1] === null || datos[index][1] === "") {
            return false
        }
        else if (datos[index][2] === null || datos[index][2] === "") {
            return false
        }
    }
    return true
}

export function setAlgoritmo(value) {
    algoritmo = value
}

export function normalizar(datos) {
    console.log(datos)
    let resultado = []
    for (let index = 0; index < datos.length; index++) {
        resultado.push([])
        let info = datos[index].arr
        let actual = info[0]
        let count = 0
        for (let j = 0; j < info.length; j++) {
            if(info[j] === actual){
                count+=1
            }
            else{
                resultado[index].push(count)
                count = 1
                actual = info[j]
            }
        }
        resultado[index].push(count)
    }
    console.log(resultado)
    let maxLength = 0
    for (let index = 0; index < resultado.length; index++) {        
        if (resultado[index].length > maxLength) {
            maxLength = resultado[index].length
        }
    }

    for (let index = 0; index < resultado.length; index++) {
        if(resultado[index].length < maxLength){
            for (let j = 0; j < maxLength-resultado[index].length+1; j++) {
                resultado[index].push(0)   
            }
        }
    }
    resultado = transpose(resultado)
}


function transpose(matrix) {
    // Obtiene el número de filas y columnas de la matriz original
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Crea una nueva matriz para almacenar la transpuesta
    let transposedMatrix = [];

    // Itera sobre las columnas de la matriz original
    for (let j = 0; j < cols; j++) {
        // Crea una nueva fila para cada columna
        let newRow = [];
        // Itera sobre las filas de la matriz original
        for (let i = 0; i < rows; i++) {
            // Añade el elemento correspondiente a la nueva fila
            newRow.push(matrix[i][j]);
        }
        // Añade la nueva fila a la matriz transpuesta
        transposedMatrix.push(newRow);
    }

    // Devuelve la matriz transpuesta
    return transposedMatrix;
}