let trocas = 0;
let tamanhoVetorInicial = 0;

// Para fazer um teste de mesa, basta descomentar os console.log e analisar os resultados

function merge(esquerda, direita) {
  // console.log('%cMerge:', 'color: orange', esquerda, direita);
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
  // console.log(
  //   'Resultado:',
  //   resultado.concat(esquerda.slice(e)).concat(direita.slice(d)),
  // );
  return resultado.concat(esquerda.slice(e)).concat(direita.slice(d));
}

export default function mergeSort(vetor_) {
  if (tamanhoVetorInicial === 0) {
    tamanhoVetorInicial = vetor_.length;
  }
  // console.log('Vetor:', vetor_);
  const vetor = vetor_;
  let tamanho = vetor.length;
  if (tamanho < 2) {
    return vetor;
  }
  let meio = Math.floor(tamanho / 2),
    esquerda = vetor.slice(0, meio),
    direita = vetor.slice(meio);
  const merge_ = merge(mergeSort(esquerda), mergeSort(direita));
  return merge_.length === tamanhoVetorInicial ? [trocas, merge_] : merge_;
}
