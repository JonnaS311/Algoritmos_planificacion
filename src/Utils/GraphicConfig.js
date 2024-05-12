
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
      display: false,
        text: 'Resultado',
    },
    legend: {
      display: false // Oculta el cuadro de leyenda
    },
  },
  scales: {
    x: {
      stacked: true,
      min: 0,
      max:80,
      ticks: {
        precision: 1,
        stepSize: 1,
        //display:false
      }
    },
    y: {
      stacked: true,
    },
  },
};
