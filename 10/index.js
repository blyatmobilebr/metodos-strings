const nomeArquivo = 'Foto da Familia.png';

if (nomeArquivo.endsWith(".jpg") || nomeArquivo.endsWith(".jpeg") || nomeArquivo.endsWith(".png") || nomeArquivo.endsWith(".gif")) {
    console.log("Arquivo Válido");
}

else {
    console.log("Arquivo Inválido");
}