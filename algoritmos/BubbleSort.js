function bubbleSort(_vetor) {
  let trocas = 0;

  const vetor = [..._vetor];

  for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor.length; j++) {
      if (vetor[j] > vetor[j + 1]) {
        let temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
        trocas++;
      }
    }
  }
  return trocas;
}

export default bubbleSort;
