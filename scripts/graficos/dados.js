import bubbleSort from '../algoritmos/BubbleSort.js';
import countSort from '../algoritmos/CountSort.js';
import heapSort from '../algoritmos/HeapSort.js';
import insertionSort from '../algoritmos/InsertionSort.js';
import mergeSort from '../algoritmos/MergeSort.js';
import quickSort from '../algoritmos/QuickSort.js';
import radixSort from '../algoritmos/RadixSort.js';
import selectionSort from '../algoritmos/SelectionSort.js';

const urlParams = new URLSearchParams(window.location.search);
const desejaFritarSeuPC =
  urlParams.get('desejaFritarSeuPC')?.toLowerCase() === 'true';

// 10000 gasta muito tempo para processar
const esqueletoVetores = {
  5: [],
  10: [],
  50: [],
  100: [],
  1000: [],
};

if (desejaFritarSeuPC) {
  esqueletoVetores[10000] = [];
}

const container = document.querySelector('.container');

for (let i in esqueletoVetores) {
  const chartsContainer = document.createElement('div');
  const canvas = document.createElement('canvas');

  chartsContainer.appendChild(canvas);

  chartsContainer.classList.add('charts-container');

  canvas.classList.add('chart');
  canvas.style.width = '400px';
  canvas.style.height = '400px';

  container.appendChild(chartsContainer);
}

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

const mediasQuickSort = {};
Object.keys(vetores).forEach(key => {
  mediasQuickSort[key] = obterMediaDeTrocas(vetores[key], quickSort);
});
print('Quick Sort', mediasQuickSort);

const mediasInsertionSort = {};
Object.keys(vetores).forEach(key => {
  mediasInsertionSort[key] = obterMediaDeTrocas(vetores[key], insertionSort);
});
print('Insertion Sort', mediasInsertionSort);

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
    desejaFritarSeuPC ? 'color: cyan' : '',
    desejaFritarSeuPC ? 'color: yellow' : '',
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

const dataset = Object.keys(esqueletoVetores).map(key => {
  return {
    tamanho: key,
    medias: [
      mediasBubbleSort[key],
      mediasHeapSort[key],
      mediasMergeSort[key],
      mediasCountSort[key],
      mediasRadixSort[key],
      mediasSelectionSort[key],
      mediasQuickSort[key],
      mediasInsertionSort[key],
    ],
  };
});

export { dataset };
