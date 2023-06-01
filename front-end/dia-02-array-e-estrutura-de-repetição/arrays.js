const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;



for (let index = 0; index < numbers.length; index += 1) {
soma += numbers[index];
}

console.log(soma);

-------------------------------------------------------------


const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;



for (let index = 0; index < numbers.length; index += 1) {
soma += numbers[index];
}

let media = soma / numbers.length;

console.log(media);


-----------------------------------------------------------------------------


const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;



for (let index = 0; index < numbers.length; index += 1) {
soma += numbers[index];
}

let media = soma / numbers.length;


if (media > 20) {
    console.log('O valor da média aritmética é maior que 20')
}
else {
    console.log('O valor da média aritmética é menor ou igual a 20')
}


------------------------------------------------------------------------

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
};

console.log(maiorNumero);


---------------------------------------------------------------------------

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0){
        result += 1;
    }
};

if (result === 0){
    console.log ('Nenhum valor encontrado.');
}
else {
    console.log(result);
}


