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

bubbleSort();
bucketSort();
countSort();
insertionSort();
mergeSort();
quickSort();
radixSort();
selectionSort();

const newArray = heapSort(testArray);
console.log(testArray);
console.log(newArray);
