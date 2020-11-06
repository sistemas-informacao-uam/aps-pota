import bubbleSort from './algoritmos/BubbleSort.js';
import countSort from './algoritmos/CountSort.js';
import heapSort from './algoritmos/HeapSort.js';
import insertionSort from './algoritmos/InsertionSort.js';
import mergeSort from './algoritmos/MergeSort.js';
import quickSort from './algoritmos/QuickSort.js';
import radixSort from './algoritmos/RadixSort.js';
import selectionSort from './algoritmos/SelectionSort.js';

// const testArray = [5, 1, 8, 99, 2, 123, 992];
const testArray = [38, 27, 43, 3, 9, 82, 10];

countSort();
quickSort();
insertionSort();
radixSort();

const arrayBubbleSort = bubbleSort(testArray);
console.log('BubbleSort');
console.log(testArray);
console.log(arrayBubbleSort);

const [trocasMergeSort, vetorMergeSort] = mergeSort(testArray);
print('Merge Sort', trocasMergeSort, vetorMergeSort);

const arrayHeapSort = heapSort(testArray);
console.log('HeapSort');
console.log(testArray);
console.log(arrayHeapSort);

const [trocasSelectionSort, vetorSelectionSort] = selectionSort(testArray);
print('Selection Sort', trocasSelectionSort, vetorSelectionSort);

function print(sort, swaps, array) {
  console.log(
    `%c${sort}\n%cTrocas: %c${swaps}\n%cDefault: %c[${testArray}]\n%cSorted: %c[${array}]`,
    'color: #FE70BD',
    'color: orange',
    'color: cyan',
    'color: orange',
    'color: lime',
    'color: orange',
    'color: yellow',
  );
}
