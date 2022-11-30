const celular = 7199918888;
let ddd = "", prefixo = "";
let primeirosNumeros = "", ultimosNumeros = "";


function validar(numero) {
    const texto = numero.toString();

    if (texto.length === 11) {
        ddd = `(${texto.slice(0,2)})`;
        prefixo = texto.slice(2,3);
        primeirosNumeros = texto.slice(3,7);
        ultimosNumeros = texto.slice(7, 12)
        return `${ddd} ${prefixo} ${primeirosNumeros}-${ultimosNumeros}`;

    } 
    
    else if (texto.length === 10) {
        ddd = texto.slice(0,2);
        primeirosNumeros = texto.slice(2,6);
        ultimosNumeros = texto.slice(6, 10)
        return`(${ddd}) 9 ${primeirosNumeros}-${ultimosNumeros}`;
    }

    else if (texto.length === 8) {
        prefixo = 9;
        primeirosNumeros = texto.slice(0,4);
        ultimosNumeros = texto.slice(4,9);

        return `${prefixo} ${primeirosNumeros}-${ultimosNumeros}`;
    }
}


console.log(validar(44444444));