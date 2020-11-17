let trocas = 0;
let tamanhoVetorInicial = 0;

function merge(esquerda, direita) {
  let resultado = [],
    tamanhoEsquerda = esquerda.length,
    tamanhoDireita = direita.length,
    e = 0,
    d = 0;
  while (e < tamanhoEsquerda && d < tamanhoDireita) {
    if (esquerda[e] < direita[d]) {
      resultado.push(esquerda[e]);
      e++;
    } else {
      trocas++;

      resultado.push(direita[d]);
      d++;
    }
  }
  return resultado.concat(esquerda.slice(e)).concat(direita.slice(d));
}

export default function mergeSort(vetor_) {
  trocas = 0;

  if (tamanhoVetorInicial === 0) {
    tamanhoVetorInicial = vetor_.length;
  }
  const vetor = [...vetor_];
  let tamanho = vetor.length;
  if (tamanho < 2) {
    return vetor;
  }
  let meio = Math.floor(tamanho / 2),
    esquerda = vetor.slice(0, meio),
    direita = vetor.slice(meio);
  const merge_ = merge(mergeSort(esquerda), mergeSort(direita));

  if (merge_.length === tamanhoVetorInicial) {
    tamanhoVetorInicial = 0;
    return trocas;
  }

  return merge_;
}
