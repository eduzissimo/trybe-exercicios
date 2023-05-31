1


let num1 = 10;
let num2 = 5;

console.log('Soma: ' + (num1 + num2));
console.log('Subtração: ' + (num1 - num2));
console.log('Multiplicação: ' (num1 * num2));
console.log('Divisão: ' + (num1 / num2));
console.log('Módulo: ' + (num1 % num2));


2


const num1 = 25;
const num2 = 24;

if (num1 > num2) {
    console.log(num1 + ' é maior que ' + num2);

}
else if (num1 === num2){
    console.log(num1 + ' é igual a ' + num2);
}
else {
    console.log(num1 + ' é menor que ' + num2);
}




3


const num1 = 30;
const num2 = 25;
const num3 = 24;

if (num1 > num2 && num1 > num 3){
    console.log('O maior número é: ' + num1);
}
else if (num2 > num1 && num2 > num3){
    console.log('O maior número é: ' + num2);
}
else if (num3 > num1 && num3 > num2){
    console.log('O maior número é: ' + num3);
}
else {
    console.log('Os números são iguais');
}




4


let anguloA = 130;
let anguloB = 40;
let anguloC = 10;

let somaDosAngulos = anguloA + anguloB + anguloC;
let angulosValidos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(angulosValidos) {
if (somaDosAngulos === 180){
    console.log(true)
}
else if (somaDosAngulos < 180){
    console.log(false)
}
else {
    console.log('Inválido')
}
}





const num1 = 1;
const num2 = 5;
const num3 = 4;

let numeroPar = false;

if ((num1 % 2 === 0 && num 2 % 2 === 0 && num3 % 2 === 0)) {
    numeroPar = true;
}

console.log(numeroPar);




6



let aliquotaINSS;
let aliquotaIR;

let salarioMinimo = 2000;

if (salarioMinimo < 1556.94) {
    aliquotaINSS = salarioMinimo * 0.08;
}
else if (salarioMinimo <= 2826.65) {
    aliquotaINSS = salarioMinimo * 0.09;
}
else if (salarioMinimo <= 5189.82) {
    aliquotaINSS = salarioMinimo * 0.11;
}
else if (salarioMinimo > 5189.82) {
    aliquotaINSS = 570.88;
}


let salarioBase = salarioMinimo - aliquotaINSS

if (salarioBase < 1903.98) {
    aliquotaIR = 0;
}
else if (salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 0.075) - 142.80;
}
else if (salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0.15) - 354,80;
}
else if (salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0.225) - 636.13;
}
else if (salarioBase > 4664.68){
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

console.log("Salário: R$" + (salarioBase + aliquotaIR));














