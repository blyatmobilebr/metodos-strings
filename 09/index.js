const nome = 'Guido Cerqueira Júnior'.replace(/\s/g,"");

const prefixo = "@";
const menorOuIgual = `${prefixo}${nome.toLowerCase()}`;
const maior = `${prefixo}${nome.slice(0, 12).toLowerCase()}`

if (nome.length <= 13) {
    console.log(menorOuIgual);
}

else {
    console.log(maior)
}