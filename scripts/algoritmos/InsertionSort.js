export default function insertionSort(vetor_) {
  const vetor = [...vetor_];
  let len = vetor.length;
  let trocas = 0;

  for (let i = 1; i < len; i++) {
    let chave = vetor[i];
    let j = i - 1;
    while (j >= 0 && vetor[j] > chave) {
      vetor[j + 1] = vetor[j];
      j = j - 1;
      trocas++;
    }
    vetor[j + 1] = chave;
  }
  return trocas;
}

//console.log(insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); RESULTADO=0
//console.log(insertionSort([2, 1, 3, 4, 5, 6, 7, 8, 9, 10])); RESULTADO=1
//console.log(insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); RESULTADO=45
