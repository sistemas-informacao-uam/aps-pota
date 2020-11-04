import bubbleSort from './algoritmos/BubbleSort.js';
import bucketSort from './algoritmos/BucketSort.js';
import countSort from './algoritmos/CountSort.js';
import heapSort from './algoritmos/HeapSort.js';
import insertionSort from './algoritmos/InsertionSort.js';
import mergeSort from './algoritmos/MergeSort.js';
import quickSort from './algoritmos/QuickSort.js';
import radixSort from './algoritmos/RadixSort.js';
import selectionSort from './algoritmos/SelectionSort.js';

const testArray = [5, 1, 8, 99, 2, 123, 992];

bucketSort();
countSort();
quickSort();
insertionSort();
radixSort();

const arrayBubbleSort = bubbleSort(testArray);
console.log('BubbleSort');
console.log(testArray);
console.log(arrayBubbleSort);

const arrayMergeSort = mergeSort(testArray);
console.log('MergeSort');
console.log(testArray);
console.log(arrayMergeSort);

const arrayHeapSort = heapSort(testArray);
console.log('HeapSort');
console.log(testArray);
console.log(arrayHeapSort);

const arraySelectionSort = selectionSort(testArray);
console.log('SelectionSort');
console.log(testArray);
console.log(arraySelectionSort);
