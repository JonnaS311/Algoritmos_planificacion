class Proceso{
    constructor(nombre,llegada,ejecucion,bloqueo1,bloqueo2){
        this.nombre=nombre;
        this.llegada=llegada;
        this.ejecucion=ejecucion;
        this.bloqueo1=bloqueo1;
        this.bloqueo2=bloqueo2;
        this.ejecutado=0;
        this.tiempoBloqueo=0;
        this.estado="Nuevo"
    }
    // Getter y setter para 'nombre'
    getNombre() {
    return this.nombre;
    }
    setNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
    }

    // Getter y setter para 'llegada'
    getLlegada() {
    return this.llegada;
    }
    setLlegada(nuevaLlegada) {
    this.llegada = nuevaLlegada;
    }

    // Getter y setter para 'ejecucion'
    getEjecucion() {
    return this.ejecucion;
    }
    setEjecucion(nuevaEjecucion) {
    this.ejecucion = nuevaEjecucion;
    }

    // Getter y setter para 'bloqueo1'
    getBloqueo1() {
    return this.bloqueo1;
    }
    setBloqueo1(nuevoBloqueo1) {
    this.bloqueo1 = nuevoBloqueo1;
    }

    // Getter y setter para 'bloqueo2'
    getBloqueo2() {
    return this.bloqueo2;
    }
    setBloqueo2(nuevoBloqueo2) {
    this.bloqueo2 = nuevoBloqueo2;
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
        listaProcesos.push(new Proceso(p[0], p[1], p[2], p[3], p[4]));
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
            if (procesoActual.bloqueo1 && procesoActual.ejecutado == procesoActual.bloqueo1[0]) {
                procesoActual.estado = "Bloqueado";
                procesoActual.tiempoBloqueo = procesoActual.bloqueo1[1];
                procesoActual = getProcesoSiguiente();
                if (procesoActual) {
                    procesoActual.estado = "Ejecucion";
                }
            }
            if (procesoActual.bloqueo2 && procesoActual.ejecutado == procesoActual.bloqueo2[0]) {
                procesoActual.estado = "Bloqueado";
                procesoActual.tiempoBloqueo = procesoActual.bloqueo2[1];
                procesoActual = getProcesoSiguiente();
                if (procesoActual) {
                    procesoActual.estado = "Ejecucion";
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