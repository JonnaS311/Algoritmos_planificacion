
export const options = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
        text: 'Resultado',
    },
    legend: {
      display: false // Oculta el cuadro de leyenda
    },
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        precision: 1,
        stepSize: 1
      }
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['p1', 'p2'];

export const data = {
  labels,
  datasets: [
    {

      data: [1, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Rojo
        'rgba(54, 202, 135, 0.5)', // Azul
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      stack: 'Stack 1' // Nombre de la pila para este conjunto de datos
    },
    {

      data: [3, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Rojo
        'rgba(54, 202, 135, 0.5)', // Azul
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      stack: 'Stack 1' // Nombre de la pila para este conjunto de datos
    },
    {

      data: [1, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Rojo
        'rgba(54, 202, 135, 0.5)', // Azul
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      stack: 'Stack 1' // Nombre de la pila para este conjunto de datos
    },
    {

      data: [0, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Rojo
        'rgba(54, 202, 135, 0.5)', // Azul
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      stack: 'Stack 1' // Nombre de la pila para este conjunto de datos
    },
    {

      data: [0, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Rojo
        'rgba(54, 202, 135, 0.5)', // Azul
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      stack: 'Stack 1' // Nombre de la pila para este conjunto de datos
    },
  ]
};