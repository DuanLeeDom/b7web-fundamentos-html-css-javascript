// Condicional Ternário

/*
let isMember = true;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Você é membro' : 'Você não é membro'); 
console.log("Frete: " + shipping);
*/

let age = 90;
// let isAdult = age >= 18 ? 'Sim' : 'Não'; // ou colocar "()" para deixar organizado
// let isAdult = ((age >= 18) ? 'Sim' : 'Não'); // aqui é usando "()"
let isAdult = ((age >= 18 && age < 60) ? 'Sim' : 'Não'); // colocar mais parametros também

console.log(idAdult)