function valorMin(vetor) {
  return Math.min.apply(Math, vetor);
}

function valorMax(vetor) {
  return Math.max.apply(Math, vetor);
}

function algorithmCountSort(vetor, min, max) {
  const vetorOriginal = [...vetor];
  let trocas = 0,
    count = [];

  const len = vetor.length;

  for (let i = 0; i <= max; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < len; i++) {
    count[vetor[i]] += 1;
  }

  for (let i = min, j = 0; i <= max; i++) {
    let qtdVezesNumeroApereceAnteriormenteVetorAtual = 0;
    while (count[i] > 0) {
      if (i !== vetor[j]) {
        trocas++;
        vetor[j] = i;
      } else {
        let contVezesNumeroApareceVetorOriginal = 0;
        for (let k = 0; k < j; k++) {
          if (vetorOriginal[k] === i) {
            contVezesNumeroApareceVetorOriginal++;
          }
        }

        if (
          qtdVezesNumeroApereceAnteriormenteVetorAtual !==
          contVezesNumeroApareceVetorOriginal
        ) {
          trocas++;
          vetor[j] = i;
        }
      }

      j++;
      count[i]--;
      qtdVezesNumeroApereceAnteriormenteVetorAtual++;
    }
  }
  return trocas;
}

export default function countSort(vetor) {
  const array = [...vetor];
  const min = valorMin(array);
  const max = valorMax(array);
  return algorithmCountSort(array, min, max);
}
