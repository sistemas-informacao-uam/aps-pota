export default function radixSort(vetor_) {
  let vetor = [...vetor_];
  let trocas = 0;

  let divisor = 10;
  const maxNum = Math.max(...vetor) * divisor;
  while (divisor < maxNum) {
    let buckets = [...Array(10)].map(() => []);
    for (let num of vetor) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
    }
    const vetorAnterior = [...vetor];
    vetor = [].concat.apply([], buckets);

    for (let i in vetor) {
      if (vetor[i] !== vetorAnterior[i]) {
        trocas++;
      } else {
        let contVetorAnterior = 0;
        let contNovoVetor = 0;
        for (let j = 0; j < i; j++) {
          if (vetorAnterior[j] === vetorAnterior[i]) {
            contVetorAnterior++;
          }
          if (vetor[j] === vetor[i]) {
            contNovoVetor++;
          }
        }
        if (contNovoVetor !== contVetorAnterior) {
          trocas++;
        }
      }
    }

    divisor *= 10;
  }
  return trocas;
}
