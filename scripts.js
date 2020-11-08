import bubbleSort from './algoritmos/BubbleSort.js';
import countSort from './algoritmos/CountSort.js';
import heapSort from './algoritmos/HeapSort.js';
import insertionSort from './algoritmos/InsertionSort.js';
import mergeSort from './algoritmos/MergeSort.js';
import quickSort from './algoritmos/QuickSort.js';
import radixSort from './algoritmos/RadixSort.js';
import selectionSort from './algoritmos/SelectionSort.js';

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
