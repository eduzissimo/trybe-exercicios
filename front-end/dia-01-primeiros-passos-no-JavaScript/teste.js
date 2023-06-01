


let salarioBase = 5462

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