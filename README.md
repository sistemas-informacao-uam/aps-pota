# aps-pota
APS de POTA - Arthur, Paulo e Guilherme

### Alterações nos algortimos

Fizemos alterações nos algoritmos para que fosse realizada a contagem de trocas que ocorrem durante sua execução. Por **trocas**, nós interpretamos como um valor trocando de lugar com outro, ou no caso do CountSort e Radix por exemplo, como toda vez que um valor é inserido no vetor em uma posição diferente do que estava anteriormente.

### Como rodar a página

Faça o download dos arquivos usando o git ou baixando direto o arquivo .zip ali no botão verde escrito "Code"

```git clone https://github.com/sistemas-informacao-uam/aps-pota.git```

Nesse caso não dá para apenas abrir o arquivo **index.html**, você precisa rodar esse arquivo por um server http. Tem vários jeitos de fazer isso, mas de longe o mais simples é usar a extensão **live server** do Visual Studio Code.

É só procurar ela na loja, instalar e apertar com o botão direito no **index.html** e escolher a opção "Open with Live Server", ou apertar lá no canto inferior direito no botão "Go Live". Feito isso você pode acessar o endereço ``localhost:5500`` no navegador. Recomendo que use o Google Chrome ou qualquer variação (Chromium, Brave, Novo Edge...), pois foi o ambiente em que testamos.

E pronto, agora você já vai poder visualizar a página.

### Opções extras

* Para visualizar com 10.000 itens você pode passar um parâmetro especial pela url ``localhost:5500/?desejaFritarSeuPC=true``
* Abrindo também o console do navegador, você vai poder ter uma visualização mais específica para cada algoritmo e como eles se comportam com dois casos especiais
