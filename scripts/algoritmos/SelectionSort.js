export default function selectionSort(vetor_) {
  const vetor = [...vetor_];

  let trocas = 0;
  let tamanho = vetor.length;

  for (let i = 0; i < tamanho; i++) {
    let menor = i;
    for (let j = i + 1; j < tamanho; j++) {
      if (vetor[menor] > vetor[j]) {
        menor = j;
      }
    }

    if (menor !== i) {
      const tmp = vetor[i];
      vetor[i] = vetor[menor];
      vetor[menor] = tmp;
      trocas++;
    }
  }

  return trocas;
}
