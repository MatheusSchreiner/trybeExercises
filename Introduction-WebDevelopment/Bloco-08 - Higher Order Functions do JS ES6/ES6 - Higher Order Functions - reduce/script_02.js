
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


function allNames() {
  // escreva seu código aqui
  // Este concatNames não confundir com o método concat(), lembre-se os métodos precisam se ligar com as variaveis através de ponto igual o método reduce ali embaixo books.reduce(), fique esperto, por isso alterei o nome da variavel para concatNames, ela na vdd é só uma variavel que está armazenando uma função dentro dela.
  const concatNames = (valueInitial, arrayValues, index, arrayComplet) => {
    if (index < arrayComplet.length - 1) 
    return `${valueInitial} ${arrayValues.author.name},`;
    return `${valueInitial} ${arrayValues.author.name}.`;
  }
  return books.reduce(concatNames, 'Nomes:');
}

console.log(allNames());

assert.deepStrictEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");