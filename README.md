# most-long-substring-algorithm

## Problema
Dada uma string S, encontre o comprimento da substring mais longa sem repetir
caracteres.

## Resolução
Foram implementadas duas funções:
1. `main() =>` responsável por ler os dados do teclado e chamar a função mostLongSubstringAlg;
2. `mostLongSubstringAlg() =>` reponsável por executar toda lógica do problema;

## Lógica utilizada na resolução do problema
Para encontrar o comprimento da maior substring foram criadas 3 variáveis:
1. `mostLongSubstr`: variavel utilizada para armazenar a maior substring encontrada;
2. `substr`: substring em processamento não repetida;
3. `processedChars`: caracteres já processados e não repetidos;

Após a inicialização das variáveis percorremos a string verificando se o caractere(`char`)
corrente está no array de caracteres processados(`processedChars`). Caso não esteja concatenamos o valor de char na variavel `substr` que inicialmente foi atribuida com o valor de string vazia (""). **Se não**, ou seja, se caso o caractere corrente estiver no array de caracteres processados, a variável substr recebe o valor do caractere corrente e limpamos o array de caracteres processados colocando apenas o caractere corrente dentro dele. E por fim verificamos se o tamanho da maior substring(`mostLongSubstr`) é menor que a substring não repetida. Caso seja atribuimos o valor de substr para variavel mostLongSubstr. Desta forma podemos garantir que a variavel mostLongSubstr sempre irá guardar a maior substring não repetida.

## Depedência
`node v12.22.12`



## Executar o algoritmo ::man_technologist::
```
git clone https://github.com/mathd1as/most-long-substring-algorithm.git
cd most-long-substring-algorithm.git/
node most-long-substring-alg.js
```