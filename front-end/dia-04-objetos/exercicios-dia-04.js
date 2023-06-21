const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

  console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama "${reader.favoriteBooks[0].title}".`);

-----------------------------EXERCICIO 2--------------------------------------------------------------

const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

  reader.favoriteBooks.push( {
    title: 'Harry Potter e o prisioneiro de Azkabam',
    author: 'J.K Rowling',
    publisher: 'Rocco',
  }
 
  )

  console.log(reader);


---------------------------------------------EXERCICIO 3-----------------------------------------------------------


const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    {
        title: 'Harry Potter e o prisioneiro de Azkabam',
        author: 'J.K Rowling',
        publisher: 'Rocco',
      }
    ]
}

const numFavoriteBooks = reader.favoriteBooks.length;

console.log(`${reader.name} tem ${numFavoriteBooks} livro favorito.`)
console.log(`${reader.name} tem ${numFavoriteBooks} livros favoritos.`);

------------------------------------------EXERCICIO 4------------------------------------------------------------------

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
    const costumerName = fullOrder.name;
    const phoneNumber = fullOrder.phoneNumber;
    const street = fullOrder.address.street;
    const addressNumber = fullOrder.address.number;
    const apartment = fullOrder.address.apartment;

    return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${addressNumber}, apartamento: ${apartment}`;
  }

  console.log(customerInfo(order));

  const orderModifier = (fullOrder) => {
    fullOrder.name = 'Luis Silva';
    fullOrder.payment.total = 50;
  

  const pizzas = Object.key(fullOrder.order.pizza).join(',');
  return `Olá, ${fullOrder.name}, o valor total de seu pedido é de R$${fullOrder.payment.total}.`

}

console.log(orderModifier(order));

  

-----------------------------------EXERCICIO 2.1----------------------------------------------------------------

const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  const getValueByNumber = (obj, index) => Object.values(obj)[index];

    console.log(getValueByNumber(school, 0));

const getNUmberOfStudents = (obj) => {
    let count = 0
    for (let index = 0; index < obj.lessons.length; index += 1){
        count += obj.lessons[index].students;
    }
    return count;
}
console.log(getNUmberOfStudents(school));

const verifyProp = (obj, key) => {
    for (let index = 0; index < obj.lessons.length; index += 1) {
        if (obj.lessons[index][key] === undefined) {
            return false;
        }
    }
    return true;
}
console.log(verifyProp(school, 'professor'));

const changeKey = (obj, curse, value) => {
    let findCurse;
    for (let index = 0; index < obj.lessons.length; index += 1){
        let element = obj.lessons[index];
        if (element.course === course) {
            findCurse = element;
            break;
        }
    }
    if (findCurse !== undefined) {
        findCurse.shift = value;
        return findCurse;
    } else {
        return 'Curso não encontrado';
    }
}
console.log(changeKey (school, 'Python', 'Noite'));

    ---------------------------------------------------------------------------------------------------------------

    const basket = [
        'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
        'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
        'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
        'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
        'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
        'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
        'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
        'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
        'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
        'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
        'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
        'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
        'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
        'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
        'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
        'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
        'Banana', 'Pera', 'Abacate', 'Uva',
      ];

      const result = {};
      for (let index = 0; index < basket.length; index += 1){
        let fruit = basket[index];
        if (!result[fruit]){
            result[fruit] = 1;
        } else {
            result[fruit] += 1;

        }

      };

      const entries = Object.entries(result);

      let newArray = [];
      for (let index = 0, index < entries.length; index += 1) {
        if (entries[index][1]) {
            newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
        } else {
            newArray.push(`${entries[index][1]} ${entries[index][0]}`);
        }
      };

      console.log(`Sua cesta possui: ${newArray.join(',')}.`);
      
