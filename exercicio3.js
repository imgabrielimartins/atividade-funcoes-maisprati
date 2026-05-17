/*
Função com parâmetros e retorno: Criar uma função que receba dois números e um
operador e retorne o resultado da operação.
Instruções:
Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
A função deve retornar o resultado da operação;
Chamar a função com diferentes operadores e exibir os resultados no console.
*/

function calculadora(num1, num2, operador){
    switch(operador){
        case '+':
                return num1 + num2
            case '-': 
                return num1 - num2
            case '*': 
                return num1 * num2
            case '/': 
                return num1 / num2
    }
}

console.log(calculadora(1, 2, '+'));
console.log(calculadora(1, 2, '-'));
console.log(calculadora(1, 2, '*'));
console.log(calculadora(1, 2, '/'));