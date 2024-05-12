class Proceso {
    constructor(nombre, llegada, ejecucion, cantidadBloqueos, bloqueos) {
        this.nombre = nombre
        this.llegada = llegada
        this.ejecucion = ejecucion
        this.cantidadBloqueos = cantidadBloqueos
        this.bloqueos = bloqueos
        this.ejecutado = 0
        this.tiempoBloqueo = 0
        this.estado = "Nuevo"
    }

    // Getter y setter para 'nombre'
    getNombre() {
        return this.nombre
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    // Getter y setter para 'llegada'
    getLlegada() {
        return this.llegada
    }
    setLlegada(nuevaLlegada) {
        this.llegada = nuevaLlegada
    }

    // Getter y setter para 'ejecucion'
    getEjecucion() {
        return this.ejecucion
    }
    setEjecucion(nuevaEjecucion) {
        this.ejecucion = nuevaEjecucion
    }

    // Getter y setter para 'cantidadBloqueos'
    getCantidadBloqueos() {
        return this.cantidadBloqueos
    }
    setCantidadBloqueos(nuevoCantidadBloqueos) {
        this.cantidadBloqueos = nuevoCantidadBloqueos
    }

    // Getter y setter para 'bloqueos'
    getBloqueos() {
        return this.bloqueos
    }
    setBloqueos(nuevoBloqueos) {
        this.bloqueos = nuevoBloqueos
    }
}

class Cola {
    constructor() {
        this.items = [];
    }

    encolar(elemento) {
        this.items.push(elemento);
    }

    desencolar() {
        if (this.estaVacia()) {
            return null;
        }
        return this.items.shift();
    }

    estaVacia() {
        return this.items.length === 0;
    }

    contiene(elemento) {
        return this.items.includes(elemento);
    }

    recorrer(callback) {
        this.items.forEach(callback);
    }
}

let tablaInstrucciones = [["A", 0, 8, [3, 4], [7, 2]],
["B", 1, 3, [2, 5], null],
["C", 3, 12, [1, 3], [8, 1]],
["D", 5, 10, [1, 4], [2, 12]],
["E", 9, 11, [4, 11], null],
["F", 12, 9, [5, 3], [7, 4]],
["G", 14, 10, null, null]]

let listaProcesos = []
let tablaSalida = [] // { nombre: p[0], arr: [] } Está es la tabla para gráficar
let estadistica = [] // nombre, retorno, tiempo perdido, tiempo de espera, penalidad, tiempo de respuesta
let PL = { nombre: 'PL', arr: [] }

function AlgoritmosPlanificacion(tablaInstrucciones, quantum) {

    // Se crean los objetos tipo proceso y la tabla de salida
    tablaInstrucciones.forEach((p) => {
        let numeroDeBloqueos = p.length - 3
        let arrayBloqueos = []
        if (numeroDeBloqueos > 0) {
            for (let i = 3; i < p.length; i++) {
                if (p[i] !== null) {
                    arrayBloqueos.push(p[i])
                } else {
                    numeroDeBloqueos--
                }
            }
        }
        arrayBloqueos.sort((a, b) => a[0] - b[0])
        listaProcesos.push(new Proceso(p[0], p[1], p[2], numeroDeBloqueos, arrayBloqueos))
        listaProcesos.sort((a, b) => a[1] - b[1])
        tablaSalida.push({ nombre: p[0], arr: [] })
    });

    let colaProcesos = new Cola()
    let colaBloqueados = new Cola();


    const getProcesoSiguiente = () => {

        let colaProcesosEnEspera = new Cola()
        
        if (!colaProcesos.estaVacia()) {
            colaProcesos.desencolar()
        }

        listaProcesos.forEach((p) => {
            if (p.estado === 'En espera') {
                colaProcesosEnEspera.encolar(p)
            }
        })

        colaProcesosEnEspera.recorrer((p) => {
            if (!colaProcesos.contiene(p)) {
                colaProcesos.encolar(p)
            }
        })

        colaProcesos.recorrer((p) => {
            if (p.estado !== 'En espera') {
                colaProcesos.desencolar(p)
            }
        })

        return colaProcesos.items[0]
    };


    // Se agrega el progreso a cada proceso
    const agregarColumnaTabla = () => {
        listaProcesos.forEach((p) => {
            let filaTabla = tablaSalida.find((f) => f.nombre == p.nombre);
            switch (p.estado) {
                case "Nuevo":
                    filaTabla.arr.push('00'); // Cuando todavía no ha llegado el proceso
                    break;
                case "En espera":
                    filaTabla.arr.push("EE");  // En espera
                    break;
                case "Ejecucion":
                    filaTabla.arr.push("EJ"); // Ejecución
                    break;
                case "Bloqueado":
                    filaTabla.arr.push("BB"); // Bloqueado
                    break;
            }
        });
    };

    // Creación de la tabla de estadísticas a partir de la tabla salida
    const tablaEstadisticas = () => {
        tablaSalida.forEach((p) => {
            let ejecucion = 0
            let bloqueo = 0
            let enEspera = 0
            let inicio = 0
            let instateFin = p.arr.length - 1
            let tiempoRespuesta = 0

            let ejecucionEncontrada = false

            p.arr.forEach((a) => {
                if (a === "EJ") {
                    ejecucion++
                    ejecucionEncontrada = true
                }
                if (a === "EE") { enEspera++ }
                if (a === "BB") { bloqueo++ }
                if (a === 0) { inicio++ }
                if (a === "EE" && !ejecucionEncontrada) { tiempoRespuesta++ }
            })
            let retorno = instateFin - inicio
            let timepoPerdido = retorno - ejecucion
            let penalidad = (retorno / ejecucion).toFixed(2) // redondeado a dos decimales
            estadistica.push([p.nombre, retorno, timepoPerdido, enEspera, penalidad, tiempoRespuesta])
        })
        return estadistica
    }

    let procesoActual = listaProcesos[0];
    procesoActual.estado = "Ejecucion";
    let cicloReloj = 0;
    let conteoQuantum = quantum

    while (listaProcesos.filter((p) => p.estado !== 'Terminado').length > 0) {

        listaProcesos.forEach((p) => {
            if (p.llegada == cicloReloj && p.estado == "Nuevo") {
                p.estado = "En espera";
            }
        });

        if (procesoActual) {
            procesoActual.estado = "Ejecucion";
        }

        if (conteoQuantum === quantum) {
            PL.arr.push("QQ")
            if (procesoActual && procesoActual.estado == "Ejecucion") {
                procesoActual.estado = "En espera"
            }
            agregarColumnaTabla()
            procesoActual = getProcesoSiguiente()
            conteoQuantum = -1
        } else {

            if (cicloReloj === PL.arr.length){
                PL.arr.push('00')
            }

            if (PL.arr[cicloReloj] !== '00'){
                if (procesoActual) {
                    procesoActual.estado = "En espera";
                }
            }
            
            agregarColumnaTabla()

            let procesosBloqueados = listaProcesos.filter((p) => p.estado == "Bloqueado");
            procesosBloqueados.forEach((pb) => {
                pb.tiempoBloqueo = pb.tiempoBloqueo - 1;
                if (pb.tiempoBloqueo == 0) {
                    pb.estado = "En espera"
                }
            });

            if (procesoActual) {
                procesoActual.ejecutado++
                if (procesoActual.cantidadBloqueos > 0) {
                    if (procesoActual.ejecutado == procesoActual.bloqueos[0][0]) {
                        procesoActual.estado = "Bloqueado"
                        procesoActual.tiempoBloqueo = procesoActual.bloqueos[0][1]
                        procesoActual.cantidadBloqueos--
                        procesoActual.bloqueos.shift()
                        PL.arr.push("QB");
                        conteoQuantum = -1;
                        procesoActual = getProcesoSiguiente()
                        if (procesoActual) {
                            procesoActual.estado = "Ejecucion"
                        }
                    }
                }
            }

            if (procesoActual && procesoActual.ejecutado == procesoActual.ejecucion) {
                procesoActual.estado = "Terminado"
                PL.arr.push("QT")
                if (procesoActual && procesoActual.estado == "Ejecucion") {
                    procesoActual.estado = "En espera"
                }
                procesoActual = getProcesoSiguiente()
                conteoQuantum = -1
            }

            if (!procesoActual) {
                procesoActual = getProcesoSiguiente();
                if (procesoActual) {
                    procesoActual.estado = "Ejecucion";
                }
            }
        }

        cicloReloj++
        conteoQuantum++
    }

    tablaEstadisticas()
    return tablaSalida, estadistica
}

function convertirTablaSalidaAMatriz(tablaSalida, PL) {
    let matriz = [];

    // Encabezados de columna para la tabla de salida
    let encabezadosTabla = ['X'];
    for (let i = 1; i < tablaSalida[0].arr.length + 1; i++) {
        encabezadosTabla.push(i);
    }
    matriz.push(encabezadosTabla);

    // Datos de PL
    matriz.push(['P', ...PL.arr]);

    // Datos de la tabla de salida
    tablaSalida.forEach((fila) => {
        let filaMatriz = [fila.nombre, ...fila.arr];
        matriz.push(filaMatriz);
    });

    return matriz;
}



AlgoritmosPlanificacion(tablaInstrucciones, 3)
//console.log(tablaSalida)
//console.log(estadistica)
//console.log(PL)

let tablaSalidaComoMatriz = convertirTablaSalidaAMatriz(tablaSalida, PL);
console.log(tablaSalidaComoMatriz);