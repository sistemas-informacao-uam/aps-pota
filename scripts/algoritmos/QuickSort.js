let trocas = 0;

function swap(vetor, indexEsquerdo, indexDireito) {
  let temp = vetor[indexEsquerdo];
  vetor[indexEsquerdo] = vetor[indexDireito];
  vetor[indexDireito] = temp;
  trocas++;
}

function partition(vetor, indexEsquerdo, indexDireito) {
  let pivot = vetor[Math.floor((indexDireito + indexEsquerdo) / 2)],
    i = indexEsquerdo,
    j = indexDireito;
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
  vetor_,
  indexEsquerdo = 0,
  indexDireito = vetor_.length - 1,
  primeiro = true,
) {
  let vetor = [];

  if (primeiro) {
    vetor = [...vetor_];
    trocas = 0;
  } else {
    vetor = vetor_;
  }

  let index;

  if (vetor.length > 1) {
    index = partition(vetor, indexEsquerdo, indexDireito);
    if (indexEsquerdo < index - 1) {
      quickSort(vetor, indexEsquerdo, index - 1, false);
    }
    if (index < indexDireito) {
      quickSort(vetor, index, indexDireito, false);
    }
  }

  return trocas;
}
