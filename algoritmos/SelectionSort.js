export default function selectionSort(arr) {
  const newArray = [...arr];
  let len = newArray.length;
  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (newArray[min] > newArray[j]) {
              min = j;
          }
      }
      if (min !== i) {
          let tmp = newArray[i];
          newArray[i] = newArray[min];
          newArray[min] = tmp;
      }
  }
  return newArray;
}
