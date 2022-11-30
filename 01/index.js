const comentario = "Esse COVID é muito perigoso!";
const censura = ["covid", "covid".toUpperCase(), "pandemia", "pandemia".toUpperCase()];

for (let palavra of censura) {
    if (comentario.includes(palavra)) console.log("Comentário bloqueado por conter palavras proibidas.");

    // seria legal checar cada letra ... :eyes:
}