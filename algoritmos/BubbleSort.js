export default function bubbleSort(array) {
  let newArray = array;
  let len = newArray.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (newArray[j] > newArray[j + 1]) {
              let tmp = newArray[j];
              newArray[j] = newArray[j + 1];
              newArray[j + 1] = tmp;
          }
      }
  }
  return newArray;
}
