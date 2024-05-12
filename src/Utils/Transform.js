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
    let resultado = []
    let color = []
    let nombres = []
    for (let index = 0; index < datos.length; index++) {
        resultado.push([])
        color.push([])
        nombres.push(datos[index].nombre)
        let info = datos[index].arr
        let actual = info[0]
        let count = 0
        for (let j = 0; j < info.length; j++) {
            if (info[j] === actual) {
                count += 1
            }
            else {
                resultado[index].push(count)
                color[index].push(obtenerColor(actual))
                count = 1
                actual = info[j]
            }
        }
        resultado[index].push(count)
        color[index].push(obtenerColor(actual))
    }
    nombres = nombres.reverse()
    resultado = convertirDataset(resultado, color)
    for (let index = 0; index < resultado.length; index++) {
        let tmp = { labels: [nombres[index]], datasets: resultado[index] }
        resultado[index] = tmp
    }
    return resultado
}

function convertirDataset(datos, colores) {
    let dataset = []
    for (let index = 0; index < datos.length; index++) {
        dataset.push([])
        for (let j = 0; j < datos[index].length; j++) {
            dataset[index].push({
                data: [datos[index][j]], backgroundColor: colores[index][j], // Rojo
                borderColor: colores[index][j]
            })
        }
    }
    return dataset.reverse()
}

function obtenerColor(tipo) {
    if (tipo === 0) {
        return 'rgba(255, 99, 132, 0)'
    } else if (tipo === 'E') {
        return 'rgba(99, 255, 124, 0.5)'
    }else if (tipo === 'EE') {
        return 'rgba(113, 116, 128, 0.5)'
    } else if (tipo === 'B') {
        return 'rgba(255, 99, 132, 0.5)'
    }

}