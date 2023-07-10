const allEmployees = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().replace(' ', '_');
  return { nomeCompleto, email: `${email}@trybe.com` };
};

const newEmployees = (retornaArray) => {
  const employees = {
    id1: retornaArray('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: retornaArray('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: retornaArray('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// console.log(newEmployees(allEmployees));

//

const checkNumber = (meuNumero, number) => meuNumero === number;
const geraNumero = (meuNumero, retorno) => {
  const number = Math.floor((Math.random()* 5) +1);

  return retorno(meuNumero, number) ? 'Parabéns!, você ganhou!' : 'Tente novamente.';
};

// console.log(geraNumero(3, checkNumber));

//

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaNotas = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } else if (studentAnswer === 'N.A') {
    return 0;
  }
    return 0.5;
};

const pontosTotais = (rightAnswer, studentAnswer, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswer.length; index++) {
    const retornoAction = action(rightAnswer[index], studentAnswer[index]);
    contador += retornoAction;
    
  }
  return `Resultado final: ${contador} pontos`;
};
// console.log(pontosTotais(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaNotas));

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
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
    releaseYear: 196,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
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



const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947).author.name;

};


const smallerName = () => {
  let nameBook;

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
};

const getNamedBook = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1980)
};

function everyoneWasBornOnSecXX() {
  return books.every((book) => (
    book.author.birthYear >= 1901 && book.author.birthYear <= 2000));
};

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
};

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}