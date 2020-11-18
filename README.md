# aps-pota

APS de POTA - Arthur, Paulo e Guilherme

<p align=center>
  <img width="700px" src="https://github.com/sistemas-informacao-uam/aps-pota/blob/master/.github/print.png">
</p>

## Alterações nos algortimos

Fizemos alterações nos algoritmos para que fosse realizada a contagem de trocas que ocorrem durante sua execução. Por **trocas**, nós interpretamos como um valor trocando de lugar com outro, ou no caso do CountSort e Radix por exemplo, como toda vez que um valor é inserido no vetor em uma posição diferente do que estava anteriormente.

## Como rodar a página

Faça o download dos arquivos usando o git ou baixando direto o arquivo .zip ali no botão verde escrito "Code"

`git clone https://github.com/sistemas-informacao-uam/aps-pota.git`

Nesse caso não dá para apenas abrir o arquivo **index.html**, você precisa rodar esse arquivo por um server http. Tem vários jeitos de fazer isso, mas de longe o mais simples é usar a extensão **live server** do Visual Studio Code.

É só procurar ela na loja, instalar e apertar com o botão direito no **index.html** e escolher a opção "Open with Live Server", ou apertar lá no canto inferior direito no botão "Go Live". Feito isso você pode acessar o endereço `localhost:5500` no navegador. Recomendo que use o Google Chrome ou qualquer variação (Chromium, Brave, Novo Edge...), pois foi o ambiente em que testamos.

E pronto, agora você já vai poder visualizar a página.

## Opções extras

- Para visualizar com 10.000 itens você pode passar um parâmetro especial pela url `localhost:5500/?desejaFritarSeuPC=true`
- Abrindo também o console do navegador, você vai poder ter uma visualização mais específica para cada algoritmo e como eles se comportam com dois casos especiais

## Como foram gerados os vetores aleatórios?

Deixamos de maneira bem dinâmica, primeiro é definido um "esqueleto" dos vetores que você quer montar. Nesse caso vamos montar vetores dos tamanhos 5, 10, 50, 100 e 1000. Mas poderia ser qualquer outro valor inteiro acima de 0.

E depois de declarado eu chamo a função `gerarVetores` passando o número de vetores que eu quero pra cada um daqueles tamanhos e eu passo a minha estrutura.

```js
const esqueletoVetores = {
  5: [],
  10: [],
  50: [],
  100: [],
  1000: [],
};

const vetores = gerarVetores(50, esqueletoVetores);
```

Na função `gerarVetores` eu crio uma quantidade x de vetores com números aleatórios - através da função `gerarVetorDeNumerosAleatorios` - com o tamanho determinado pelas chaves daquele esqueleto. E retorno um objeto com a mesma estrutura daquele esqueleto, só que agora com cada chave possuindo x vetores de números aleatórios com o tamanho correspondente a chave.

```js
function gerarVetorDeNumerosAleatorios(tamanho) {
  const vetor = [];

  for (let i = 0; i < tamanho; i++) {
    vetor[i] = Math.floor(Math.random() * (99999 + 1));
  }

  return vetor;
}

function gerarVetores(quantidade, vetores) {
  const qtdVetores = quantidade;

  Object.keys(vetores).forEach(key => {
    for (let i = 0; i < qtdVetores; i++) {
      vetores[key].push(gerarVetorDeNumerosAleatorios(key));
    }
  });

  return vetores;
}
```

## Como foram adaptados os algoritmos para realizar a contagem do número de comparações?

Antes de responder, vou fazer uma explicação da pequena mudança que fizemos. Em vez de contar o número de comparações, nós fizemos a contagem do número de trocas que ocorrem dentro do vetor. Foi isso que entendemos quando perguntamos na aula, e chegamos a conclusão de que fazia mais sentido já que um algortimo como o count sort não faz comparações.

Dito isso, cada algortimo foi feito de forma diferente.

### Quick e Heap

Para os que tinham o método swap (quick e heap) nós fizemos a soma das trocas toda vez que esse método era executado.

```js
function swap(vetor, indexEsquerdo, indexDireito) {
  let temp = vetor[indexEsquerdo];
  vetor[indexEsquerdo] = vetor[indexDireito];
  vetor[indexDireito] = temp;
  trocas++;
}
```

### Bubble, Selection e Insertion

Para o bubble, selection e insertion era bem evidente quando ocorria uma troca, já que fica bem claro quando você está pegando um valor e movendo de lugar. Este é o exemplo no bubble.

```js
if (vetor[j] > vetor[j + 1]) {
  let temp = vetor[j];
  vetor[j] = vetor[j + 1];
  vetor[j + 1] = temp;
  trocas++;
}
```

### Merge

Para o merge sort deu para perceber que se o valor no vetor da esquerda é maior que o do vetor na direita, então eles acabam "trocando" de lugar já que o valor no vetor da direita é inserido primeiro no novo vetor. Então utilizamos disso para fazer contagem do número de trocas.

