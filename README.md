# Sistema de Entrada e Registro de Notas em CSV
# Integrantes: Igor Aparecido 2304073, André Vitor Lopes 2504686

Este projeto é um script em TypeScript que permite coletar informações de alunos via linha de comando, calcular a média das notas, verificar a situação do aluno (aprovado ou reprovado) com base em faltas e notas, e salvar esses dados em um arquivo CSV.

## Funcionalidades

- Solicita dados do aluno: nome, série e total de faltas.
- Solicita as notas de 8 avaliações para cada uma das 5 matérias.
- Calcula a média geral das notas.
- Verifica a situação do aluno:
- Aprovado se estiver dentro do limite de faltas e tiver média maior ou igual a 7.
- Reprovado caso contrário.

## Salva todas as informações em um arquivo CSV (students.csv), com cabeçalho e linhas para cada aluno registrado.

Como usar
Pré-requisitos

Node.js instalado na sua máquina.

TypeScript instalado globalmente ou no projeto:

```bash
npm install typescript --save-dev
```

# Passos para executar o script

## Clone ou copie o arquivo index.ts para seu ambiente local.

Compile o código TypeScript para JavaScript:

```bash
npx tsc index.ts
```

Execute o script compilado com Node.js:

```bash
node index.js
```

Siga as instruções na linha de comando para inserir os dados do aluno.

O arquivo students.csv será criado ou atualizado no diretório do projeto, contendo os dados inseridos.

Estrutura do CSV

O arquivo CSV conterá as seguintes colunas:

- Nome
- Série
- Faltas
- Matemática 1 até Matemática 8
- Português 1 até Português 8
- Geografia 1 até Geografia 8
- História 1 até História 8
- Química 1 até Química 8

## Cada linha representa os dados completos de um aluno.

Exemplo de uso
Digite o seu nome: João Silva
Digite a sua série: 3
Digite o total de faltas: 20
Digite a nota 1 da matéria Matemática: 8
...
Digite a nota 8 da matéria Química: 7

Saída esperada:
========== Boletim: ==========

Nome: João Silva
Série: 3
Faltas: 20 | Limite 75
Média de notas do aluno 7.5

Situação: Aprovado
=============================

