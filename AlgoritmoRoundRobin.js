class Proceso {
    constructor(nombre, llegada, ejecucion, cantidadBloqueos, bloqueos) {
        this.nombre = nombre;
        this.llegada = llegada;
        this.ejecucion = ejecucion;
        this.cantidadBloqueos = cantidadBloqueos;
        this.bloqueos = bloqueos;
        this.ejecutado = 0;
        this.tiempoBloqueo = 0;
        this.estado = "Nuevo";
    }
}

let tablaInstrucciones = [["A", 0, 8, [3, 4], [7, 2]],
                        ["B", 1, 3, [2, 5], null],
                        ["C", 3, 12, [1, 3], [8, 1]],
                        ["D", 5, 10, [1, 4], [2, 12]],
                        ["E", 9, 11, [4, 11], null],
                        ["F", 12, 9, [5, 3], [7, 4]],
                        ["G", 14, 10, null, null],
                        ["Planificador", 0, 1, null, null]];

let listaProcesos = [];
let tablaSalida = [];
let quantum = 3; 
let procesosPendientes = [];

function AlgoritmoRoundRobin(tablaInstrucciones) {

    tablaInstrucciones.forEach((p) => {
        let numeroDeBloqueos = p.length - 3;
        let arrayBloqueos = [];
        if (numeroDeBloqueos > 0) {
            for (let i = 3; i < p.length; i++) {
                if (p[i] !== null) {
                    arrayBloqueos.push(p[i]);
                } else {
                    numeroDeBloqueos--;
                }
            }
        }
        listaProcesos.push(new Proceso(p[0], p[1], p[2], numeroDeBloqueos, arrayBloqueos));
        tablaSalida.push({ nombre: p[0], arr: [] });
    });

    const getProcesoSiguiente = () => {
        let procesosEspera = listaProcesos.filter((p) => p.estado == 'En espera');

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

    let cicloReloj = 0;
    let tiempoEjecucionProcesoActual = 0;

    while (listaProcesos.some(p => p.estado !== 'Terminado') || procesosPendientes.length > 0) {
        
        let procesoActual = listaProcesos.find(p => p.estado === 'Ejecucion');
        if (!procesoActual) {
            procesoActual = procesosPendientes.shift(); 
            if (procesoActual) {
                procesoActual.estado = 'Ejecucion';
                tiempoEjecucionProcesoActual = 0;
            }
        }

        agregarColumnaTabla();

        if (procesoActual) {
            procesoActual.ejecutado++;
            tiempoEjecucionProcesoActual++;
        
            for (let i = 0; i < procesoActual.cantidadBloqueos; i++) {
                if (procesoActual.bloqueos[i] && procesoActual.ejecutado === procesoActual.bloqueos[i][0]) {
                    procesoActual.estado = "Bloqueado";
                    procesoActual.tiempoBloqueo = procesoActual.bloqueos[i][1];
                }
            }
        
            if (tiempoEjecucionProcesoActual === quantum || procesoActual.ejecutado === procesoActual.ejecucion) {
                if (procesoActual.ejecutado !== procesoActual.ejecucion && tiempoEjecucionProcesoActual === quantum) {
                    procesoActual.estado = "En espera";
                    procesosPendientes.push(procesoActual); // Agregar proceso actual a la cola de pendientes
                } else {
                    procesoActual.estado = procesoActual.ejecutado === procesoActual.ejecucion ? "Terminado" : "En espera";
                }
                tiempoEjecucionProcesoActual = 0;
            }
        }

        listaProcesos.forEach((p) => {
            if (p.estado === "Nuevo" && p.llegada == cicloReloj) {
                p.estado = "En espera";
                procesosPendientes.push(p); // Agregar proceso nuevo a la cola de pendientes
            }
            if (p.estado === "Bloqueado") {
                p.tiempoBloqueo--;
                agregarColumnaTabla();
                if (p.tiempoBloqueo === 0) {
                    p.estado = "En espera";
                    procesosPendientes.push(p); // Agregar proceso desbloqueado a la cola de pendientes
                }
            }
        });

        cicloReloj++;
    }

    return tablaSalida;
}

AlgoritmoRoundRobin(tablaInstrucciones);
console.log(tablaSalida);