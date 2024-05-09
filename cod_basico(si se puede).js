class Proceso{
    constructor(nombre,llegada,ejecucion,cantidadBloqueos,bloqueos){
        this.nombre=nombre
        this.llegada=llegada
        this.ejecucion=ejecucion
        this.cantidadBloqueos=cantidadBloqueos
        this.bloqueos=bloqueos
        this.ejecutado=0
        this.tiempoBloqueo=0
        this.estado="Nuevo"
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

let tablaInstrucciones = [["A", 0, 8, [3, 4], [7, 2]],
                        ["B", 1, 3, [2, 5], null],
                        ["C", 3, 12, [1, 3], [8, 1]],
                        ["D", 5, 10, [1, 4], [2, 12]],
                        ["E", 9, 11, [4, 11], null],
                        ["F", 12, 9, [5, 3], [7, 4]],
                        ["G", 14, 10, null, null]]


let listaProcesos = []
let tablaSalida = []
let Algoritmo

function AlgoritmosPlanificacion(tablaInstrucciones,Algoritmo) {

    tablaInstrucciones.forEach((p) => {
        let numeroDeBloqueos = p.length - 3
        let arrayBloqueos = []
        if (numeroDeBloqueos > 0){
            for (let i = 3; i < p.length; i++){
                if (p[i] !== null){
                    arrayBloqueos.push(p[i])
                } else {
                    numeroDeBloqueos--
                }
            }
        }
        listaProcesos.push(new Proceso(p[0], p[1], p[2], numeroDeBloqueos, arrayBloqueos));
        tablaSalida.push({ nombre: p[0], arr: [] });
    });

    const getProcesoSiguiente = () => {
        let procesosEspera = listaProcesos.filter((p) => p.estado == 'En espera');
        switch (Algoritmo) {
            case 'FCFS':
                return procesosEspera[0];
            case 'SRTF':
                procesosEspera.sort((a, b) => {
                    let diferenciaA = a.ejecucion - a.ejecutado;
                    let diferenciaB = b.ejecucion - b.ejecutado;
                    return diferenciaA - diferenciaB;
                });
                return procesosEspera[0];
            case 'SJF':
                procesosEspera.sort((a, b) => a.ejecucion - b.ejecucion);
                return procesosEspera[0];
            default:
                return null;
        }
    };
    const agregarColumnaTabla = () => {
        listaProcesos.forEach((p) => {
            let filaTabla = tablaSalida.find((f) => f.nombre == p.nombre);
            switch (p.estado) {
                case "Nuevo":
                    filaTabla.arr.push(0);
                    break;
                case "En espera":
                    filaTabla.arr.push("EE");
                    break;
                case "Ejecucion":
                    filaTabla.arr.push("E");
                    break;
                case "Bloqueado":
                    filaTabla.arr.push("B");
                    break;
            }
        });
    };

    let procesoActual = listaProcesos[0];
    procesoActual.estado = "Ejecucion";
    let cicloReloj = 0;

    while (listaProcesos.filter((p) => p.estado !== 'Terminado').length > 0) {
        listaProcesos.forEach((p) => {
            if (p.llegada == cicloReloj && p.estado == "Nuevo") {
                p.estado = "En espera";
            }
        });

        if (procesoActual) {
            procesoActual.estado = "Ejecucion";
        }

        agregarColumnaTabla();

        let procesosBloqueados = listaProcesos.filter((p) => p.estado == "Bloqueado");
        procesosBloqueados.forEach((pb) => {
            pb.tiempoBloqueo = pb.tiempoBloqueo - 1;
            if (pb.tiempoBloqueo == 0) {
                pb.estado = "En espera";
            }
        });

        if (procesoActual) {
            procesoActual.ejecutado++;
            if (procesoActual.cantidadBloqueos > 0) {
                if (procesoActual.ejecutado == procesoActual.bloqueos[0][0]){
                    procesoActual.estado = "Bloqueado"
                    procesoActual.tiempoBloqueo = procesoActual.bloqueos[0][1]
                    procesoActual.cantidadBloqueos--
                    procesoActual.bloqueos.shift()
                    procesoActual = getProcesoSiguiente();
                    if (procesoActual) {
                        procesoActual.estado = "Ejecucion";
                    }
                }
                
            }
        }

        if (procesoActual && procesoActual.ejecutado == procesoActual.ejecucion) {
            procesoActual.estado = "Terminado";
            procesoActual = getProcesoSiguiente();
        }

        cicloReloj++;

        if (!procesoActual) {
            procesoActual = getProcesoSiguiente();
            if (procesoActual) {
                procesoActual.estado = "Ejecucion";
            }
        }
    }

    return tablaSalida;
}



AlgoritmosPlanificacion(tablaInstrucciones, "SJF")
console.log(tablaSalida)