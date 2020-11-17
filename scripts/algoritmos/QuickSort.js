let trocas = 0;

function swap(vetor, indexEsquerdo, indexDireito) {
  let temp = vetor[indexEsquerdo];
  vetor[indexEsquerdo] = vetor[indexDireito];
  vetor[indexDireito] = temp;
  trocas++;
}

function partition(vetor, indexEsquerdo, indexDireito) {
  let pivot = vetor[Math.floor((indexDireito + indexEsquerdo) / 2)], //middle element
    i = indexEsquerdo, //left pointer
    j = indexDireito; //right pointer
  while (i <= j) {
    while (vetor[i] < pivot) {
      i++;
    }
    while (vetor[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(vetor, i, j);
      i++;
      j--;
    }
  }
  return i;
}

export default function quickSort(
  vetor,
  indexEsquerdo = 0,
  indexDireito = vetor.length - 1,
) {
  let index;
  if (vetor.length > 1) {
    index = partition(vetor, indexEsquerdo, indexDireito);
    if (indexEsquerdo < index - 1) {
      quickSort(vetor, indexEsquerdo, index - 1);
    }
    if (index < indexDireito) {
      quickSort(vetor, index, indexDireito);
    }
  }
  return trocas;
}
