const numeroCartao = '1111222233334444';

const primeirosNumeros = numeroCartao.slice(0,4);
const ultimosNumeros = numeroCartao.slice(12,16);
const resto = numeroCartao.slice(4, 11).length

console.log(`${primeirosNumeros}${"*".repeat(resto)}${ultimosNumeros}`)
