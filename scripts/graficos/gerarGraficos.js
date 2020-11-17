import { dataset } from './dados.js';
import configs, { backgroundColor, borderColor } from './configsGraficos.js';

const labels = [
  'BubbleSort',
  'HeapSort',
  'MergeSort',
  'CountSort',
  'RadixSort',
  'SelectionSort',
  'QuickSort',
  'InsertionSort',
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
