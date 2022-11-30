let identificador = "1";
let nome = "José silva costa";
let email = "      jose@email.com  ";

if(identificador.length < 6) console.log(identificador.padStart(6, "0"));


let nomeArray = nome.split(" ").map(palavra => palavra.charAt().toUpperCase() ? palavra.charAt().toUpperCase() + palavra.slice(1) : -1);

console.log(nomeArray.join(" "))


console.log(email.trimStart());