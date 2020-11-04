function swap(array, i, j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

function partition(array, low, high) {
  let q = low, i;
  for (i = low; i < high; i++) {
      if (array[i] < array[high]) {
          swap(array, i, q);
          q++;
      }
  }
  swap(array, i, q);
  return q;
};

export default function quickSort(array, low, high) {
  const newArray = array;
  if (low < high) {
      let pivot = partition(newArray, low, high);
      quickSort(newArray, low, pivot - 1);
      quickSort(newArray, pivot + 1, high);
      return newArray;
  }
};