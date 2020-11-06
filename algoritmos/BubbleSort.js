const bubbleSort = (array, pointer = array.length - 1) => {
  const newArray = [...array];

  if (pointer === 0) {
    return newArray;
  }

  for (let i = 0; i < pointer; i++) {
    if (newArray[i] > newArray[i + 1]) {
      let temp = newArray[i + 1];
      newArray[i + 1] = newArray[i];
      newArray[i] = temp;
    }
  }

  return bubbleSort(newArray, pointer - 1);
};

export default bubbleSort;
