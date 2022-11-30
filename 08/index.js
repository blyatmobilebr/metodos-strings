const cpf = "011.022.033-44";

function tirarSujeira(numero) {
    if (typeof numero === "string") return numero.replace(/\W+/g, "")
    else if (typeof numero === "number") { 
        numero = numero.toString();
        return numero.replace(/\W+/g, "");

        // iria checar pra BigInt, mas.... sem tempo
    }

}

console.log(tirarSujeira(9348349-363))