let tamanho;
let trocas = 0;

function heap_root(vetor, i) {
  let esquerda = 2 * i + 1;
  let direita = 2 * i + 2;
  let max = i;

  if (esquerda < tamanho && vetor[esquerda] > vetor[max]) {
    max = esquerda;
  }

  if (direita < tamanho && vetor[direita] > vetor[max]) {
    max = direita;
  }

  if (max != i) {
    swap(vetor, i, max);
    heap_root(vetor, max);
  }
}

function swap(vetor, index_A, index_B) {
  let temp = vetor[index_A];
  vetor[index_A] = vetor[index_B];
  vetor[index_B] = temp;
  trocas++;
}

export default function heapSort(vetor_) {
  trocas = 0;
  let vetor = [...vetor_];
  tamanho = vetor.length;

  for (let i = Math.floor(tamanho / 2); i >= 0; i -= 1) {
    heap_root(vetor, i);
  }

  for (let i = vetor.length - 1; i > 0; i--) {
    swap(vetor, 0, i);
    tamanho--;

    heap_root(vetor, 0);
  }

  return trocas;
}
