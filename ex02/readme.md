2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

Resposta:

Na primeira linha, um valor é atribuído à variável numero. Em seguida, as variáveis a e b são inicializadas com 0 e 1, respectivamente.

Dentro do loop while, é verificado se o valor de b é menor que o número informado. Se for, o próximo valor da sequência de Fibonacci é calculado e atribuído à variável proximo, a é atualizado para o valor atual de b, e b é atualizado para o valor de proximo.

Após o loop while, é verificado se b é igual ao número informado pelo usuário. Se for, uma mensagem indicando que o número pertence à sequência de Fibonacci é exibida no console. Caso contrário, é exibida uma mensagem indicando que o número não pertence à sequência.