function valorMin(vetor) {
  return Math.min.apply(Math, vetor);
}

function valorMax(vetor) {
  return Math.max.apply(Math, vetor);
}

function algorithmCountSort(vetor, min, max) {
  let trocas = 0;
  let i = min,
    j = 0,
    len = vetor.length,
    count = [];
  for (i; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < len; i++) {
    count[vetor[i]] += 1;
  }
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      vetor[j] = i;
      j++;
      count[i]--;
      trocas++;
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
