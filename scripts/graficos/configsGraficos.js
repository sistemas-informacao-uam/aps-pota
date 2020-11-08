Chart.defaults.global.plugins.datalabels.anchor = 'end';
Chart.defaults.global.plugins.datalabels.align = 'end';

Chart.Legend.prototype.afterFit = function () {
  this.height = this.height + 20;
};

const configs = {
  type: 'bar',
  options: {
    legend: {
      labels: {
        boxWidth: 0,
        fontColor: '#999',
        fontSize: 16,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

export default configs;

export const backgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
];

export const borderColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
];
