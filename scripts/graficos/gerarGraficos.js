import { dataset } from './dados.js';
import configs, { backgroundColor, borderColor } from './configsGraficos.js';

const labels = [
  'Bubble',
  'Heap',
  'Merge',
  'Count Sort',
  'RadixSort',
  'Selection',
];

const ctxs = document.querySelectorAll('.chart');

ctxs.forEach(
  (ctx, index) =>
    new Chart(ctx, {
      data: {
        labels,
        datasets: [
          {
            label: `Média de Trocas (${dataset[index].tamanho})`,
            data: dataset[index].medias,
            backgroundColor,
            borderColor,
            borderWidth: 1,
          },
        ],
      },
      ...configs,
    }),
);
