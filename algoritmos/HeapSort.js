let array_length;

function heap_root(input, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < array_length && input[left] > input[max]) {
      max = left;
  }

  if (right < array_length && input[right] > input[max])     {
      max = right;
  }

  if (max != i) {
      swap(input, i, max);
      heap_root(input, max);
  }
}

function swap(input, index_A, index_B) {
  let temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}

export default function heapSort(input) {
  let newArray = [...input];
  array_length = newArray.length;

  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
      heap_root(newArray, i);
  }

  for (let i = newArray.length - 1; i > 0; i--) {
      swap(newArray, 0, i);
      array_length--;
    
      heap_root(newArray, 0);
  }

  return newArray;
}
