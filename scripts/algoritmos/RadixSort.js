export default function radixSort(vetor_) {
  let vetor = [...vetor_];
  let trocas = 0;

  let divisor = 10;
  const maxNum = Math.max(...vetor) * divisor;
  // console.log(`%cMax: %c${maxNum}`, 'color: orange', 'color: cyan');
  while (divisor < maxNum) {
    // console.log(`%cVetor: %c${vetor}`, 'color: orange', 'color: cyan');
    let buckets = [...Array(10)].map(() => []);
    for (let num of vetor) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
    }
    // console.log(`%cBuckets: %c${buckets}`, 'color: orange', 'color: lime');
    const vetorAnterior = [...vetor];
    vetor = [].concat.apply([], buckets);
    // console.log(`%cVetor: %c${vetor}\n`, 'color: orange', 'color: yellow');

    for (let i in vetor) {
      if (vetor[i] !== vetorAnterior[i]) {
        trocas++;
      } else {
        let contVetorAnterior = 0;
        let contNovoVetor = 0;
        for (let j = 0; j < i; j++) {
          // console.log(
          //   `%cVetor antigo: %c${vetorAnterior[j]} === ${vetorAnterior[i]}`,
          //   'color: orange',
          //   'color: lime',
          // );
          if (vetorAnterior[j] === vetorAnterior[i]) {
            contVetorAnterior++;
          }
          // console.log(
          //   `%cVetor novo: %c${vetor[j]} === ${vetor[i]}`,
          //   'color: orange',
          //   'color: lime',
          // );
          if (vetor[j] === vetor[i]) {
            contNovoVetor++;
          }
        }
        // console.log(
        //   `%c${contNovoVetor} !== ${contVetorAnterior}`,
        //   'color: cyan',
        // );
        if (contNovoVetor !== contVetorAnterior) {
          trocas++;
        }
      }
    }

    divisor *= 10;
  }
  return trocas;
}
