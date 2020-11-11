import bubbleSort from '../algoritmos/BubbleSort.js';
import countSort from '../algoritmos/CountSort.js';
import heapSort from '../algoritmos/HeapSort.js';
import insertionSort from '../algoritmos/InsertionSort.js';
import mergeSort from '../algoritmos/MergeSort.js';
import quickSort from '../algoritmos/QuickSort.js';
import radixSort from '../algoritmos/RadixSort.js';
import selectionSort from '../algoritmos/SelectionSort.js';

// 10000 gasta muito tempo para processar
const esqueletoVetores = {
  5: [],
  10: [],
  50: [],
  100: [],
  1000: [],
  // 10000: [],
};

const vetores = gerarVetores(50, esqueletoVetores);

const mediasBubbleSort = {};
Object.keys(vetores).forEach(key => {
  mediasBubbleSort[key] = obterMediaDeTrocas(vetores[key], bubbleSort);
});
print('Bubble Sort', mediasBubbleSort);

const mediasHeapSort = {};
Object.keys(vetores).forEach(key => {
  mediasHeapSort[key] = obterMediaDeTrocas(vetores[key], heapSort);
});
print('Heap Sort', mediasHeapSort);

const mediasMergeSort = {};
Object.keys(vetores).forEach(key => {
  mediasMergeSort[key] = obterMediaDeTrocas(vetores[key], mergeSort);
});
print('Merge Sort', mediasMergeSort);

const mediasCountSort = {};
Object.keys(vetores).forEach(key => {
  mediasCountSort[key] = obterMediaDeTrocas(vetores[key], countSort);
});
print('Count Sort', mediasCountSort);

const mediasRadixSort = {};
Object.keys(vetores).forEach(key => {
  mediasRadixSort[key] = obterMediaDeTrocas(vetores[key], radixSort);
});
print('Radix Sort', mediasRadixSort);

const mediasSelectionSort = {};
Object.keys(vetores).forEach(key => {
  mediasSelectionSort[key] = obterMediaDeTrocas(vetores[key], selectionSort);
});
print('Selection Sort', mediasSelectionSort);

function print(sort, medias) {
  console.log(
    `%c${sort}\n%cMédia de Trocas:\n${Object.keys(medias)
      .map(key => {
        return `%c[${key}]: %c${medias[key]}\n`;
      })
      .join('')}`,
    'color: #FE70BD',
    'color: orange',
    'color: cyan',
    'color: yellow',
    'color: cyan',
    'color: yellow',
    'color: cyan',
    'color: yellow',
    'color: cyan',
    'color: yellow',
    'color: cyan',
    'color: yellow',
    // 'color: cyan',
    // 'color: yellow',
  );
}

function gerarVetorDeNumerosAleatorios(tamanho) {
  const vetor = [];

  for (let i = 0; i < tamanho; i++) {
    vetor[i] = Math.floor(Math.random() * (99999 + 1));
  }

  return vetor;
}

function gerarVetores(quantidade, vetores) {
  const qtdVetores = quantidade;

  Object.keys(vetores).forEach(key => {
    for (let i = 0; i < qtdVetores; i++) {
      vetores[key].push(gerarVetorDeNumerosAleatorios(key));
    }
  });

  return vetores;
}

function obterMediaDeTrocas(vetores, algoritmo) {
  return (
    vetores.reduce((acumulador, vetor, index) => {
      if (index === 1) {
        return algoritmo(acumulador) + algoritmo(vetor);
      }

      const trocas = algoritmo(vetor);

      return acumulador + trocas;
    }) / vetores.length
  );
}

const data5 = [
  mediasBubbleSort[5],
  mediasHeapSort[5],
  mediasMergeSort[5],
  mediasCountSort[5],
  mediasRadixSort[5],
  mediasSelectionSort[5],
];

const data10 = [
  mediasBubbleSort[10],
  mediasHeapSort[10],
  mediasMergeSort[10],
  mediasCountSort[10],
  mediasRadixSort[10],
  mediasSelectionSort[10],
];

const data50 = [
  mediasBubbleSort[50],
  mediasHeapSort[50],
  mediasMergeSort[50],
  mediasCountSort[50],
  mediasRadixSort[50],
  mediasSelectionSort[50],
];

const data100 = [
  mediasBubbleSort[100],
  mediasHeapSort[100],
  mediasMergeSort[100],
  mediasCountSort[100],
  mediasRadixSort[100],
  mediasSelectionSort[100],
];

const data1000 = [
  mediasBubbleSort[1000],
  mediasHeapSort[1000],
  mediasMergeSort[1000],
  mediasCountSort[1000],
  mediasRadixSort[1000],
  mediasSelectionSort[1000],
];

// const data10000 = [
//   mediasBubbleSort[10000],
//   mediasHeapSort[10000],
//   mediasMergeSort[10000],
//   mediasSelectionSort[10000],
// ];

const dataset = [
  { tamanho: 5, medias: data5 },
  { tamanho: 10, medias: data10 },
  { tamanho: 50, medias: data50 },
  { tamanho: 100, medias: data100 },
  { tamanho: 1000, medias: data1000 },
  // { tamanho: 10000, medias: data10000 },
];

export { dataset };
