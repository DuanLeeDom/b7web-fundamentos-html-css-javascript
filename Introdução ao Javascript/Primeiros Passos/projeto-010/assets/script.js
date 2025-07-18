// Multi-condicionais (&& e ||)

let idade = 18;

/*
if (idade >= 18) {
    if (idade < 60) {
        console.log("Você é um adulto.");
    }
}
*/

/*
if (idade >= 18 && idade <= 60) {
    console.log("Você é um adulto.")
}
*/

// Condicional Dupla (if else)
if (idade < 18) {
    console.log("Você é uma criança.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
} else if (idade >= 60) {
    console.log("Você é um idoso.")
}