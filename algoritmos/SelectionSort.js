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
    // console.log(vetor);
    if (menor !== i) {
      const tmp = vetor[i];
      vetor[i] = vetor[menor];
      vetor[menor] = tmp;
      // console.log('%cTroca:', 'color: orange', vetor);
      // console.log(
      //   `%c${vetor[menor]} %c<-> %c${vetor[i]}`,
      //   'color: yellow',
      //   'color: #FE70BD',
      //   'color: cyan',
      // );
      trocas++;
    }
  }

  return trocas;
}
