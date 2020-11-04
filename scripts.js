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
insertionSort();
mergeSort();
quickSort();
radixSort();
selectionSort();

const arrayBubbleSort = heapSort(testArray);
console.log('BubbleSort');
console.log(testArray);
console.log(arrayBubbleSort);

const arrayQuickSort = heapSort(testArray);
console.log('QuickSort');
console.log(testArray);
console.log(arrayQuickSort);

const arrayHeapSort = heapSort(testArray);
console.log('HeapSort');
console.log(testArray);
console.log(arrayHeapSort);