```js
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
```

### Count e Radix

Para o count e o radix usamos a mesma lógica, já que o radix implementa o count, então a explicação será focada no count.

Nesse caso, a lógica para fazer a contagem foi um pouco mais complexa. Para facilitar considere **resultado** como o vetor após o count ser realizado e **anterior** com o vetor antes de ser ordenado.

O fluxo básico é:

1. Se o elemento em resultado[i] for diferente de anterior[i], então temos uma troca
2. Se o elemento em resultado[i] for igual de anterior[i], então fazemos outra verificação

Vamos analisar o seguinte caso:
Anterior = [0, 1, 7, 7, 1]
Resultado = [0, 1, 1, 7, 7]

Apesar do número 7 estar em anterior[3] e resultado[3], nesse caso ainda continua ocorrendo uma troca. Já que o vetor é estável, o 7 de anterior[3] agora está em resultado[4].

Considerando isso, a lógica para fazer verificação segue os seguintes passos:

1. Quantos números 7 eu tenho antes de anterior[3]: 1
2. Quantos números 7 eu tenho antes de resultado[3]: 0

Já que a quantidade de números 7 antes é diferente para esses dois, eu posso concluir que estou tratando de elementos diferentes. A primeiro momento se tem a falsa ilusão de que não ocorreu troca, mas se olhar com mais calma e considerar que o algoritmo é estável da para perceber esse detalhe.

```js
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
```

## O que foi desenvolvido para que cada algoritmo ordenasse os mesmos vetores que os demais?

Os vetores são gerados apenas uma vez naquela função de `gerarVetores` e ficam armazenados na constante **vetores** sem ser alterados. A partir disso, fizemos com que toda vez que um vetor fosse passado para os algoritmos, fosse gerada um "cópia" dele para que o vetor original não fosse afetado.

No javascript isso foi feito usando a funcionalidade de desestruturação, em que você usa `...` antes de um objeto (para o javascript um array também é um objeto), e ele faz um espalhamento dos itens daquele objeto. Então nesse caso faço uma desestruturação de **vetor\_** para dentro de um novo array e atribuo esse array para a variável **vetor** `const vetor = [...vetor_]`.

Em todos os algoritmos usamos o mesmo princípio,

```js
export default function insertionSort(vetor_) {
  const vetor = [...vetor_];
  ...
}
```

## Como as médias são geradas?

As médias seguem a mesma estrutura daquele "esqueletoVetores", só que em vez de ter chaves que guardam arrays, essas chavem vão guadar a média de trocas.

Para cada chave (5, 10, 50, 100... - que contém aqueles 50 vetores), é chamada a função `obterMediaDeTrocas`, em que usamos o `reduce` para executar o algortimo escolhido várias vezes (nesse caso 50, porque é o tamanho do vetor). E acumular o retorno (que são as trocas) para gerar um total de trocas, e após isso é feita uma divisão de total de trocas pelo número total de vetores, dessa forma gerando a média.

```js
const mediasQuickSort = {};
Object.keys(vetores).forEach(key => {
  mediasQuickSort[key] = obterMediaDeTrocas(vetores[key], quickSort);
});

function obterMediaDeTrocas(vetores, algoritmo) {
  return (
    vetores.reduce((acumulador, vetor, index) => {
      if (index === 1) {
        return algoritmo(acumulador) + algoritmo(vetor);
      }

      const trocas = algoritmo(vetor);

      return acumulador + trocas;
    }) / vetores.length
  );
}
```

## Resultados

Em relação ao número de trocas podemos perceber que conforme o número de elementos aumenta, os que se saem melhor são o selection, merge e o count. E já do outro lado, temos o bubble e o insertion (mais pra frente falo mais sobre o insertion) sendo os que mais fazem trocas.

### Bubble e Insertion

De longe são os que mais fazem trocas. Com pouco elementos eles ainda acabam ficando abaixo de outros como Heap e Radix, mas quando passa de 15 elementos já começa a crescer muito rápido.

### Heap

Comparado a maioria ele tem também um alto número de trocas, mas não chega a valores tão absurdos quanto o do bubble.

### Merge, Count e Selection

Estes são os que menos apresentam trocas, se mantendo em média 2% menor do que o número de elementos no vetor.

### Radix

O radix apresentou um comportamento interessante, em que ele fica com a média de trocas muito próximo ao número total de itens no vetor multiplicado por 5. Apesar de ser um dos algoritmos mais rápidos, ele fica no meio termo em relação ao número de trocas, ficando com menos trocas que o Heap e mais trocas que os demais citados acima.

### Quick

O quick tem o comportamento parecido com o do radix, mesmo sendo um dos mais rápido ele continua tendo um número de trocas maior que merge, count e selection.
