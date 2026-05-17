# Atividade — Funções em JavaScript | MaisPrati

Exercícios práticos sobre funções em JavaScript desenvolvidos como parte da atividade da formação **Mais Pra ti**.

---

## 📚 Conteúdo

### 1. Média de Três Notas
Função que recebe três notas como parâmetros e retorna a média.

```javascript
function mediaNotas(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3
}

console.log(mediaNotas(4, 6, 9)) // 6.333...
```

**Conceitos praticados:** parâmetros, operadores aritméticos, ordem de precedência, `return`.

---

### 2. Maior ou Menor de Idade
Função que verifica se uma pessoa é maior ou menor de idade com base na idade informada.

```javascript
function maiorOuMenor(idade) {
  if (idade >= 18) {
    return "Você é maior de idade"
  } else {
    return "Você é menor de idade"
  }
}

console.log(maiorOuMenor(18)) // "Você é maior de idade"
```

**Conceitos praticados:** `if/else`, operador `>=`, retorno de strings.

---

### 3. Calculadora
Função que recebe dois números e um operador e retorna o resultado da operação.

```javascript
function calculadora(num1, num2, operador) {
  switch (operador) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    case '/': return num1 / num2
  }
}

console.log(calculadora(1, 2, '+')) // 3
console.log(calculadora(1, 2, '-')) // -1
console.log(calculadora(1, 2, '*')) // 2
console.log(calculadora(1, 2, '/')) // 0.5
```

**Conceitos praticados:** `switch/case`, múltiplos operadores, ordem dos parâmetros.

---

## 🛠️ Como executar

1. Clone o repositório:
```bash
git clone https://github.com/imgabrielimartins/atividade-funcoes-maisprati.git
```

2. Acesse a pasta:
```bash
cd atividade-funcoes-maisprati
```

3. Execute com Node.js:
```bash
node nome-do-arquivo.js
```

---

## 🚀 Tecnologias

- JavaScript (ES6+)
- Node.js

---

## 👤 Autor

**Gabrieli Martins**  
[GitHub](https://github.com/imgabrielimartins)